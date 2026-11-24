using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record UpdateMedicalVocabularyRequest
{
    /// <summary>
    /// The name of the custom medical vocabulary you want to update. Custom medical vocabulary names are case sensitive.
    /// </summary>
    [JsonPropertyName("VocabularyName")]
    public required string VocabularyName { get; init; }

    /// <summary>
    /// The language code that represents the language of the entries in the custom vocabulary you want to update. US English (en-US) is the only language supported with Amazon Transcribe Medical.
    /// </summary>
    [JsonPropertyName("LanguageCode")]
    public required LanguageCode4 LanguageCode { get; init; }

    /// <summary>
    /// The Amazon S3 location of the text file that contains your custom medical vocabulary. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt
    /// </summary>
    [JsonPropertyName("VocabularyFileUri")]
    public required string VocabularyFileUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
