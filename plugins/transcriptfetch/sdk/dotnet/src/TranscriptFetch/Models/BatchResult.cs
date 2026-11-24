using System.Collections.Generic;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

public record BatchResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("video_id")]
    public string? VideoId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outcome")]
    public Outcome? Outcome { get; init; }

    /// <summary>
    /// Structured failure reason (no_captions, unavailable, upstream_error, …); null on success.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Set on outcome "processing": the audio-transcription job started for a captionless entry. Re-send the batch later or poll poll_url.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job_id")]
    public string? JobId { get; init; }

    /// <summary>
    /// Set on outcome "processing": path to poll for the finished transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poll_url")]
    public string? PollUrl { get; init; }

    /// <summary>
    /// Human-readable explanation of the failure; null on success.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytes")]
    public int? Bytes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
