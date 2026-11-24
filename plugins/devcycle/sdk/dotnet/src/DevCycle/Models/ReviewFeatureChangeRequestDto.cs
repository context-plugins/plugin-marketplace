using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record ReviewFeatureChangeRequestDto
{
    [JsonPropertyName("action")]
    public required ActionEnum Action { get; init; }

    [JsonPropertyName("comment")]
    public required string Comment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
