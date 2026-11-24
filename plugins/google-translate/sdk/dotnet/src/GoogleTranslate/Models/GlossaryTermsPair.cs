using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Represents a single entry for an unidirectional glossary.
/// </summary>
public record GlossaryTermsPair
{
    /// <summary>
    /// The source term is the term that will get match in the text,
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceTerm")]
    public GlossaryTerm1? SourceTerm { get; init; }

    /// <summary>
    /// The term that will replace the match source term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetTerm")]
    public GlossaryTerm2? TargetTerm { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
