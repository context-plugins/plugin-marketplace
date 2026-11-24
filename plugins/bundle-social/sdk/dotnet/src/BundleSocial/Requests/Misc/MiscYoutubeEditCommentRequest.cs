using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeEditComment operation.
/// </summary>
public sealed record MiscYoutubeEditCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubeCommentRequest? Body { get; init; }
}
