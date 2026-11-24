using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.
/// </summary>
public record GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3
{
    /// <summary>
    /// A snapshot of a MeasurementProtocolSecret resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("measurementProtocolSecret")]
    public GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1? MeasurementProtocolSecret { get; init; }

    /// <summary>
    /// A snapshot of a Property resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property")]
    public GoogleAnalyticsAdminV1BetaProperty2? Property { get; init; }

    /// <summary>
    /// A snapshot of a DataStream resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataStream")]
    public GoogleAnalyticsAdminV1BetaDataStream1? DataStream { get; init; }

    /// <summary>
    /// A snapshot of a data retention settings resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataRetentionSettings")]
    public GoogleAnalyticsAdminV1BetaDataRetentionSettings2? DataRetentionSettings { get; init; }

    /// <summary>
    /// A snapshot of a GoogleAdsLink resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("googleAdsLink")]
    public GoogleAnalyticsAdminV1BetaGoogleAdsLink2? GoogleAdsLink { get; init; }

    /// <summary>
    /// A snapshot of a FirebaseLink resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firebaseLink")]
    public GoogleAnalyticsAdminV1BetaFirebaseLink2? FirebaseLink { get; init; }

    /// <summary>
    /// A snapshot of a ConversionEvent resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversionEvent")]
    public GoogleAnalyticsAdminV1BetaConversionEvent2? ConversionEvent { get; init; }

    /// <summary>
    /// A snapshot of an Account resource in change history.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account")]
    public GoogleAnalyticsAdminV1BetaAccount3? Account { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
