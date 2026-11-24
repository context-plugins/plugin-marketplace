using System.Text.Json.Serialization;
using RelmCrm.Core.Models;

namespace RelmCrm.Models;

public record SequencesRequest
{
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
