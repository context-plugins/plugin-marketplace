using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Core.Validation;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

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
