using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookDeleteComment operation.
/// </summary>
public sealed record MiscFacebookDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookCommentRequest1? Body { get; init; }
}
