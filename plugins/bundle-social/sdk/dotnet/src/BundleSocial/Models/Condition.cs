using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Condition
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public string? Id { get; init; }

    [JsonPropertyName("field")]
    public required Field Field { get; init; }

    [JsonPropertyName("operator")]
    public required Operator Operator { get; init; }

    [JsonPropertyName("value")]
    [StringLength(1000, MinimumLength = 1)]
    public required string Value { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caseSensitive")]
    public bool? CaseSensitive { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
