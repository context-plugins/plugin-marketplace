using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ApplyFeatureChangeRequestDto
{
    [JsonPropertyName("description")]
    [MaxLength(1000)]
    public required string Description { get; init; }

    [JsonPropertyName("action")]
    public string Action { get; } = "applied";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
