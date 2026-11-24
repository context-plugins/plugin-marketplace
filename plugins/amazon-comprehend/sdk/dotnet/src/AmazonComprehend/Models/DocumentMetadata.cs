using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DocumentMetadata
{
    /// <summary>
    /// Number of pages in the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Pages")]
    public int? Pages { get; init; }

    /// <summary>
    /// List of pages in the document, with the number of characters extracted from each page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExtractedCharacters")]
    public IReadOnlyList<ExtractedCharactersListItem>? ExtractedCharacters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
