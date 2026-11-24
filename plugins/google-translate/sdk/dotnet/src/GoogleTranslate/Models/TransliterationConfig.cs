using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Configures transliteration feature on top of translation.
/// </summary>
public record TransliterationConfig
{
    /// <summary>
    /// If true, source text in romanized form can be translated to the target language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableTransliteration")]
    public bool? EnableTransliteration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
