using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A list of reference sentence pairs.
/// </summary>
public record ReferenceSentencePairList
{
    /// <summary>
    /// Reference sentence pairs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceSentencePairs")]
    public IReadOnlyList<ReferenceSentencePair>? ReferenceSentencePairs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
