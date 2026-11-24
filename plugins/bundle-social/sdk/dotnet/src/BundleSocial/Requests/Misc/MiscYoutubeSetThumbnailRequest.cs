using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeSetThumbnail operation.
/// </summary>
public sealed record MiscYoutubeSetThumbnailRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubeThumbnailRequest? Body { get; init; }
}
