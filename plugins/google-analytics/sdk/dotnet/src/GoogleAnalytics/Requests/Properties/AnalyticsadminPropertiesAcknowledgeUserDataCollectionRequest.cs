using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesAcknowledgeUserDataCollection operation.
/// </summary>
public sealed record AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest Body { get; init; }
}
