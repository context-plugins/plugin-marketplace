using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record ApiNewsRelatedResponse
{
    [JsonPropertyName("results")]
    [MaxLength(6)]
    public required IReadOnlyList<RichNewsArticle> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
