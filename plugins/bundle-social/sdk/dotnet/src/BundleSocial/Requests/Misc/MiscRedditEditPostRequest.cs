using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscRedditEditPost operation.
/// </summary>
public sealed record MiscRedditEditPostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscRedditPostRequest? Body { get; init; }
}
