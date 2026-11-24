using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Full value model configuration: value types, formulas, signals, and overrides.
/// </summary>
public record ValueModelContent
{
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonPropertyName("valueTypes")]
    public required IReadOnlyList<ValueModelContentValueTypesItems> ValueTypes { get; init; }

    [JsonPropertyName("formulas")]
    public required IReadOnlyList<ValueModelContentFormulasItems> Formulas { get; init; }

    [JsonPropertyName("signals")]
    public required IReadOnlyList<ValueModelContentSignalsItems> Signals { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segmentTables")]
    public IReadOnlyList<ValueModelContentSegmentTablesItems>? SegmentTables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overrides")]
    public IReadOnlyList<ValueModelContentOverridesItems>? Overrides { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
