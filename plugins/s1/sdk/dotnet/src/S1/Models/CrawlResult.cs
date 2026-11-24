using System.Text.Json.Serialization;
using S1.Core.Models;
using S1.Core.Validation;
using S1.Core.Validation.Attributes;

namespace S1.Models;

public record CrawlResult
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("link")]
    [Format(FormatKind.Uri)]
    public required string Link { get; init; }

    [JsonPropertyName("content")]
    public required string Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
