using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureDetails
{
    [JsonPropertyName("key")]
    [StringLength(100, MinimumLength = 1)]
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
