function generateQRCode() {
    var subscriptionCode = document.getElementById('subscription_code').value;
    var currentDate = new Date().toISOString();
    var qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';

    var qrCodeText = "Codice Abbonamento: " + subscriptionCode + "\nData attuale: " + currentDate;

    var qr = new QRCode(qrCodeDiv, {
        text: qrCodeText,
        width: 200,
        height: 200
    });
}
