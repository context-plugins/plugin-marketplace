using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CallAnalyticsJobSummary
{
    /// <summary>
    /// The name of the Call Analytics job. Job names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CallAnalyticsJobName")]
    public string? CallAnalyticsJobName { get; init; }

    /// <summary>
    /// The date and time the specified Call Analytics job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time your Call Analytics job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time the specified Call Analytics job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTime")]
    public DateTimeOffset? CompletionTime { get; init; }

    /// <summary>
    /// The language code used to create your Call Analytics transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode1? LanguageCode { get; init; }

    /// <summary>
    /// Provides the status of your Call Analytics job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CallAnalyticsJobStatus")]
    public CallAnalyticsJobStatus1? CallAnalyticsJobStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CallAnalyticsJobDetails")]
    public CallAnalyticsJobDetails? CallAnalyticsJobDetails { get; init; }

    /// <summary>
    /// If CallAnalyticsJobStatus is FAILED, FailureReason contains information about why the Call Analytics job failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
