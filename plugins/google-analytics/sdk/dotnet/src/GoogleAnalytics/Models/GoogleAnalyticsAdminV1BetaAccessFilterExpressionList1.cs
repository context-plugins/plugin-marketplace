using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Each of the FilterExpressions in the and_group has an AND relationship.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessFilterExpressionList1
{
    /// <summary>
    /// A list of filter expressions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expressions")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessFilterExpression>? Expressions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
