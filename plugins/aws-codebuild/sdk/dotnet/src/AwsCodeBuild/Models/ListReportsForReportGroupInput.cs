using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record ListReportsForReportGroupInput
{
    /// <summary>
    /// The ARN of the report group for which you want to return report ARNs.
    /// </summary>
    [JsonPropertyName("reportGroupArn")]
    public required string ReportGroupArn { get; init; }

    /// <summary>
    /// During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Use to specify whether the results are returned in ascending or descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrder5? SortOrder { get; init; }

    /// <summary>
    /// The maximum number of paginated reports in this report group returned per response. Use nextToken to iterate pages in the list of returned Report objects. The default value is 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filter")]
    public ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
