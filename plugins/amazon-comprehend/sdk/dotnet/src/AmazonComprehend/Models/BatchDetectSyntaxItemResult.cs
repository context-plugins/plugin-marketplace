using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record BatchDetectSyntaxItemResult
{
    /// <summary>
    /// The zero-based index of the document in the input list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Index")]
    public int? Index { get; init; }

    /// <summary>
    /// The syntax tokens for the words in the document, one token for each word.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SyntaxTokens")]
    public IReadOnlyList<SyntaxToken>? SyntaxTokens { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
