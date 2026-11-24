using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTwitterDeleteComment operation.
/// </summary>
public sealed record MiscTwitterDeleteCommentRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscTwitterCommentRequest? Body { get; init; }
}
