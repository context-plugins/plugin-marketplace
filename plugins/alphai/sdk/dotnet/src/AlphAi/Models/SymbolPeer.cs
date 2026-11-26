using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record SymbolPeer
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
