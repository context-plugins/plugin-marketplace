using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Single allocation rule. Components can reference other existing allocation rules by using the "allocation_rule" dimension type.
/// </summary>
public record AllocationRule
{
    /// <summary>
    /// List of allocation filter components.
    /// </summary>
    [JsonPropertyName("components")]
    public required IReadOnlyList<AllocationComponent> Components { get; init; }

    /// <summary>
    /// Formula for combining components (A is the first component, B is the second one, etc.).
    /// </summary>
    [JsonPropertyName("formula")]
    public required string Formula { get; init; }

    /// <summary>
    /// Ordered, non-overlapping date ranges when this rule applies. Empty or absent means the rule always applies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validityPeriods")]
    public IReadOnlyList<AllocationRulePeriod>? ValidityPeriods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
