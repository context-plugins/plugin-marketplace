using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record TranscriptionJob
{
    /// <summary>
    /// The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptionJobName")]
    public string? TranscriptionJobName { get; init; }

    /// <summary>
    /// Provides the status of the specified transcription job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptionJobStatus")]
    public TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi? TranscriptionJobStatus { get; init; }

    /// <summary>
    /// The language code used to create your transcription job. This parameter is used with single-language identification. For multi-language identification requests, refer to the plural version of this parameter, LanguageCodes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCodeAmazonTranscribeServiceTranscriptionJobsApi? LanguageCode { get; init; }

    /// <summary>
    /// The sample rate, in hertz, of the audio track in your input media file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaSampleRateHertz")]
    public int? MediaSampleRateHertz { get; init; }

    /// <summary>
    /// The format of the input media file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaFormat")]
    public MediaFormat? MediaFormat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Media")]
    public Media? Media { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Transcript")]
    public Transcript? Transcript { get; init; }

    /// <summary>
    /// The date and time the specified transcription job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time the specified transcription job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time the specified transcription job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTime")]
    public DateTimeOffset? CompletionTime { get; init; }

    /// <summary>
    /// If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job request failed. The FailureReason field contains one of the following values: Unsupported media format. The media format specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats. The media format provided does not match the detected media format. The media format specified in MediaFormat doesn't match the format of the input file. Check the media format of your media file and correct the specified value. Invalid sample rate for audio f
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Settings")]
    public Settings? Settings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelSettings")]
    public ModelSettings? ModelSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobExecutionSettings")]
    public JobExecutionSettings? JobExecutionSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentRedaction")]
    public ContentRedaction? ContentRedaction { get; init; }

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
    /// Provides the language codes you specified in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageOptions")]
    public IReadOnlyList<LanguageOption>? LanguageOptions { get; init; }

    /// <summary>
    /// The confidence score associated with the language identified in your media file. Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IdentifiedLanguageScore")]
    public double? IdentifiedLanguageScore { get; init; }

    /// <summary>
    /// The language codes used to create your transcription job. This parameter is used with multi-language identification. For single-language identification requests, refer to the singular version of this parameter, LanguageCode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCodes")]
    public IReadOnlyList<LanguageCodeItem>? LanguageCodes { get; init; }

    /// <summary>
    /// The tags, each in the form of a key:value pair, assigned to the specified transcription job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Subtitles")]
    public SubtitlesOutput? Subtitles { get; init; }

    /// <summary>
    /// Provides the name and language of all custom language models, custom vocabularies, and custom vocabulary filters that you included in your request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageIdSettings")]
    public IReadOnlyDictionary<string, LanguageIdSettings>? LanguageIdSettings { get; init; }

    /// <summary>
    /// Provides information about the toxicity detection settings applied to your transcription.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ToxicityDetection")]
    public IReadOnlyList<ToxicityDetectionSettings>? ToxicityDetection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
