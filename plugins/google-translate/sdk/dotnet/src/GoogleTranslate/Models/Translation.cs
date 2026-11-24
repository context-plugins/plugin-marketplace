using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A single translation response.
/// </summary>
public record Translation
{
    /// <summary>
    /// Text translated into the target language. If an error occurs during translation, this field might be excluded from the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("translatedText")]
    public string? TranslatedText { get; init; }

    /// <summary>
    /// The ISO-639 language code of source text in the initial request, detected automatically, if no source language was passed within the initial request. If the source language was passed, auto-detection of the language does not occur and this field is empty.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectedLanguageCode")]
    public string? DetectedLanguageCode { get; init; }

    /// <summary>
    /// Only present when <c>model</c> is present in the request. <c>model</c> here is normalized to have project number. For example: If the <c>model</c> requested in TranslationTextRequest is <c>projects/{project-id}/locations/{location-id}/models/general/nmt</c> then <c>model</c> here would be normalized to <c>projects/{project-number}/locations/{location-id}/models/general/nmt</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// The <c>glossary_config</c> used for this translation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossaryConfig")]
    public TranslateTextGlossaryConfig3? GlossaryConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
