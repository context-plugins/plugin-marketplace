using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscBlueskyDeletePost operation.
/// </summary>
public sealed record MiscBlueskyDeletePostRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscBlueskyPostRequest? Body { get; init; }
}
