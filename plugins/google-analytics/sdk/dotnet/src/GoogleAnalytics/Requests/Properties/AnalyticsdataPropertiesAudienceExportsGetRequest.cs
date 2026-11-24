namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesAudienceExportsGet operation.
/// </summary>
public sealed record AnalyticsdataPropertiesAudienceExportsGetRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (audienceExportsId).
    /// </summary>
    public required string AudienceExportsId { get; init; }
}
