using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Configures which glossary is used for a specific target language and defines options for applying that glossary.
/// </summary>
public record TranslateTextGlossaryConfig
{
    /// <summary>
    /// Optional. If set to true, the glossary will be used for contextual translation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contextualTranslationEnabled")]
    public bool? ContextualTranslationEnabled { get; init; }

    /// <summary>
    /// Required. The <c>glossary</c> to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: <c>projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("glossary")]
    public string? Glossary { get; init; }

    /// <summary>
    /// Optional. Indicates match is case insensitive. The default value is <c>false</c> if missing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ignoreCase")]
    public bool? IgnoreCase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
