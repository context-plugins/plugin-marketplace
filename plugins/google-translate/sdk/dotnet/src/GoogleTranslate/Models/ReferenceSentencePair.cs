using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A pair of sentences used as reference in source and target languages.
/// </summary>
public record ReferenceSentencePair
{
    /// <summary>
    /// Source sentence in the sentence pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceSentence")]
    public string? SourceSentence { get; init; }

    /// <summary>
    /// Target sentence in the sentence pair.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetSentence")]
    public string? TargetSentence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
