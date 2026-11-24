using BundleSocial.Models;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountProfileRefresh operation.
/// </summary>
public sealed record SocialAccountProfileRefreshRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1SocialAccountProfileRefreshRequest? Body { get; init; }
}
