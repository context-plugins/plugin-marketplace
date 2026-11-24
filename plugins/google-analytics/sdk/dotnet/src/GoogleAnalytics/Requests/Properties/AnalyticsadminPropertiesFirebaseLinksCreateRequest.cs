using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesFirebaseLinksCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesFirebaseLinksCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaFirebaseLink Body { get; init; }
}
