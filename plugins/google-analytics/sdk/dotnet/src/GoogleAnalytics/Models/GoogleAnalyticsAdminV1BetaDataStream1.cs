using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A snapshot of a DataStream resource in change history.
/// </summary>
public record GoogleAnalyticsAdminV1BetaDataStream1
{
    /// <summary>
    /// Required. Immutable. The type of this DataStream resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// Data specific to web streams. Must be populated if type is WEB_DATA_STREAM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("webStreamData")]
    public GoogleAnalyticsAdminV1BetaDataStreamWebStreamData2? WebStreamData { get; init; }

    /// <summary>
    /// Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iosAppStreamData")]
    public GoogleAnalyticsAdminV1BetaDataStreamIosAppStreamData2? IosAppStreamData { get; init; }

    /// <summary>
    /// Identifier. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. Time when this stream was originally created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("androidAppStreamData")]
    public GoogleAnalyticsAdminV1BetaDataStreamAndroidAppStreamData2? AndroidAppStreamData { get; init; }

    /// <summary>
    /// Output only. Time when stream payload fields were last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
