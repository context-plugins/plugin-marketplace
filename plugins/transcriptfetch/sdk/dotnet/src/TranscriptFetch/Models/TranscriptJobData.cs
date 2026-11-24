using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

/// <summary>
/// Placeholder data block on a 202: identifies what is being transcribed while the job runs.
/// </summary>
public record TranscriptJobData
{
    [JsonPropertyName("kind")]
    public string Kind { get; } = "transcript_job";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("video_id")]
    public string? VideoId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public string? Platform { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
