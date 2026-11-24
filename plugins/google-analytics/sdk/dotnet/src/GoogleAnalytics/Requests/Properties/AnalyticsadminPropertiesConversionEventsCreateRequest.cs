using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesConversionEventsCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesConversionEventsCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaConversionEvent Body { get; init; }
}
