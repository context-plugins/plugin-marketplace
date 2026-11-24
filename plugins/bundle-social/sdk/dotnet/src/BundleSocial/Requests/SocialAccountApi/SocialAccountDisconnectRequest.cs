using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountDisconnect operation.
/// </summary>
public sealed record SocialAccountDisconnectRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountDisconnectRequest? Body { get; init; }
}
