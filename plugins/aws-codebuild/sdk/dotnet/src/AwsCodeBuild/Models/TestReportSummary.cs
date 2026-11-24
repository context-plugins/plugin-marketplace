using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record TestReportSummary
{
    /// <summary>
    /// The number of test cases in this TestReportSummary. The total includes truncated test cases.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// A map that contains the number of each type of status returned by the test results in this TestReportSummary.
    /// </summary>
    [JsonPropertyName("statusCounts")]
    public required IReadOnlyDictionary<string, int> StatusCounts { get; init; }

    /// <summary>
    /// The number of nanoseconds it took to run all of the test cases in this report.
    /// </summary>
    [JsonPropertyName("durationInNanoSeconds")]
    public required int DurationInNanoSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
