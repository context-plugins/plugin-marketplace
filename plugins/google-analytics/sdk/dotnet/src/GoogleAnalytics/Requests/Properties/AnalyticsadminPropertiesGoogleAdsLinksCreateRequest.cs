using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesGoogleAdsLinksCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesGoogleAdsLinksCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaGoogleAdsLink Body { get; init; }
}
