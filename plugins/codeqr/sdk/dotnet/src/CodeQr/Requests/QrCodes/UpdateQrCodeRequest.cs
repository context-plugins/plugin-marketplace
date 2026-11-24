using CodeQr.Models;

namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the UpdateQrCode operation.
/// </summary>
public sealed record UpdateQrCodeRequest
{
    /// <summary>
    /// The id of the QR Code to update. You may use either <c>qrcodeId</c> (obtained via <c>/qrcodes/info</c> endpoint) or <c>externalId</c> prefixed with <c>ext_</c>.
    /// </summary>
    public required string QrcodeId { get; init; }

    public QrcodesRequest1? Body { get; init; }
}
