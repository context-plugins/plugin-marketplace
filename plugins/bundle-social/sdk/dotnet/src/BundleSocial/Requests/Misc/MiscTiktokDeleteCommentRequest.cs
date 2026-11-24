using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTiktokDeleteComment operation.
/// </summary>
public sealed record MiscTiktokDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscTiktokCommentRequest? Body { get; init; }
}
