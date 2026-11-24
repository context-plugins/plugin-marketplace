using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Requests.AdImages;

/// <summary>
/// The inputs of the UploadAdImage operation.
/// </summary>
public sealed record UploadAdImageRequest
{
    /// <summary>
    /// The ID of the ad account (numeric, without the act_ prefix)
    /// </summary>
    public required string AdAccountId { get; init; }

    /// <summary>
    /// The image file to upload
    /// </summary>
    public BinaryContent? Filename { get; init; }
}
