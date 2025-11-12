
export const patientAppointmentEmail = (
  email,
  firstname,
  lastname,
  appointmentDate,
  doctorName,
  status 
) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="UTF-8">
    <title>Appointment ${status}</title>
    <style>
      body {
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #333333;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 25px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
      }

      .message {
        font-size: 20px;
        font-weight: bold;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
      }

      .body {
        font-size: 16px;
        text-align: left;
        margin-bottom: 20px;
      }

      .cta {
        display: inline-block;
        padding: 10px 20px;
        background-color: #28a745;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }

      .cancelled {
        background-color: #dc3545;
      }

      .support {
        font-size: 14px;
        color: #777777;
        margin-top: 25px;
        text-align: center;
      }

      .highlight {
        font-weight: bold;
      }

      ul {
        text-align: left;
        list-style-type: none;
        padding-left: 0;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <div class="message">Appointment ${status}</div>
      
      <div class="body">
        <p>Dear ${firstname} ${lastname},</p>
        <p>Your appointment status has been <span class="highlight">${status}</span>.</p>
        <p><strong>Appointment Details:</strong></p>
        <ul>
          <li><strong>Date:</strong> ${appointmentDate}</li>
          <li><strong>Doctor:</strong> Dr. ${doctorName}</li>
        </ul>
        

      </div>

      <div style="text-align:center;">
        <a href="mailto:info@ZeeCare.com" class="cta ${
          status.toLowerCase() === "cancelled" ? "cancelled" : ""
        }">
          Contact Support
        </a>
      </div>

      <div class="support">
        For any questions, please reach out to us at 
        <a href="mailto:info@zeecare.com">info@zeecare.com</a> or call us at +91-9876543210.
      </div>
    </div>
  </body>
  
  </html>`;
};
