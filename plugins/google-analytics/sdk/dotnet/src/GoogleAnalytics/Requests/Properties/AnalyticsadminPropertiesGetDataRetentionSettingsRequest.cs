namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesGetDataRetentionSettings operation.
/// </summary>
public sealed record AnalyticsadminPropertiesGetDataRetentionSettingsRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }
}
