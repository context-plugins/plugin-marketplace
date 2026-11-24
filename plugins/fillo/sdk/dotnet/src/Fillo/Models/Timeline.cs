using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record Timeline
{
    [JsonPropertyName("day")]
    public required string Day { get; init; }

    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
