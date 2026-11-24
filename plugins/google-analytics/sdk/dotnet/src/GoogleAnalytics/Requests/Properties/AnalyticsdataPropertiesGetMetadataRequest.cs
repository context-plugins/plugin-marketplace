namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesGetMetadata operation.
/// </summary>
public sealed record AnalyticsdataPropertiesGetMetadataRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }
}
