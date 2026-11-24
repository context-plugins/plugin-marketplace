using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountConnectionCheck operation.
/// </summary>
public sealed record SocialAccountConnectionCheckRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountConnectionCheckRequest? Body { get; init; }
}
