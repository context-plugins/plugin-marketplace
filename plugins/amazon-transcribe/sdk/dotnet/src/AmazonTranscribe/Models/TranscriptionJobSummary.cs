using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record TranscriptionJobSummary
{
    /// <summary>
    /// The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptionJobName")]
    public string? TranscriptionJobName { get; init; }

    /// <summary>
    /// The date and time the specified transcription job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time your transcription job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time the specified transcription job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTime")]
    public DateTimeOffset? CompletionTime { get; init; }

    /// <summary>
    /// The language code used to create your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode2AmazonTranscribeServiceTranscriptionJobsApi? LanguageCode { get; init; }

    /// <summary>
    /// Provides the status of your transcription job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptionJobStatus")]
    public TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi? TranscriptionJobStatus { get; init; }

    /// <summary>
    /// If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    /// <summary>
    /// Indicates where the specified transcription output is stored. If the value is CUSTOMER_BUCKET, the location is the Amazon S3 bucket you specified using the OutputBucketName parameter in your request. If you also included OutputKey in your request, your output is located in the path you specified in your request. If the value is SERVICE_BUCKET, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the URI shown in the TranscriptFileUri or RedactedTranscriptFileUri field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OutputLocationType")]
    public OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi? OutputLocationType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentRedaction")]
    public ContentRedaction? ContentRedaction { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelSettings")]
    public ModelSettings? ModelSettings { get; init; }

    /// <summary>
    /// Indicates whether automatic language identification was enabled (TRUE) for the specified transcription job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdentifyLanguage")]
    public bool? IdentifyLanguage { get; init; }

    /// <summary>
    /// Indicates whether automatic multi-language identification was enabled (TRUE) for the specified transcription job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdentifyMultipleLanguages")]
    public bool? IdentifyMultipleLanguages { get; init; }

    /// <summary>
    /// The confidence score associated with the language identified in your media file. Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdentifiedLanguageScore")]
    public double? IdentifiedLanguageScore { get; init; }

    /// <summary>
    /// The language codes used to create your transcription job. This parameter is used with multi-language identification. For single-language identification, the singular version of this parameter, LanguageCode, is present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCodes")]
    public IReadOnlyList<LanguageCodeItem>? LanguageCodes { get; init; }

    /// <summary>
    /// Indicates whether toxicity detection was enabled for the specified transcription job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ToxicityDetection")]
    public IReadOnlyList<ToxicityDetectionSettings>? ToxicityDetection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
