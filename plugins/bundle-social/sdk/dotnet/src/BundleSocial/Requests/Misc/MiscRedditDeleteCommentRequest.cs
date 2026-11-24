using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscRedditDeleteComment operation.
/// </summary>
public sealed record MiscRedditDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscRedditCommentRequest1? Body { get; init; }
}
