using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record DeleteMedicalVocabularyRequest
{
    /// <summary>
    /// The name of the custom medical vocabulary you want to delete. Custom medical vocabulary names are case sensitive.
    /// </summary>
    [JsonPropertyName("VocabularyName")]
    public required string VocabularyName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
