using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountRefreshChannels operation.
/// </summary>
public sealed record SocialAccountRefreshChannelsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountRefreshChannelsRequest? Body { get; init; }
}
