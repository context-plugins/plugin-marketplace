namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the DeleteQrCode operation.
/// </summary>
public sealed record DeleteQrCodeRequest
{
    /// <summary>
    /// The QR Code ID
    /// </summary>
    public required string QrcodeId { get; init; }
}
