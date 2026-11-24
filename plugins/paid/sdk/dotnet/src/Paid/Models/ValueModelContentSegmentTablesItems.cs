using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelContentSegmentTablesItems
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("segmentKeys")]
    public required IReadOnlyList<string> SegmentKeys { get; init; }

    [JsonPropertyName("columns")]
    public required IReadOnlyList<ValueModelContentSegmentTablesItemsColumnsItems> Columns { get; init; }

    [JsonPropertyName("rows")]
    public required IReadOnlyList<ValueModelContentSegmentTablesItemsRowsItems> Rows { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultRow")]
    public IReadOnlyDictionary<string, double>? DefaultRow { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
