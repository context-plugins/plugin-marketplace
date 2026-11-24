using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record EpisodeFull
{
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration_seconds")]
    public int? DurationSeconds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enclosure_url")]
    public string? EnclosureUrl { get; init; }

    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// Pipeline lifecycle of this item: <c>queued</c> | <c>processing</c> |
    /// <c>completed</c> | <c>completed_no_speech</c> | <c>failed</c> | <c>cancelled</c>, or
    /// <c>not_transcribed</c> for catalog items never queued for transcription.
    /// <c>completed_no_speech</c> means processing finished and the audio
    /// contained no speech, so no transcript will ever exist: stop polling
    /// for one (GH#435).
    /// </summary>
    [JsonPropertyName("processing_status")]
    public required string ProcessingStatus { get; init; }

    [JsonPropertyName("publish_date")]
    public required string PublishDate { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
