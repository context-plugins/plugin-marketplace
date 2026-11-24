using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The customized Data Access Record Report response.
/// </summary>
public record GoogleAnalyticsAdminV1BetaRunAccessReportResponse
{
    /// <summary>
    /// The quota state for this Analytics property including this request. This field doesn't work with account-level requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quota")]
    public GoogleAnalyticsAdminV1BetaAccessQuota2? Quota { get; init; }

    /// <summary>
    /// The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricHeaders")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessMetricHeader>? MetricHeaders { get; init; }

    /// <summary>
    /// The total number of rows in the query result. <c>rowCount</c> is independent of the number of rows returned in the response, the <c>limit</c> request parameter, and the <c>offset</c> request parameter. For example if a query returns 175 rows and includes <c>limit</c> of 50 in the API request, the response will contain <c>rowCount</c> of 175 but only 50 rows. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    /// <summary>
    /// The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionHeaders")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessDimensionHeader>? DimensionHeaders { get; init; }

    /// <summary>
    /// Rows of dimension value combinations and metric values in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessRow>? Rows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
