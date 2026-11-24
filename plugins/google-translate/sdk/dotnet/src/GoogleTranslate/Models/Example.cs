using System.Text.Json.Serialization;
using GoogleTranslate.Core.Models;

namespace GoogleTranslate.Models;

/// <summary>
/// A sentence pair.
/// </summary>
public record Example
{
    /// <summary>
    /// Sentence in source language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceText")]
    public string? SourceText { get; init; }

    /// <summary>
    /// Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public string? Usage { get; init; }

    /// <summary>
    /// Output only. The resource name of the example, in form of <c>projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Sentence in target language.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetText")]
    public string? TargetText { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
