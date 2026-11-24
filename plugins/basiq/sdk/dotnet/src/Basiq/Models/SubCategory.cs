using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Payments Sub-Category
/// </summary>
public record SubCategory
{
    /// <summary>
    /// Category data
    /// </summary>
    [JsonPropertyName("category")]
    public required CategoryAffordabilityExpensesApi Category { get; init; }

    [JsonPropertyName("changeHistory")]
    public required IReadOnlyList<ChangeHistory> ChangeHistory { get; init; }

    /// <summary>
    /// Summary period "monthly".
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
