using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsGetPostAnalytics operation.
/// </summary>
public sealed record AnalyticsGetPostAnalyticsRequest
{
    public string? PostId { get; init; }

    public PlatformType? PlatformType { get; init; }

    public string? ImportedPostId { get; init; }
}
