using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTwitterUnretweet operation.
/// </summary>
public sealed record MiscTwitterUnretweetRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscTwitterRetweetRequest? Body { get; init; }
}
