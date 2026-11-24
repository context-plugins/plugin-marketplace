namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesDataStreamsDelete operation.
/// </summary>
public sealed record AnalyticsadminPropertiesDataStreamsDeleteRequest
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
