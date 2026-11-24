using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCreateRequest
{
    public required GoogleAnalyticsAdminV1BetaProperty Body { get; init; }
}
