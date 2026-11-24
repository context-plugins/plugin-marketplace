using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// A snapshot of a ConversionEvent resource in change history.
/// </summary>
public record GoogleAnalyticsAdminV1BetaConversionEvent2
{
    /// <summary>
    /// Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom")]
    public bool? Custom { get; init; }

    /// <summary>
    /// Immutable. The event name for this conversion event. Examples: 'click', 'purchase'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventName")]
    public string? EventName { get; init; }

    /// <summary>
    /// Output only. Time when this conversion event was created in the property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Optional. Defines a default value/currency for a conversion event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultConversionValue")]
    public GoogleAnalyticsAdminV1BetaConversionEventDefaultConversionValue2? DefaultConversionValue { get; init; }

    /// <summary>
    /// Optional. The method by which conversions will be counted across multiple events within a session. If this value is not provided, it will be set to <c>ONCE_PER_EVENT</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countingMethod")]
    public CountingMethod? CountingMethod { get; init; }

    /// <summary>
    /// Output only. If set, this event can currently be deleted with DeleteConversionEvent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deletable")]
    public bool? Deletable { get; init; }

    /// <summary>
    /// Identifier. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
