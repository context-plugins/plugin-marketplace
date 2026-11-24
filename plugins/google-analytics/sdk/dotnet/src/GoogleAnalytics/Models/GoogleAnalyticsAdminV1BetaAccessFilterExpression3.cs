using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters">Fundamentals of Dimension Filters</see> for examples. Metrics cannot be used in this filter.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessFilterExpression3
{
    /// <summary>
    /// A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessFilter")]
    public GoogleAnalyticsAdminV1BetaAccessFilter2? AccessFilter { get; init; }

    /// <summary>
    /// Each of the FilterExpressions in the or_group has an OR relationship.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orGroup")]
    public GoogleAnalyticsAdminV1BetaAccessFilterExpressionList3? OrGroup { get; init; }

    /// <summary>
    /// Each of the FilterExpressions in the and_group has an AND relationship.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("andGroup")]
    public GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1? AndGroup { get; init; }

    /// <summary>
    /// The FilterExpression is NOT of not_expression.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notExpression")]
    public GoogleAnalyticsAdminV1BetaAccessFilterExpression2? NotExpression { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
