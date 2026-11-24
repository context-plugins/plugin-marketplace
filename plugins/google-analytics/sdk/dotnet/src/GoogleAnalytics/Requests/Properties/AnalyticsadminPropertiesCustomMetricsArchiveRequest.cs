namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomMetricsArchive operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomMetricsArchiveRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (customMetricsId).
    /// </summary>
    public required string CustomMetricsId { get; init; }

    public required object Body { get; init; }
}
