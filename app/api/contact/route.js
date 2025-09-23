console.log("✅ EMAIL_USER:", process.env.EMAIL_USER);
console.log("✅ EMAIL_RECEIVER:", process.env.EMAIL_RECEIVER);

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    console.log("📬 Sende Mail an:", process.env.EMAIL_RECEIVER);
    console.log("📩 Eingehende Daten:", data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"COKAJ Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Neue Anfrage von ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:20px; border:1px solid #eee;">
            <h2 style="color:#b91c1c; text-align:center;">Neue Kontaktanfrage</h2>
            <p><strong>👤 Name:</strong> ${data.name}</p>
            <p><strong>📧 Email:</strong> ${data.email}</p>
            <p><strong>📝 Nachricht:</strong></p>
            <p style="background:#f3f4f6; padding:10px; border-radius:5px;">${data.message}</p>
            <hr style="margin:20px 0;" />
            <p style="font-size:12px; color:#666; text-align:center;">
              Diese Nachricht wurde automatisch über das Kontaktformular auf <strong>cokaj.de</strong> gesendet.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Fehler in API:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
