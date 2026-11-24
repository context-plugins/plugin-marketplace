using BundleSocial.Models;

namespace BundleSocial.Requests.Analytics;

/// <summary>
/// The inputs of the AnalyticsForceSocialAccountAnalytics operation.
/// </summary>
public sealed record AnalyticsForceSocialAccountAnalyticsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1AnalyticsSocialAccountForceRequest? Body { get; init; }
}
