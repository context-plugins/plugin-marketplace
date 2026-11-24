using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountDisableMessaging operation.
/// </summary>
public sealed record SocialAccountDisableMessagingRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountMessagingDisableRequest? Body { get; init; }
}
