namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomMetricsGet operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomMetricsGetRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (customMetricsId).
    /// </summary>
    public required string CustomMetricsId { get; init; }
}
