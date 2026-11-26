using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record ApiNewsRelatedResponse
{
    [JsonPropertyName("results")]
    [MaxLength(6)]
    public required IReadOnlyList<RichNewsArticle> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
