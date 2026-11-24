using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountCopy operation.
/// </summary>
public sealed record SocialAccountCopyRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountCopyRequest? Body { get; init; }
}
