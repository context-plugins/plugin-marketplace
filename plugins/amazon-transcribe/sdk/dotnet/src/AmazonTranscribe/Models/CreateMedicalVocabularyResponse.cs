using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CreateMedicalVocabularyResponse
{
    /// <summary>
    /// The name you chose for your custom medical vocabulary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// The language code you selected for your custom medical vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode1AmazonTranscribeServiceMedicalVocabularyApi? LanguageCode { get; init; }

    /// <summary>
    /// The processing state of your custom medical vocabulary. If the state is READY, you can use the custom vocabulary in a StartMedicalTranscriptionJob request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyState")]
    public VocabularyState? VocabularyState { get; init; }

    /// <summary>
    /// The date and time you created your custom medical vocabulary. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    /// <summary>
    /// If VocabularyState is FAILED, FailureReason contains information about why the medical transcription job request failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
