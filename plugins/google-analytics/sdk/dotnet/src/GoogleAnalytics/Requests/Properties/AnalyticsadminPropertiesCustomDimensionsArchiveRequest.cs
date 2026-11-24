namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomDimensionsArchive operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomDimensionsArchiveRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (customDimensionsId).
    /// </summary>
    public required string CustomDimensionsId { get; init; }

    public required object Body { get; init; }
}
