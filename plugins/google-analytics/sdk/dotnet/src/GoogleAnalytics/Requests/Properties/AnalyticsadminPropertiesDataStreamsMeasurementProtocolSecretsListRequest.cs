namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList operation.
/// </summary>
public sealed record AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest
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
    /// Optional. The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListMeasurementProtocolSecrets</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListMeasurementProtocolSecrets</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
