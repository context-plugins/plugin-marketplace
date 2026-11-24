using ApiVerve.Core.Models;

namespace ApiVerve.Requests.Images;

/// <summary>
/// The inputs of the Webpconverter operation.
/// </summary>
public sealed record WebpconverterRequest
{
    /// <summary>
    /// Target format
    /// </summary>
    public required string OutputFormat { get; init; }

    /// <summary>
    /// Output quality (applies to jpg/webp)
    /// </summary>
    public int? Quality { get; init; }

    /// <summary>
    /// Maximum width in pixels (maintains aspect ratio)
    /// </summary>
    public int? MaxWidth { get; init; }

    /// <summary>
    /// Maximum height in pixels (maintains aspect ratio)
    /// </summary>
    public int? MaxHeight { get; init; }

    /// <summary>
    /// File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB)
    /// </summary>
    public required BinaryContent Image { get; init; }
}
