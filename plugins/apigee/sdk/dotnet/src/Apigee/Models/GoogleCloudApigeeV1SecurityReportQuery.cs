using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Body structure when user makes a request to create a security report.
/// </summary>
public record GoogleCloudApigeeV1SecurityReportQuery
{
    /// <summary>
    /// A list of Metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityReportQueryMetric>? Metrics { get; init; }

    /// <summary>
    /// Delimiter used in the CSV file, if <c>outputFormat</c> is set to <c>csv</c>. Defaults to the <c>,</c> (comma) character. Supported delimiter characters include comma (<c>,</c>), pipe (<c>|</c>), and tab (<c>\t</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("csvDelimiter")]
    public string? CsvDelimiter { get; init; }

    /// <summary>
    /// Valid values include: <c>csv</c> or <c>json</c>. Defaults to <c>json</c>. Note: Configure the delimiter for CSV output using the csvDelimiter property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    /// <summary>
    /// Maximum number of rows that can be returned in the result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public int? Limit { get; init; }

    /// <summary>
    /// Report Definition ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportDefinitionId")]
    public string? ReportDefinitionId { get; init; }

    /// <summary>
    /// Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public string? Filter { get; init; }

    /// <summary>
    /// Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("envgroupHostname")]
    public string? EnvgroupHostname { get; init; }

    /// <summary>
    /// Required. Time range for the query. Can use the following predefined strings to specify the time range: <c>last60minutes</c> <c>last24hours</c> <c>last7days</c> Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeRange")]
    public object? TimeRange { get; init; }

    /// <summary>
    /// Security Report display name which users can specify.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<string>? Dimensions { get; init; }

    /// <summary>
    /// Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupByTimeUnit")]
    public string? GroupByTimeUnit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
