using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.AnyOf;

namespace TranscriptFetch.Models;

/// <summary>
/// Returned with HTTP 202 when a request escalates to audio transcription. Poll poll_url (or wait for the callback_url delivery); credits are charged on delivery, not here.
/// </summary>
public record JobAcceptedEnvelope
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
    /// Either a transcript_job placeholder, or a transcript block with null text/segments, depending on how the request escalated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public Data1? Data { get; init; }

    /// <summary>
    /// Why transcription engaged and what delivery will cost, e.g. {engaged, captions_unavailable, message, cost_credits}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_fallback")]
    public object? AiFallback { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
