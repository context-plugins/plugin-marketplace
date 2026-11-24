namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the GetQrCodeByIdPublic operation.
/// </summary>
public sealed record GetQrCodeByIdPublicRequest
{
    /// <summary>
    /// The QR Code ID
    /// </summary>
    public required string QrcodeId { get; init; }
}
