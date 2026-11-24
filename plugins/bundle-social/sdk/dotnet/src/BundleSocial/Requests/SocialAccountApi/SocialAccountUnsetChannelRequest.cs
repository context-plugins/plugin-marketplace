using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountUnsetChannel operation.
/// </summary>
public sealed record SocialAccountUnsetChannelRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountUnsetChannelRequest? Body { get; init; }
}
