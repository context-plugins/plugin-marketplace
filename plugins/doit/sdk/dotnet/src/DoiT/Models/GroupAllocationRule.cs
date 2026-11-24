using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Allocation rule for a group type allocation. Components can reference other existing allocation rules by using the "allocation_rule" dimension type.
/// </summary>
public record GroupAllocationRule
{
    /// <summary>
    /// Name of the allocation rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Description of the allocation rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Action to perform with this rule.
    /// </summary>
    [JsonPropertyName("action")]
    public required ActionEnum Action { get; init; }

    /// <summary>
    /// ID of existing allocation (required for 'update' or 'select' action).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// List of allocation filter components (required for 'create' or 'update' action). Can include components of type "allocation_rule" to reference existing allocation rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("components")]
    public IReadOnlyList<AllocationComponent>? Components { get; init; }

    /// <summary>
    /// Formula for combining components (A is the first component, B is the second one, etc.)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formula")]
    public string? Formula { get; init; }

    /// <summary>
    /// Makes the rule emit a value extracted from the first non-empty source instead of the rule name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valueExtraction")]
    public AllocationValueExtraction? ValueExtraction { get; init; }

    /// <summary>
    /// Ordered, non-overlapping date ranges when this rule applies. Empty or absent means the rule always applies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validityPeriods")]
    public IReadOnlyList<AllocationRulePeriod>? ValidityPeriods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
