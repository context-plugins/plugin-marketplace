using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomMetricsPatch operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomMetricsPatchRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (customMetricsId).
    /// </summary>
    public required string CustomMetricsId { get; init; }

    /// <summary>
    /// Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleAnalyticsAdminV1BetaCustomMetric Body { get; init; }
}
