using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsGetPostAnalyticsRaw operation.
/// </summary>
public sealed record AnalyticsGetPostAnalyticsRawRequest
{
    public string? PostId { get; init; }

    public PlatformType? PlatformType { get; init; }

    public string? ImportedPostId { get; init; }
}
