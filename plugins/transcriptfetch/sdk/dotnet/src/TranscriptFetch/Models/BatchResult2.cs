using System.Collections.Generic;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

/// <summary>
/// One entry per requested video. Exactly three outcomes: "ok" carries the transcript, "processing" carries the audio-transcription job to poll, "error" carries the same error block a request-level failure does.
/// </summary>
public record BatchResult2
{
    [JsonPropertyName("video_id")]
    public required string VideoId { get; init; }

    [JsonPropertyName("outcome")]
    public required Outcome1 Outcome { get; init; }

    /// <summary>
    /// outcome "ok" only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// outcome "ok" only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source1? Source { get; init; }

    /// <summary>
    /// outcome "ok" only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// outcome "ok" only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    /// <summary>
    /// outcome "ok" only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytes")]
    public int? Bytes { get; init; }

    /// <summary>
    /// outcome "processing" only: the audio-transcription job started for a captionless entry. Re-send the batch later or poll poll_url.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job_id")]
    public string? JobId { get; init; }

    /// <summary>
    /// outcome "processing" only: path to poll for the finished transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poll_url")]
    public string? PollUrl { get; init; }

    /// <summary>
    /// Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present. Failures are never charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public ErrorBlock? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
