using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.AnyOf;

namespace Paid.Models;

public record ValueModelContentOverridesItemsAdditionalSignalsItems
{
    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formulaId")]
    public string? FormulaId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variableMapping")]
    public IReadOnlyDictionary<string, string>? VariableMapping { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaults")]
    public IReadOnlyDictionary<string, ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults>? Defaults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segmentTableIds")]
    public IReadOnlyList<string>? SegmentTableIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<string>? Labels { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
