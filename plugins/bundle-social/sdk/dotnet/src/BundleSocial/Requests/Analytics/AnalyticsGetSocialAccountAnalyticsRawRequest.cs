using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsGetSocialAccountAnalyticsRaw operation.
/// </summary>
public sealed record AnalyticsGetSocialAccountAnalyticsRawRequest
{
    public required string TeamId { get; init; }

    public required PlatformType PlatformType { get; init; }
}
