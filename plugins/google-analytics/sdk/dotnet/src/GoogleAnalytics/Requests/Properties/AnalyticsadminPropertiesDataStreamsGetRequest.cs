namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesDataStreamsGet operation.
/// </summary>
public sealed record AnalyticsadminPropertiesDataStreamsGetRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (dataStreamsId).
    /// </summary>
    public required string DataStreamsId { get; init; }
}
