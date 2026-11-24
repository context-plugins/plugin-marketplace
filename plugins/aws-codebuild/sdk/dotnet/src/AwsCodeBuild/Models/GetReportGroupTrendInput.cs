using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record GetReportGroupTrendInput
{
    /// <summary>
    /// The ARN of the report group that contains the reports to analyze.
    /// </summary>
    [JsonPropertyName("reportGroupArn")]
    public required string ReportGroupArn { get; init; }

    /// <summary>
    /// The number of reports to analyze. This operation always retrieves the most recent reports. If this parameter is omitted, the most recent 100 reports are analyzed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numOfReports")]
    public int? NumOfReports { get; init; }

    /// <summary>
    /// The test report value to accumulate. This must be one of the following values: Test reports: DURATION Accumulate the test run times for the specified reports. PASS_RATE Accumulate the percentage of tests that passed for the specified test reports. TOTAL Accumulate the total number of tests for the specified test reports. Code coverage reports: BRANCH_COVERAGE Accumulate the branch coverage percentages for the specified test reports. BRANCHES_COVERED Accumulate the branches covered values for the specified test reports. BRANCHES_MISSED Accumulate the branches missed values for the specified tes
    /// </summary>
    [JsonPropertyName("trendField")]
    public required TrendField TrendField { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
