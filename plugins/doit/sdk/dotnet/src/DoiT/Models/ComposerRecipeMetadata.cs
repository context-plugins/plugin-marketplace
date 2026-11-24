using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// Remediation guidance for the recipe. Always present; an empty object means no guidance is available. Each field is present only when the recipe has that content.
/// </summary>
public record ComposerRecipeMetadata
{
    /// <summary>
    /// Possible impact of applying the remediation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("impacts")]
    public string? Impacts { get; init; }

    /// <summary>
    /// Points to consider before remediating.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importantPoints")]
    public IReadOnlyList<string>? ImportantPoints { get; init; }

    /// <summary>
    /// Documentation URL for the finding.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference")]
    [Format(FormatKind.Uri)]
    public string? Reference { get; init; }

    /// <summary>
    /// HTML describing how to remediate the finding manually.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("manualRemediation")]
    public string? ManualRemediation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
