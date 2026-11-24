namespace Curlec.Requests.QrCodes;

/// <summary>
/// The inputs of the CloseQrCode operation.
/// </summary>
public sealed record CloseQrCodeRequest
{
    /// <summary>
    /// QR code ID (qr_*).
    /// </summary>
    public required string Id { get; init; }
}
