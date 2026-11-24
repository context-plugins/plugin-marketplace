using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record Rule2
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(400)]
    public string? Description { get; init; }

    [JsonPropertyName("name")]
    [MaxLength(80)]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
