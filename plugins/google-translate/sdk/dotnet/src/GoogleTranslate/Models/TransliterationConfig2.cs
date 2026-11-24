using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Optional. Transliteration to be applied.
/// </summary>
public record TransliterationConfig2
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
