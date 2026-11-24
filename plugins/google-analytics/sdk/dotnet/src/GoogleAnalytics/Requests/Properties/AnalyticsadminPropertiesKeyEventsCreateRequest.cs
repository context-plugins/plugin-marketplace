using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesKeyEventsCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesKeyEventsCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaKeyEvent Body { get; init; }
}
