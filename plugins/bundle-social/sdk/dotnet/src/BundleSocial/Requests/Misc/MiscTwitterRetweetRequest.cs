using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTwitterRetweet operation.
/// </summary>
public sealed record MiscTwitterRetweetRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscTwitterRetweetRequest? Body { get; init; }
}
