using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A Composer recipe with findings in your cloud accounts. Counts and savings cover results from recently scanned accounts only.
/// </summary>
public record ComposerRecipe
{
    /// <summary>
    /// Recipe ID. Use it as <c>recipeId</c> to list the recipe's results.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// Recipe title, as shown in the Console.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Longer explanation of what the recipe detects. Fetched on a best-effort basis, so it can be absent even when the recipe has one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Cloud provider or platform, using the Console's provider names.
    /// </summary>
    [JsonPropertyName("provider")]
    public required ComposerProvider Provider { get; init; }

    /// <summary>
    /// Severity of the recipe's results, set by the recipe's author.
    /// </summary>
    [JsonPropertyName("severity")]
    public required Severity Severity { get; init; }

    /// <summary>
    /// Type of cloud resource the recipe's findings are on. Absent when unknown.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("affectedResourceType")]
    public string? AffectedResourceType { get; init; }

    /// <summary>
    /// Number of active results (not resolved and not snoozed). 0 when the recipe is dismissed.
    /// </summary>
    [JsonPropertyName("activeResultsCount")]
    [Minimum(0)]
    public required int ActiveResultsCount { get; init; }

    /// <summary>
    /// Number of results in any status. 0 when the recipe is dismissed.
    /// </summary>
    [JsonPropertyName("totalResultsCount")]
    [Minimum(0)]
    public required int TotalResultsCount { get; init; }

    /// <summary>
    /// Number of resolved results. 0 when the recipe is dismissed.
    /// </summary>
    [JsonPropertyName("resolvedResultsCount")]
    [Minimum(0)]
    public required int ResolvedResultsCount { get; init; }

    /// <summary>
    /// Number of snoozed results. 0 when the recipe is dismissed.
    /// </summary>
    [JsonPropertyName("snoozedResultsCount")]
    [Minimum(0)]
    public required int SnoozedResultsCount { get; init; }

    /// <summary>
    /// Recipe status, derived from its results and whether it is dismissed. Absent when unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusDoiTComposerInsightsBetaApi? Status { get; init; }

    /// <summary>
    /// Whether the recipe has been dismissed for your customer.
    /// </summary>
    [JsonPropertyName("isDismissed")]
    public required bool IsDismissed { get; init; }

    /// <summary>
    /// When the earliest of the recipe's results was first detected (RFC 3339, UTC). Absent when unavailable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detectionTime")]
    public DateTimeOffset? DetectionTime { get; init; }

    /// <summary>
    /// Estimated time to fix one finding, in minutes. Absent when not estimated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedFixTimeMinutes")]
    [Minimum(0)]
    public int? EstimatedFixTimeMinutes { get; init; }

    /// <summary>
    /// Potential cost savings across the recipe's active results, as a daily amount in US dollars. A decimal string with 2 decimal places (8 for amounts below 0.01), unlike the numeric per-result <c>costEstimationPotentialSavings</c>. When no active result has an estimate, it is the total recorded on the recipe's resolved results instead. The Console <b>Cost savings</b> column is this daily US-dollar amount × 365, converted to your organization's currency. Absent when not estimated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalPotentialSavings")]
    public string? TotalPotentialSavings { get; init; }

    /// <summary>
    /// Remediation guidance for the recipe. Always present; an empty object means no guidance is available. Each field is present only when the recipe has that content.
    /// </summary>
    [JsonPropertyName("metadata")]
    public required ComposerRecipeMetadata Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
