using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountSetChannel operation.
/// </summary>
public sealed record SocialAccountSetChannelRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountSetChannelRequest? Body { get; init; }
}
