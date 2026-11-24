using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// The term that will replace the match source term.
/// </summary>
public record GlossaryTerm2
{
    /// <summary>
    /// The text for the glossary term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    /// <summary>
    /// The language for this glossary term.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
