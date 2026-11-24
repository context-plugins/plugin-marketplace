using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscInstagramDeleteComment operation.
/// </summary>
public sealed record MiscInstagramDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscInstagramCommentRequest? Body { get; init; }
}
