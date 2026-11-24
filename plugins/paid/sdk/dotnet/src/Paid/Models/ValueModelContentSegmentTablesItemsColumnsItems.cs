using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ValueModelContentSegmentTablesItemsColumnsItems
{
    [JsonPropertyName("variableId")]
    public required string VariableId { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "number";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
