using System;

namespace BundleSocial.Requests.OrganizationApi;

/// <summary>
/// The inputs of the OrganizationGetDailyLimitsUsage operation.
/// </summary>
public sealed record OrganizationGetDailyLimitsUsageRequest
{
    public required string SocialAccountId { get; init; }

    public DateTimeOffset? Date { get; init; }
}
