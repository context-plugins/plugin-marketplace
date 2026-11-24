namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesConversionEventsDelete operation.
/// </summary>
public sealed record AnalyticsadminPropertiesConversionEventsDeleteRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (conversionEventsId).
    /// </summary>
    public required string ConversionEventsId { get; init; }
}
