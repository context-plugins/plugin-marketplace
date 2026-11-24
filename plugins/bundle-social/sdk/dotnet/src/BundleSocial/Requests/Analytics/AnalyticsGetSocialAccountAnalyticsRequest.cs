using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsGetSocialAccountAnalytics operation.
/// </summary>
public sealed record AnalyticsGetSocialAccountAnalyticsRequest
{
    public required string TeamId { get; init; }

    public required PlatformType PlatformType { get; init; }
}
