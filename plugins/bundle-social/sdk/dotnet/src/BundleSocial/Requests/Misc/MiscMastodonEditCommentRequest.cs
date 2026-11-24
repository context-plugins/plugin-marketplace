using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscMastodonEditComment operation.
/// </summary>
public sealed record MiscMastodonEditCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscMastodonCommentRequest? Body { get; init; }
}
