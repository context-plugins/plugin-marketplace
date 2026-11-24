using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscBlueskyDeleteComment operation.
/// </summary>
public sealed record MiscBlueskyDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscBlueskyCommentRequest? Body { get; init; }
}
