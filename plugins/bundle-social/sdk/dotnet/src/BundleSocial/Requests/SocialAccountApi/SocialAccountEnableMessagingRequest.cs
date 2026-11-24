using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountEnableMessaging operation.
/// </summary>
public sealed record SocialAccountEnableMessagingRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountMessagingEnableRequest? Body { get; init; }
}
