using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Filters events based on exact matches on the CloudEvents attributes.
/// </summary>
public record EventFilter
{
    /// <summary>
    /// Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. You can <see href="/eventarc/docs/list-providers#describe-provider">retrieve a specific provider's supported event types</see>. All triggers MUST provide a filter for the 'type' attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attribute")]
    public string? Attribute { get; init; }

    /// <summary>
    /// Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The allowed values are <c>path_pattern</c> and <c>match-path-pattern</c>. <c>path_pattern</c> is only allowed for GCFv1 triggers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public string? Operator { get; init; }

    /// <summary>
    /// Required. The value for the attribute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
