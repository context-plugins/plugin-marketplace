using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscMastodonDeleteComment operation.
/// </summary>
public sealed record MiscMastodonDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscMastodonCommentRequest1? Body { get; init; }
}
