namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the DeleteQrCode operation.
/// </summary>
public sealed record DeleteQrCodeRequest
{
    /// <summary>
    /// The id of the QR Code to delete. You may use either <c>qrcodeId</c> (obtained via <c>/qrcodes/info</c> endpoint) or <c>externalId</c> prefixed with <c>ext_</c>.
    /// </summary>
    public required string QrcodeId { get; init; }
}
