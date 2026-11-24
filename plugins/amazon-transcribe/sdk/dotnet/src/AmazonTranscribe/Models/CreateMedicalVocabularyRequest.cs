using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record CreateMedicalVocabularyRequest
{
    /// <summary>
    /// A unique name, chosen by you, for your new custom medical vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom medical vocabulary with the same name as an existing custom medical vocabulary, you get a ConflictException error.
    /// </summary>
    [JsonPropertyName("VocabularyName")]
    public required string VocabularyName { get; init; }

    /// <summary>
    /// The language code that represents the language of the entries in your custom vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCodeAmazonTranscribeServiceMedicalVocabularyApi LanguageCode { get; init; }

    /// <summary>
    /// The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. The URI must be in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt
    /// </summary>
    [JsonPropertyName("VocabularyFileUri")]
    public required string VocabularyFileUri { get; init; }

    /// <summary>
    /// Adds one or more custom tags, each in the form of a key:value pair, to a new custom medical vocabulary at the time you create this new custom vocabulary. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
