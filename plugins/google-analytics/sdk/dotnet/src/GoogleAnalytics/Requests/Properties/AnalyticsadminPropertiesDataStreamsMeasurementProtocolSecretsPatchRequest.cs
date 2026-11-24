using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatch operation.
/// </summary>
public sealed record AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsPatchRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (dataStreamsId).
    /// </summary>
    public required string DataStreamsId { get; init; }

    /// <summary>
    /// Resource name segment (measurementProtocolSecretsId).
    /// </summary>
    public required string MeasurementProtocolSecretsId { get; init; }

    /// <summary>
    /// Required. The list of fields to be updated. Omitted fields will not be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret Body { get; init; }
}
