namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesKeyEventsGet operation.
/// </summary>
public sealed record AnalyticsadminPropertiesKeyEventsGetRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (keyEventsId).
    /// </summary>
    public required string KeyEventsId { get; init; }
}
