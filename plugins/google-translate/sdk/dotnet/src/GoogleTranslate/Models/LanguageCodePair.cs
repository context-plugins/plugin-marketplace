using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Used with unidirectional glossaries.
/// </summary>
public record LanguageCodePair
{
    /// <summary>
    /// Required. The ISO-639 language code for translation output, for example, "zh-CN". Expected to be an exact match for GlossaryTerm.language_code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetLanguageCode")]
    public string? TargetLanguageCode { get; init; }

    /// <summary>
    /// Required. The ISO-639 language code of the input text, for example, "en-US". Expected to be an exact match for GlossaryTerm.language_code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLanguageCode")]
    public string? SourceLanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
