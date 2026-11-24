using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeJobSummary
{
    /// <summary>
    /// The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeJobName")]
    public string? MedicalScribeJobName { get; init; }

    /// <summary>
    /// The date and time the specified Medical Scribe job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time your Medical Scribe job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time the specified Medical Scribe job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTime")]
    public DateTimeOffset? CompletionTime { get; init; }

    /// <summary>
    /// The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for Medical Scribe jobs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi? LanguageCode { get; init; }

    /// <summary>
    /// Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeJobStatus")]
    public MedicalScribeJobStatus? MedicalScribeJobStatus { get; init; }

    /// <summary>
    /// If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the transcription job failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
