using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CreateLanguageModelRequest
{
    /// <summary>
    /// The language code that represents the language of your model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical. A custom language model can only be used to transcribe files in the same language as the model. For example, if you create a custom language model usi
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCodeAmazonTranscribeServiceLanguageModelApi LanguageCode { get; init; }

    /// <summary>
    /// The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon Transcribe offers two options for base models: Wideband and Narrowband. If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose WideBand. To transcribe audio with a sample rate less than 16,000 Hz, choose NarrowBand.
    /// </summary>
    [JsonPropertyName("BaseModelName")]
    public required BaseModelName BaseModelName { get; init; }

    /// <summary>
    /// A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom language model with the same name as an existing custom language model, you get a ConflictException error.
    /// </summary>
    [JsonPropertyName("ModelName")]
    public required string ModelName { get; init; }

    [JsonPropertyName("InputDataConfig")]
    public required InputDataConfig InputDataConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EncryptionConfiguration")]
    public EncryptionConfiguration? EncryptionConfiguration { get; init; }

    /// <summary>
    /// Adds one or more custom tags, each in the form of a key:value pair, to a new custom language model at the time you create this new model. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
