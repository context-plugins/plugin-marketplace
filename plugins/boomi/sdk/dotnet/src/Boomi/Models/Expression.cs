using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;
using Boomi.Models.Enums;

namespace Boomi.Models;

/// <summary>
/// Filter expression with operator and arguments.
/// </summary>
public record Expression
{
    /// <summary>
    /// Logical operator for combining filter criteria.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operator")]
    public Operator? Operator { get; init; }

    /// <summary>
    /// Nested filter expressions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nestedExpression")]
    public IReadOnlyList<NestedExpression>? NestedExpression { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
