using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record EntityRef
{
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    [JsonPropertyName("mention_count")]
    public required long MentionCount { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
