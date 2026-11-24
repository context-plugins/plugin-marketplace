using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeJob
{
    /// <summary>
    /// The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeJobName")]
    public string? MedicalScribeJobName { get; init; }

    /// <summary>
    /// Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeJobStatus")]
    public MedicalScribeJobStatus? MedicalScribeJobStatus { get; init; }

    /// <summary>
    /// The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for Medical Scribe jobs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi? LanguageCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Media")]
    public Media? Media { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeOutput")]
    public MedicalScribeOutput? MedicalScribeOutput { get; init; }

    /// <summary>
    /// The date and time your Medical Scribe job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The date and time the specified Medical Scribe job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time the specified Medical Scribe job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CompletionTime")]
    public DateTimeOffset? CompletionTime { get; init; }

    /// <summary>
    /// If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the transcription job failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Settings")]
    public MedicalScribeSettings? Settings { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files, write to the output bucket, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    /// <summary>
    /// Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first participant to speak, you would set ChannelId of the first ChannelDefinition in the list to 0 (to indicate the first channel) and ParticipantRole to CLINICIAN (to indicate that it's the clinician speaking). Then you would set the ChannelId of the second ChannelDefinition in the list to 1 (to indicate the second channel) and ParticipantRole to PATIENT (to indicate that it's the patient speaking).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelDefinitions")]
    public IReadOnlyList<MedicalScribeChannelDefinition>? ChannelDefinitions { get; init; }

    /// <summary>
    /// Indicates whether the MedicalScribeContext object was provided when the Medical Scribe job was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeContextProvided")]
    public bool? MedicalScribeContextProvided { get; init; }

    /// <summary>
    /// Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
