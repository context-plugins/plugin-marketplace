using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DetectDominantLanguageResponse
{
    /// <summary>
    /// Array of languages that Amazon Comprehend detected in the input text. The array is sorted in descending order of the score (the dominant language is always the first element in the array). For each language, the response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference. For more information about RFC 5646, see Tags for Identifying Languages on the IETF Tools web site.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Languages")]
    public IReadOnlyList<DominantLanguage>? Languages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
