using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record MapRunExecutionCounts
{
    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run, but haven't started executing yet.
    /// </summary>
    [JsonPropertyName("pending")]
    public required int Pending { get; init; }

    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run and are currently in-progress.
    /// </summary>
    [JsonPropertyName("running")]
    public required int Running { get; init; }

    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run and have completed successfully.
    /// </summary>
    [JsonPropertyName("succeeded")]
    public required int Succeeded { get; init; }

    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run, but have failed.
    /// </summary>
    [JsonPropertyName("failed")]
    public required int Failed { get; init; }

    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run and have timed out.
    /// </summary>
    [JsonPropertyName("timedOut")]
    public required int TimedOut { get; init; }

    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run and were running, but were either stopped by the user or by Step Functions because the Map Run failed.
    /// </summary>
    [JsonPropertyName("aborted")]
    public required int Aborted { get; init; }

    /// <summary>
    /// The total number of child workflow executions that were started by a Map Run.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Returns the count of child workflow executions whose results were written by ResultWriter. For more information, see ResultWriter in the Step Functions Developer Guide.
    /// </summary>
    [JsonPropertyName("resultsWritten")]
    public required int ResultsWritten { get; init; }

    /// <summary>
    /// The number of FAILED, ABORTED, or TIMED_OUT child workflow executions that cannot be redriven because their execution status is terminal. For example, child workflows with an execution status of FAILED, ABORTED, or TIMED_OUT and a redriveStatus of NOT_REDRIVABLE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failuresNotRedrivable")]
    public int? FailuresNotRedrivable { get; init; }

    /// <summary>
    /// The number of unsuccessful child workflow executions currently waiting to be redriven. The status of these child workflow executions could be FAILED, ABORTED, or TIMED_OUT in the original execution attempt or a previous redrive attempt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingRedrive")]
    public int? PendingRedrive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
