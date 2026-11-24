using Bitly.Models.Enums;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the GetQrCodeImagePublic operation.
/// </summary>
public sealed record GetQrCodeImagePublicRequest
{
    /// <summary>
    /// The QR Code ID
    /// </summary>
    public required string QrcodeId { get; init; }

    /// <summary>
    /// The format type of the image. If there is an image format in the header it takes precedence.
    /// </summary>
    public Format Format { get; init; } = Format.Svg;

    /// <summary>
    /// The file format for the QR code's image. If the accept header is application/json the image data will be wrapped in a json object, base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag.
    /// </summary>
    public string? Accept { get; init; }
}
