using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1TasksCompleteRequest
{
    /// <summary>
    /// What was found, in a few sentences
    /// </summary>
    [JsonPropertyName("summary")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("findings")]
    [MaxLength(20)]
    public IReadOnlyList<FindingDeliverdDevTasksApi>? Findings { get; init; }

    /// <summary>
    /// Decisions you propose. They reach the parent as suggestions; a person confirms them
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decisions")]
    [MaxLength(10)]
    public IReadOnlyList<DecisionDeliverdDevTasksApi>? Decisions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendations")]
    [MaxLength(10)]
    public IReadOnlyList<string>? Recommendations { get; init; }

    /// <summary>
    /// Still open; added to the parent's open questions when applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unresolvedQuestions")]
    [MaxLength(10)]
    public IReadOnlyList<string>? UnresolvedQuestions { get; init; }

    /// <summary>
    /// What this means for the main task
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentImpact")]
    [MaxLength(2000)]
    public string? ParentImpact { get; init; }

    /// <summary>
    /// Becomes the parent's next action when applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suggestedNextAction")]
    [MaxLength(500)]
    public string? SuggestedNextAction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
