using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record SearchResult
{
    [JsonPropertyName("episode")]
    public required Episode Episode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("highlighted_text")]
    public string? HighlightedText { get; init; }

    [JsonPropertyName("podcast")]
    public required Podcast Podcast { get; init; }

    [JsonPropertyName("score")]
    public required double Score { get; init; }

    [JsonPropertyName("segment_id")]
    public required string SegmentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speaker")]
    public string? Speaker { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonPropertyName("timestamp")]
    public required Timestamp Timestamp { get; init; }

    [JsonPropertyName("urls")]
    public required ResultUrls Urls { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
