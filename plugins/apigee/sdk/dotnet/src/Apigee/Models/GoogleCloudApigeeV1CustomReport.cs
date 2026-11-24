using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

public record GoogleCloudApigeeV1CustomReport
{
    /// <summary>
    /// Output only. Last viewed time of this entity as milliseconds since epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastViewedAt")]
    public string? LastViewedAt { get; init; }

    /// <summary>
    /// Legacy field: not used. Contains the from time for the report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fromTime")]
    public string? FromTime { get; init; }

    /// <summary>
    /// Legacy field: not used. This field contains a list of comments associated with custom report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments")]
    public IReadOnlyList<string>? Comments { get; init; }

    /// <summary>
    /// Legacy field: not used. This field contains the top k parameter value for restricting the result
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topk")]
    public string? Topk { get; init; }

    /// <summary>
    /// This field contains the chart type for the report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chartType")]
    public string? ChartType { get; init; }

    /// <summary>
    /// Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// This field contains report properties such as ui metadata etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyList<GoogleCloudApigeeV1ReportProperty>? Properties { get; init; }

    /// <summary>
    /// Legacy field: not used. This field contains a list of tags associated with custom report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Legacy field: not used much. Contains the list of sort by columns
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortByCols")]
    public IReadOnlyList<string>? SortByCols { get; init; }

    /// <summary>
    /// Legacy field: not used. This field contains the offset for the data
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    /// <summary>
    /// Legacy field: not used much. Contains the sort order for the sort columns
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public string? SortOrder { get; init; }

    /// <summary>
    /// Legacy field: not used This field contains the limit for the result retrieved
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    /// <summary>
    /// This field contains the time unit of aggregation for the report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeUnit")]
    public string? TimeUnit { get; init; }

    /// <summary>
    /// This field contains the filter expression
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public string? Filter { get; init; }

    /// <summary>
    /// This is the display name for the report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. Environment name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    /// <summary>
    /// Output only. Unix time when the app was created json key: createdAt
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Required. This contains the list of metrics
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<GoogleCloudApigeeV1CustomReportMetric>? Metrics { get; init; }

    /// <summary>
    /// Output only. Organization name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization")]
    public string? Organization { get; init; }

    /// <summary>
    /// Legacy field: not used. Contains the end time for the report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toTime")]
    public string? ToTime { get; init; }

    /// <summary>
    /// This contains the list of dimensions for the report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<string>? Dimensions { get; init; }

    /// <summary>
    /// Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
