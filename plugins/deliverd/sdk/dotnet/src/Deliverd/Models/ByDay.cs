using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ByDay
{
    [JsonPropertyName("day")]
    public required string Day { get; init; }

    [JsonPropertyName("views")]
    public required double Views { get; init; }

    [JsonPropertyName("uniqueViewers")]
    public required double UniqueViewers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
