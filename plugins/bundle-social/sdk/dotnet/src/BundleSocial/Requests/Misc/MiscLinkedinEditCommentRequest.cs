using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinEditComment operation.
/// </summary>
public sealed record MiscLinkedinEditCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscLinkedinCommentRequest? Body { get; init; }
}
