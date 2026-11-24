using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Optional. Glossary to be applied. The glossary must be within the same region (have the same location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
/// </summary>
public record TranslateTextGlossaryConfig2
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
