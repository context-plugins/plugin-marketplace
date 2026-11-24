using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// Represents a glossary built from user-provided data.
/// </summary>
public record Glossary
{
    /// <summary>
    /// Output only. When CreateGlossary was called.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("submitTime")]
    public string? SubmitTime { get; init; }

    /// <summary>
    /// Output only. When the glossary creation was finished.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public string? EndTime { get; init; }

    /// <summary>
    /// Used with equivalent term set glossaries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCodesSet")]
    public LanguageCodesSet? LanguageCodesSet { get; init; }

    /// <summary>
    /// Optional. The display name of the glossary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Required. Provides examples to build the glossary from. Total glossary must not exceed 10M Unicode codepoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputConfig")]
    public GlossaryInputConfig2? InputConfig { get; init; }

    /// <summary>
    /// Output only. The number of entries defined in the glossary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("entryCount")]
    public int? EntryCount { get; init; }

    /// <summary>
    /// Identifier. The resource name of the glossary. Glossary names have the form <c>projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Used with unidirectional glossaries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languagePair")]
    public LanguageCodePair? LanguagePair { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
