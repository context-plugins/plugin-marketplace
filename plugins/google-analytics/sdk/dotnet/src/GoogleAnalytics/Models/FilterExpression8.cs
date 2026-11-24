using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The filter clause of dimensions. Metrics cannot be used in this filter.
/// </summary>
public record FilterExpression8
{
    /// <summary>
    /// The FilterExpressions in or_group have an OR relationship.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orGroup")]
    public FilterExpressionList1? OrGroup { get; init; }

    /// <summary>
    /// The FilterExpression is NOT of not_expression.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notExpression")]
    public FilterExpression1? NotExpression { get; init; }

    /// <summary>
    /// A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public Filter2? Filter { get; init; }

    /// <summary>
    /// The FilterExpressions in and_group have an AND relationship.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("andGroup")]
    public FilterExpressionList2? AndGroup { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
