using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record Context
{
    [JsonPropertyName("completion")]
    public required string Completion { get; init; }

    [JsonPropertyName("query")]
    public required string Query { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
