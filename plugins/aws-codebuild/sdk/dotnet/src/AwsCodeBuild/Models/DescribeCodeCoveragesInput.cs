using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record DescribeCodeCoveragesInput
{
    /// <summary>
    /// The ARN of the report for which test cases are returned.
    /// </summary>
    [JsonPropertyName("reportArn")]
    public required string ReportArn { get; init; }

    /// <summary>
    /// The nextToken value returned from a previous call to DescribeCodeCoverages. This specifies the next item to return. To return the beginning of the list, exclude this parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Specifies if the results are sorted in ascending or descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortOrder")]
    public SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? SortOrder { get; init; }

    /// <summary>
    /// Specifies how the results are sorted. Possible values are: FILE_PATH The results are sorted by file path. LINE_COVERAGE_PERCENTAGE The results are sorted by the percentage of lines that are covered.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi? SortBy { get; init; }

    /// <summary>
    /// The minimum line coverage percentage to report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minLineCoveragePercentage")]
    public double? MinLineCoveragePercentage { get; init; }

    /// <summary>
    /// The maximum line coverage percentage to report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxLineCoveragePercentage")]
    public double? MaxLineCoveragePercentage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
