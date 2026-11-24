using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record BatchDetectDominantLanguageItemResult
{
    /// <summary>
    /// The zero-based index of the document in the input list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Index")]
    public int? Index { get; init; }

    /// <summary>
    /// One or more DominantLanguage objects describing the dominant languages in the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Languages")]
    public IReadOnlyList<DominantLanguage>? Languages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
