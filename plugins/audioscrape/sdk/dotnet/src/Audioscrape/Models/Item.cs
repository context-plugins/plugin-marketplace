using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record Item
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataset_id")]
    public long? DatasetId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration_seconds")]
    public int? DurationSeconds { get; init; }

    [JsonPropertyName("has_transcript")]
    public required bool HasTranscript { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("podcast")]
    public ItemPodcastRef2? Podcast { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publish_date")]
    public string? PublishDate { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// <c>podcast_episode</c>, <c>upload</c>, <c>youtube</c>, etc.
    /// </summary>
    [JsonPropertyName("source_type")]
    public required string SourceType { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
