using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTwitterDeleteTweet operation.
/// </summary>
public sealed record MiscTwitterDeleteTweetRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscTwitterTweetRequest? Body { get; init; }
}
