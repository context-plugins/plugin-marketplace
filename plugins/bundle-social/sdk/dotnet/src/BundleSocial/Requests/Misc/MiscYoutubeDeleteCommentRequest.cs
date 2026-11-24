using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscYoutubeDeleteComment operation.
/// </summary>
public sealed record MiscYoutubeDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscYoutubeCommentRequest1? Body { get; init; }
}
