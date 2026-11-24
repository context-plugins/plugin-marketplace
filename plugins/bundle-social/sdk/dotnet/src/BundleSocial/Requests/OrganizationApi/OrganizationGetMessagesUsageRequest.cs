using BundleSocial.Core.Validation.Attributes;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.OrganizationApi;

/// <summary>
/// The inputs of the OrganizationGetMessagesUsage operation.
/// </summary>
public sealed record OrganizationGetMessagesUsageRequest
{
    [Minimum(0)]
    public int? Offset { get; init; } = 0;

    [Minimum(1)]
    [Maximum(100)]
    public int? Limit { get; init; } = 10;

    public string? TeamId { get; init; }

    public SocialAccountType1BundleSocialOrganizationApi? SocialAccountType { get; init; }

    public string? SocialAccountId { get; init; }
}
