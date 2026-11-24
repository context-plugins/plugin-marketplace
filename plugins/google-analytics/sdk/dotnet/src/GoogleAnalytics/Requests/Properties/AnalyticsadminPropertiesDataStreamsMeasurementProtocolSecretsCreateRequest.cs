using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate operation.
/// </summary>
public sealed record AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (dataStreamsId).
    /// </summary>
    public required string DataStreamsId { get; init; }

    public required GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret Body { get; init; }
}
