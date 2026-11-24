using Bitly.Models;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the UpdateQrCodePublic operation.
/// </summary>
public sealed record UpdateQrCodePublicRequest
{
    /// <summary>
    /// The QR code ID
    /// </summary>
    public required string QrcodeId { get; init; }

    public PublicUpdateQrCodeRequest? Body { get; init; }
}
