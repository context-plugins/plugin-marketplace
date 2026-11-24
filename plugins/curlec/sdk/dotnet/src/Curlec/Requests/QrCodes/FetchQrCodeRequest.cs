namespace Curlec.Requests.QrCodes;

/// <summary>
/// The inputs of the FetchQrCode operation.
/// </summary>
public sealed record FetchQrCodeRequest
{
    /// <summary>
    /// QR code ID (qr_*).
    /// </summary>
    public required string Id { get; init; }
}
