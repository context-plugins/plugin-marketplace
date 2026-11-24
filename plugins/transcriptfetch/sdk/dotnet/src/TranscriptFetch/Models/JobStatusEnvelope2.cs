using System.Text.Json.Serialization;
using TranscriptFetch.Core.Models;
using TranscriptFetch.Models.Enums;

namespace TranscriptFetch.Models;

/// <summary>
/// Response of the job poll endpoint. data holds the transcript once status is completed and is null while processing (usage is absent then); a failed job has ok:false and an error block instead.
/// </summary>
public record JobStatusEnvelope2
{
    [JsonPropertyName("ok")]
    public required bool Ok { get; init; }

    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    [JsonPropertyName("status")]
    public required StatusTranscriptfetchTranscriptsApi Status { get; init; }

    [JsonPropertyName("job_id")]
    public required string JobId { get; init; }

    /// <summary>
    /// The finished transcript; null until the job completes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public TranscriptData2? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    /// <summary>
    /// Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present. Failures are never charged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public ErrorBlock? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
