using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Carousel52
{
    [JsonPropertyName("cards")]
    [MinLength(1)]
    [MaxLength(10)]
    public required IReadOnlyList<Card52> Cards { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
