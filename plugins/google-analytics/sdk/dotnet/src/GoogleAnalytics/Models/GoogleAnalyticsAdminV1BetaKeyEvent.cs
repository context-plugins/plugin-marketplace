using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A key event in a Google Analytics property.
/// </summary>
public record GoogleAnalyticsAdminV1BetaKeyEvent
{
    /// <summary>
    /// Required. The method by which Key Events will be counted across multiple events within a session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countingMethod")]
    public CountingMethodGoogleAnalyticsPropertiesApi? CountingMethod { get; init; }

    /// <summary>
    /// Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Defines a default value/currency for a key event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultValue")]
    public GoogleAnalyticsAdminV1BetaKeyEventDefaultValue2? DefaultValue { get; init; }

    /// <summary>
    /// Immutable. The event name for this key event. Examples: 'click', 'purchase'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventName")]
    public string? EventName { get; init; }

    /// <summary>
    /// Output only. Time when this key event was created in the property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Output only. If set to true, this key event refers to a custom event. If set to false, this key event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom key events that may be created per property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public bool? Custom { get; init; }

    /// <summary>
    /// Output only. If set to true, this event can be deleted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletable")]
    public bool? Deletable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
