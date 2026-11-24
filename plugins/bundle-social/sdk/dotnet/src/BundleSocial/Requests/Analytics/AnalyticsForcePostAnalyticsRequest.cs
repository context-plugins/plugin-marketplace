using BundleSocial.Models;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsForcePostAnalytics operation.
/// </summary>
public sealed record AnalyticsForcePostAnalyticsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AnalyticsPostForceRequest? Body { get; init; }
}
