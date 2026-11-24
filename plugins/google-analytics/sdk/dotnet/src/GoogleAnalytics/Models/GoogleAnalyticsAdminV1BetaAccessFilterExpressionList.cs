using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// A list of filter expressions.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessFilterExpressionList
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
