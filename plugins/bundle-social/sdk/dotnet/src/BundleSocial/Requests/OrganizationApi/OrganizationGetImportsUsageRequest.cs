using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.OrganizationApi;

/// <summary>
/// The inputs of the OrganizationGetImportsUsage operation.
/// </summary>
public sealed record OrganizationGetImportsUsageRequest
{
    [Minimum(1.0)]
    public double Page { get; init; } = 1d;

    [Minimum(1.0)]
    [Maximum(100.0)]
    public double PageSize { get; init; } = 20d;

    public string? TeamId { get; init; }

    public SocialAccountTypeBundleSocialOrganizationApi? SocialAccountType { get; init; }

    public string? SocialAccountId { get; init; }
}
