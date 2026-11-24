using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscRedditDeletePost operation.
/// </summary>
public sealed record MiscRedditDeletePostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscRedditPostRequest1? Body { get; init; }
}
