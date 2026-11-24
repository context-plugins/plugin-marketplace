namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet operation.
/// </summary>
public sealed record AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest
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
}
