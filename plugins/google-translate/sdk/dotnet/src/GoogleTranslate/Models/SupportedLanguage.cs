using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A single supported language response corresponds to information related to one supported language.
/// </summary>
public record SupportedLanguage
{
    /// <summary>
    /// Can be used as a source language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportSource")]
    public bool? SupportSource { get; init; }

    /// <summary>
    /// Human-readable name of the language localized in the display language specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Can be used as a target language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportTarget")]
    public bool? SupportTarget { get; init; }

    /// <summary>
    /// Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN').
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
