using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CreateVocabularyRequest
{
    /// <summary>
    /// A unique name, chosen by you, for your new custom vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom vocabulary with the same name as an existing custom vocabulary, you get a ConflictException error.
    /// </summary>
    [JsonPropertyName("VocabularyName")]
    public required string VocabularyName { get; init; }

    /// <summary>
    /// The language code that represents the language of the entries in your custom vocabulary. Each custom vocabulary must contain terms in only one language. A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (en-US), you can only apply this custom vocabulary to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCodeAmazonTranscribeServiceVocabulariesApi LanguageCode { get; init; }

    /// <summary>
    /// Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. The other option for creating your custom vocabulary is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFileUri parameter. Note that if you include Phrases in your request, you cannot use VocabularyFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported charac
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Phrases")]
    public IReadOnlyList<string>? Phrases { get; init; }

    /// <summary>
    /// The Amazon S3 location of the text file that contains your custom vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt Note that if you include VocabularyFileUri in your request, you cannot use the Phrases flag; you must choose one or the other.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VocabularyFileUri")]
    public string? VocabularyFileUri { get; init; }

    /// <summary>
    /// Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary at the time you create this new custom vocabulary. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary). If you include EncryptionConfiguration in your request, this role must also have permissions to access the specified KMS key. If the role that you specify doesn’t have the appropriate permissions, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
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
