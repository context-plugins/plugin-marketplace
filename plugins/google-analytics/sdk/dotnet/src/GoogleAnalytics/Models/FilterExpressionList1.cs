using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The FilterExpressions in or_group have an OR relationship.
/// </summary>
public record FilterExpressionList1
{
    /// <summary>
    /// A list of filter expressions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expressions")]
    public IReadOnlyList<FilterExpression>? Expressions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
