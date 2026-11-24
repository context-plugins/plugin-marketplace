using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record DeleteVocabularyRequest
{
    /// <summary>
    /// The name of the custom vocabulary you want to delete. Custom vocabulary names are case sensitive.
    /// </summary>
    [JsonPropertyName("VocabularyName")]
    public required string VocabularyName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
