using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscRedditEditComment operation.
/// </summary>
public sealed record MiscRedditEditCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscRedditCommentRequest? Body { get; init; }
}
