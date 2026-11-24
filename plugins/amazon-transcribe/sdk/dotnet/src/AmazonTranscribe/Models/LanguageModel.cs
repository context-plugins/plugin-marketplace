using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record LanguageModel
{
    /// <summary>
    /// A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelName")]
    public string? ModelName { get; init; }

    /// <summary>
    /// The date and time the specified custom language model was created. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreateTime")]
    public DateTimeOffset? CreateTime { get; init; }

    /// <summary>
    /// The date and time the specified custom language model was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    /// <summary>
    /// The language code used to create your custom language model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode2? LanguageCode { get; init; }

    /// <summary>
    /// The Amazon Transcribe standard language model, or base model, used to create your custom language model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BaseModelName")]
    public BaseModelName2? BaseModelName { get; init; }

    /// <summary>
    /// The status of the specified custom language model. When the status displays as COMPLETED the model is ready for use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelStatus")]
    public ModelStatus1? ModelStatus { get; init; }

    /// <summary>
    /// Shows if a more current base model is available for use with the specified custom language model. If false, your custom language model is using the most up-to-date base model. If true, there is a newer base model available than the one your language model is using. Note that to update a base model, you must recreate the custom language model using the new base model. Base model upgrades for existing custom language models are not supported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UpgradeAvailability")]
    public bool? UpgradeAvailability { get; init; }

    /// <summary>
    /// If ModelStatus is FAILED, FailureReason contains information about why the custom language model request failed. See also: Common Errors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FailureReason")]
    public string? FailureReason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InputDataConfig")]
    public InputDataConfig? InputDataConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
