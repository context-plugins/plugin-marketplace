using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record FloodCap
{
    [JsonPropertyName("per_10s")]
    public required int Per10S { get; init; }

    [JsonPropertyName("per_min")]
    public required int PerMin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
