using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Spell check result.
/// </summary>
public record SpellingCorrection
{
    /// <summary>
    /// Indicates if the query was corrected by the spell checker.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corrected")]
    public bool? Corrected { get; init; }

    /// <summary>
    /// Correction output consisting of the corrected keyword string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("correctedText")]
    public string? CorrectedText { get; init; }

    /// <summary>
    /// Corrected output with html tags to highlight the corrected words. Corrected words are called out with the "*...*" html tags. For example, the user input query is "software enginear", where the second word, "enginear," is incorrect. It should be "engineer". When spelling correction is enabled, this value is "software *engineer*".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("correctedHtml")]
    public string? CorrectedHtml { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
