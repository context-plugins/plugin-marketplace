using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record StoryArticleRef
{
    [JsonPropertyName("uid")]
    public required string Uid { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("time_published")]
    public required DateTimeOffset TimePublished { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
