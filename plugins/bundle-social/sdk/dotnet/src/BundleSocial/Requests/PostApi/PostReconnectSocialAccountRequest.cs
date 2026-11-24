using BundleSocial.Models;

namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostReconnectSocialAccount operation.
/// </summary>
public sealed record PostReconnectSocialAccountRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1PostReconnectSocialAccountRequest? Body { get; init; }
}
