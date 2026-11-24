namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesKeyEventsDelete operation.
/// </summary>
public sealed record AnalyticsadminPropertiesKeyEventsDeleteRequest
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
