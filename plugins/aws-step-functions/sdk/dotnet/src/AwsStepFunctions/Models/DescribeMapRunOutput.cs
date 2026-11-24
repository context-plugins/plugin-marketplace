using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record DescribeMapRunOutput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies a Map Run.
    /// </summary>
    [JsonPropertyName("mapRunArn")]
    public required string MapRunArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The current status of the Map Run.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    /// <summary>
    /// The date when the Map Run was started.
    /// </summary>
    [JsonPropertyName("startDate")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// The date when the Map Run was stopped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stopDate")]
    public DateTimeOffset? StopDate { get; init; }

    /// <summary>
    /// The maximum number of child workflow executions configured to run in parallel for the Map Run at the same time.
    /// </summary>
    [JsonPropertyName("maxConcurrency")]
    public required int MaxConcurrency { get; init; }

    /// <summary>
    /// The maximum percentage of failed child workflow executions before the Map Run fails.
    /// </summary>
    [JsonPropertyName("toleratedFailurePercentage")]
    public required double ToleratedFailurePercentage { get; init; }

    /// <summary>
    /// The maximum number of failed child workflow executions before the Map Run fails.
    /// </summary>
    [JsonPropertyName("toleratedFailureCount")]
    public required int ToleratedFailureCount { get; init; }

    [JsonPropertyName("itemCounts")]
    public required MapRunItemCounts ItemCounts { get; init; }

    [JsonPropertyName("executionCounts")]
    public required MapRunExecutionCounts ExecutionCounts { get; init; }

    /// <summary>
    /// The number of times you've redriven a Map Run. If you have not yet redriven a Map Run, the redriveCount is 0. This count is only updated if you successfully redrive a Map Run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveCount")]
    public int? RedriveCount { get; init; }

    /// <summary>
    /// The date a Map Run was last redriven. If you have not yet redriven a Map Run, the redriveDate is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveDate")]
    public DateTimeOffset? RedriveDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
