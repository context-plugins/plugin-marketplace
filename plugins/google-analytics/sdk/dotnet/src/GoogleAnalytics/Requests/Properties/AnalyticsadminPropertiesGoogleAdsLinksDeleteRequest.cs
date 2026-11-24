namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesGoogleAdsLinksDelete operation.
/// </summary>
public sealed record AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (googleAdsLinksId).
    /// </summary>
    public required string GoogleAdsLinksId { get; init; }
}
