using BundleSocial.Core.Validation.Attributes;

namespace BundleSocial.Requests.SocialAccountApi;

/// <summary>
/// The inputs of the SocialAccountGetAccountsToDelete operation.
/// </summary>
public sealed record SocialAccountGetAccountsToDeleteRequest
{
    [Minimum(1.0)]
    public double Page { get; init; } = 1d;

    [Minimum(1.0)]
    [Maximum(100.0)]
    public double PageSize { get; init; } = 20d;
}
