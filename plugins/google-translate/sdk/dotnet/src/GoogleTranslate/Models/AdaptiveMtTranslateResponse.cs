using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// An AdaptiveMtTranslate response.
/// </summary>
public record AdaptiveMtTranslateResponse
{
    /// <summary>
    /// Output only. The translation's language code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    /// <summary>
    /// Text translation response if a glossary is provided in the request. This could be the same as 'translation' above if no terms apply.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryTranslations")]
    public IReadOnlyList<AdaptiveMtTranslation>? GlossaryTranslations { get; init; }

    /// <summary>
    /// Output only. The translation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translations")]
    public IReadOnlyList<AdaptiveMtTranslation>? Translations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
