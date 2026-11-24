using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountCreatePortalLink operation.
/// </summary>
public sealed record SocialAccountCreatePortalLinkRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountCreatePortalLinkRequest? Body { get; init; }
}
