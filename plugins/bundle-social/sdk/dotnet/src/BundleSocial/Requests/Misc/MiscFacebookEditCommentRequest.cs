using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookEditComment operation.
/// </summary>
public sealed record MiscFacebookEditCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookCommentRequest? Body { get; init; }
}
