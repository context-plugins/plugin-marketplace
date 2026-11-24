using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The request for a Data Access Record Report.
/// </summary>
public record GoogleAnalyticsAdminV1BetaRunAccessReportRequest
{
    /// <summary>
    /// This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone is used to interpret the start &amp; end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeZone")]
    public string? TimeZone { get; init; }

    /// <summary>
    /// The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. <c>limit</c> must be positive. The API may return fewer rows than the requested <c>limit</c>, if there aren't as many remaining rows as the <c>limit</c>. For instance, there are fewer than 300 possible values for the dimension <c>country</c>, so when reporting on only <c>country</c>, you can't get more than 300 rows, even if you set <c>limit</c> to a higher value. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    /// <summary>
    /// Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in <see href="#AccessQuota">AccessQuota</see>. For account-level requests, this field must be false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnEntityQuota")]
    public bool? ReturnEntityQuota { get; init; }

    /// <summary>
    /// Optional. Decides whether to return the users within user groups. This field works only when include_all_users is set to true. If true, it will return all users with access to the specified property or account. If false, only the users with direct access will be returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expandGroups")]
    public bool? ExpandGroups { get; init; }

    /// <summary>
    /// Optional. Determines whether to include users who have never made an API call in the response. If true, all users with access to the specified property or account are included in the response, regardless of whether they have made an API call or not. If false, only the users who have made an API call will be included.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeAllUsers")]
    public bool? IncludeAllUsers { get; init; }

    /// <summary>
    /// The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessDimension>? Dimensions { get; init; }

    /// <summary>
    /// Specifies how rows are ordered in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderBys")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessOrderBy>? OrderBys { get; init; }

    /// <summary>
    /// Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateRanges")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessDateRange>? DateRanges { get; init; }

    /// <summary>
    /// The metrics requested and displayed in the response. Requests are allowed up to 10 metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessMetric>? Metrics { get; init; }

    /// <summary>
    /// Metric filters allow you to restrict report response to specific metric values which match the filter. Metric filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricFilter")]
    public GoogleAnalyticsAdminV1BetaAccessFilterExpression4? MetricFilter { get; init; }

    /// <summary>
    /// Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters">Fundamentals of Dimension Filters</see> for examples. Metrics cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionFilter")]
    public GoogleAnalyticsAdminV1BetaAccessFilterExpression3? DimensionFilter { get; init; }

    /// <summary>
    /// The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with <c>limit</c> entries. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
