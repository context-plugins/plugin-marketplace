using System.Text.Json.Serialization;
using S1.Core.Models;
using S1.Core.Validation;
using S1.Core.Validation.Attributes;

namespace S1.Models;

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
