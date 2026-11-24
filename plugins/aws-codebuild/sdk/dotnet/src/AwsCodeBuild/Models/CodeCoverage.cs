using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record CodeCoverage
{
    /// <summary>
    /// The identifier of the code coverage report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The ARN of the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportARN")]
    public string? ReportArn { get; init; }

    /// <summary>
    /// The path of the test report file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filePath")]
    public string? FilePath { get; init; }

    /// <summary>
    /// The percentage of lines that are covered by your tests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lineCoveragePercentage")]
    public double? LineCoveragePercentage { get; init; }

    /// <summary>
    /// The number of lines that are covered by your tests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linesCovered")]
    public int? LinesCovered { get; init; }

    /// <summary>
    /// The number of lines that are not covered by your tests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linesMissed")]
    public int? LinesMissed { get; init; }

    /// <summary>
    /// The percentage of branches that are covered by your tests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branchCoveragePercentage")]
    public double? BranchCoveragePercentage { get; init; }

    /// <summary>
    /// The number of conditional branches that are covered by your tests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branchesCovered")]
    public int? BranchesCovered { get; init; }

    /// <summary>
    /// The number of conditional branches that are not covered by your tests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branchesMissed")]
    public int? BranchesMissed { get; init; }

    /// <summary>
    /// The date and time that the tests were run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expired")]
    public DateTimeOffset? Expired { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
