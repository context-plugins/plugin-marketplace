using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record BatchDetectKeyPhrasesItemResult
{
    /// <summary>
    /// The zero-based index of the document in the input list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Index")]
    public int? Index { get; init; }

    /// <summary>
    /// One or more KeyPhrase objects, one for each key phrase detected in the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("KeyPhrases")]
    public IReadOnlyList<KeyPhrase>? KeyPhrases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
