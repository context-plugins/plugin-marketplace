using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record GetVocabularyFilterRequest
{
    /// <summary>
    /// The name of the custom vocabulary filter you want information about. Custom vocabulary filter names are case sensitive.
    /// </summary>
    [JsonPropertyName("VocabularyFilterName")]
    public required string VocabularyFilterName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
