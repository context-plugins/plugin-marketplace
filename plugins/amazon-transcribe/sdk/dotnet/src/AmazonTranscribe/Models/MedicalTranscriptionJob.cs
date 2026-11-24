using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalTranscriptionJob
{
    /// <summary>
    /// The name of the medical transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalTranscriptionJobName")]
    public string? MedicalTranscriptionJobName { get; init; }

    /// <summary>
    /// Provides the status of the specified medical transcription job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TranscriptionJobStatus")]
    public TranscriptionJobStatus? TranscriptionJobStatus { get; init; }

    /// <summary>
    /// The language code used to create your medical transcription job. US English (en-US) is the only supported language for medical transcriptions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCodeAmazonTranscribeServiceMedicalTranscriptionJobApi? LanguageCode { get; init; }

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
    public MedicalTranscript? Transcript { get; init; }

    /// <summary>
    /// The date and time the specified medical transcription job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time the specified medical transcription job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time the specified medical transcription job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
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
    public MedicalTranscriptionSetting? Settings { get; init; }

    /// <summary>
    /// Indicates whether content identification was enabled for your transcription request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContentIdentificationType")]
    public ContentIdentificationType? ContentIdentificationType { get; init; }

    /// <summary>
    /// Describes the medical specialty represented in your media.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Specialty")]
    public Specialty? Specialty { get; init; }

    /// <summary>
    /// Indicates whether the input media is a dictation or a conversation, as specified in the StartMedicalTranscriptionJob request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// The tags, each in the form of a key:value pair, assigned to the specified medical transcription job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
