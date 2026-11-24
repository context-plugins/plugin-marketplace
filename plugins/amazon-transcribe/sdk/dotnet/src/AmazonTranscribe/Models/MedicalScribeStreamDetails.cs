using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record MedicalScribeStreamDetails
{
    /// <summary>
    /// The identifier of the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// The date and time when the HealthScribe streaming session was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StreamCreatedAt")]
    public DateTimeOffset? StreamCreatedAt { get; init; }

    /// <summary>
    /// The date and time when the HealthScribe streaming session was ended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StreamEndedAt")]
    public DateTimeOffset? StreamEndedAt { get; init; }

    /// <summary>
    /// The Language Code of the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode2AmazonTranscribeServiceOperationsApi? LanguageCode { get; init; }

    /// <summary>
    /// The sample rate (in hertz) of the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaSampleRateHertz")]
    public int? MediaSampleRateHertz { get; init; }

    /// <summary>
    /// The Media Encoding of the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MediaEncoding")]
    public MediaEncoding? MediaEncoding { get; init; }

    /// <summary>
    /// The vocabulary name of the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// The name of the vocabulary filter used for the HealthScribe streaming session .
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterName")]
    public string? VocabularyFilterName { get; init; }

    /// <summary>
    /// The method of the vocabulary filter for the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFilterMethod")]
    public VocabularyFilterMethodAmazonTranscribeServiceOperationsApi? VocabularyFilterMethod { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the role used in the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceAccessRoleArn")]
    public string? ResourceAccessRoleArn { get; init; }

    /// <summary>
    /// The Channel Definitions of the HealthScribe streaming session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ChannelDefinitions")]
    public IReadOnlyList<TranscribestreamingMedicalScribeChannelDefinition>? ChannelDefinitions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionSettings")]
    public MedicalScribeEncryptionSettings? EncryptionSettings { get; init; }

    /// <summary>
    /// The streaming status of the HealthScribe streaming session. Possible Values: IN_PROGRESS PAUSED FAILED COMPLETED This status is specific to real-time streaming. A COMPLETED status doesn't mean that the post-stream analytics is complete. To get status of an analytics result, check the Status field for the analytics result within the MedicalScribePostStreamAnalyticsResult. For example, you can view the status of the ClinicalNoteGenerationResult.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StreamStatus")]
    public StreamStatus? StreamStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PostStreamAnalyticsSettings")]
    public MedicalScribePostStreamAnalyticsSettings? PostStreamAnalyticsSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PostStreamAnalyticsResult")]
    public MedicalScribePostStreamAnalyticsResult? PostStreamAnalyticsResult { get; init; }

    /// <summary>
    /// Indicates whether the MedicalScribeContext object was provided when the stream was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MedicalScribeContextProvided")]
    public bool? MedicalScribeContextProvided { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
