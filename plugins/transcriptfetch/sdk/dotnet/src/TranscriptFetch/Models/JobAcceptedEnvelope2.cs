using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;

namespace TranscriptFetch.Models;

/// <summary>
/// Returned with HTTP 202 when a request escalates to audio transcription. Poll poll_url (or wait for the callback_url delivery); credits are charged on delivery, not here.
/// </summary>
public record JobAcceptedEnvelope2
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "processing";

    [JsonPropertyName("job_id")]
    public required string JobId { get; init; }

    /// <summary>
    /// Path of the job endpoint to poll.
    /// </summary>
    [JsonPropertyName("poll_url")]
    public required string PollUrl { get; init; }

    /// <summary>
    /// Placeholder data block on a 202: identifies what is being transcribed while the job runs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TranscriptJobData? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
