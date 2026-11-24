using System.Collections.Generic;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A group of filter conditions joined by a logical operator
/// </summary>
public record FilterGroup
{
    /// <summary>
    /// Logical operator combining the conditions in this group
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logicalOperator")]
    public LogicalOperator? LogicalOperator { get; init; }

    /// <summary>
    /// List of individual field filter conditions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFilters")]
    public IReadOnlyList<QueryFilter>? QueryFilters { get; init; }

    /// <summary>
    /// Nested filter groups for complex query expressions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filterGroups")]
    public IReadOnlyList<FilterGroup>? FilterGroups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
