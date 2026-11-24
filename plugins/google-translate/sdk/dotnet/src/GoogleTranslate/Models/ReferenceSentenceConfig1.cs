using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Configuration for caller provided reference sentences.
/// </summary>
public record ReferenceSentenceConfig1
{
    /// <summary>
    /// Source language code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    /// <summary>
    /// Target language code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCode")]
    public string? TargetLanguageCode { get; init; }

    /// <summary>
    /// Reference sentences pair lists. Each list will be used as the references to translate the sentence under "content" field at the corresponding index. Length of the list is required to be equal to the length of "content" field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceSentencePairLists")]
    public IReadOnlyList<ReferenceSentencePairList>? ReferenceSentencePairLists { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
