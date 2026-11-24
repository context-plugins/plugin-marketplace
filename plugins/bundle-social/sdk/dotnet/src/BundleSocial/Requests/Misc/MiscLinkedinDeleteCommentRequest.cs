using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscLinkedinDeleteComment operation.
/// </summary>
public sealed record MiscLinkedinDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscLinkedinCommentRequest1? Body { get; init; }
}
