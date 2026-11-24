using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomDimensionsCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomDimensionsCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaCustomDimension Body { get; init; }
}
