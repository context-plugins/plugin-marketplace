using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record CardBatchRequest
{
    [JsonPropertyName("cards")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<CardInput> Cards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("options")]
    public CardBatchOptions? Options { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
