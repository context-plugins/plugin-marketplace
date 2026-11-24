using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelContentSegmentTablesItemsRowsItems
{
    [JsonPropertyName("segmentValues")]
    public required IReadOnlyDictionary<string, string> SegmentValues { get; init; }

    [JsonPropertyName("variables")]
    public required IReadOnlyDictionary<string, double> Variables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
