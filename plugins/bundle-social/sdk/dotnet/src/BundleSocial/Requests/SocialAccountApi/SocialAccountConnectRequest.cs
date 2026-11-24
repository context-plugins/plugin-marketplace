using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountConnect operation.
/// </summary>
public sealed record SocialAccountConnectRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountConnectRequest? Body { get; init; }
}
