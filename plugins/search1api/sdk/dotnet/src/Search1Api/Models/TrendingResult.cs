using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Core.Validation;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

public record TrendingResult
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
