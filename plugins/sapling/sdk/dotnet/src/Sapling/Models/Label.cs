using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Sapling.Core.Models;

namespace Sapling.Models;

public record Label
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(200)]
    public string? Description { get; init; }

    [JsonPropertyName("name")]
    [StringLength(50, MinimumLength = 1)]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
