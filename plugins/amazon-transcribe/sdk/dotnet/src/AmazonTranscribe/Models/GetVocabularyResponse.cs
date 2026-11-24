using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record GetVocabularyResponse
{
    /// <summary>
    /// The name of the custom vocabulary you requested information about.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyName")]
    public string? VocabularyName { get; init; }

    /// <summary>
    /// The language code you selected for your custom vocabulary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode1AmazonTranscribeServiceVocabulariesApi? LanguageCode { get; init; }

    /// <summary>
    /// The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a StartTranscriptionJob request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyState")]
    public VocabularyStateAmazonTranscribeServiceVocabulariesApi? VocabularyState { get; init; }

    /// <summary>
    /// The date and time the specified custom vocabulary was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    /// <summary>
    /// If VocabularyState is FAILED, FailureReason contains information about why the custom vocabulary request failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    /// <summary>
    /// The Amazon S3 location where the custom vocabulary is stored; use this URI to view or download the custom vocabulary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DownloadUri")]
    public string? DownloadUri { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role used to access the Amazon S3 bucket that contains your input files and, if applicable, the KMS key specified in EncryptionConfiguration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
