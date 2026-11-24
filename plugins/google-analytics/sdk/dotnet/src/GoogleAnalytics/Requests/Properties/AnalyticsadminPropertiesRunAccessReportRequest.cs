using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesRunAccessReport operation.
/// </summary>
public sealed record AnalyticsadminPropertiesRunAccessReportRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaRunAccessReportRequest Body { get; init; }
}
