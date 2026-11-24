namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomDimensionsGet operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomDimensionsGetRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (customDimensionsId).
    /// </summary>
    public required string CustomDimensionsId { get; init; }
}
