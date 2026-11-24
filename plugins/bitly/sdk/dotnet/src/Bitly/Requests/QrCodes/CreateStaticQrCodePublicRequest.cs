using Bitly.Models;
using Bitly.Models.Enums;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the CreateStaticQrCodePublic operation.
/// </summary>
public sealed record CreateStaticQrCodePublicRequest
{
    /// <summary>
    /// The image format. Supports <c>svg</c> and <c>png</c>. Ignored if the Accept header specifies an image type.
    /// </summary>
    public Format Format { get; init; } = Format.Svg;

    /// <summary>
    /// Controls the response format. Use <c>application/json</c> (default) to receive a JSON-wrapped base64 image, <c>image/svg+xml</c> to receive the raw SVG, or <c>image/png</c> to receive the raw PNG.
    /// </summary>
    public Accept? Accept { get; init; }

    public required PublicCreateStaticQrCodeRequest Body { get; init; }
}
