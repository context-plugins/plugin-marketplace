using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record MapRunItemCounts
{
    /// <summary>
    /// The total number of items to process in child workflow executions that haven't started running yet.
    /// </summary>
    [JsonPropertyName("pending")]
    public required int Pending { get; init; }

    /// <summary>
    /// The total number of items being processed in child workflow executions that are currently in-progress.
    /// </summary>
    [JsonPropertyName("running")]
    public required int Running { get; init; }

    /// <summary>
    /// The total number of items processed in child workflow executions that have completed successfully.
    /// </summary>
    [JsonPropertyName("succeeded")]
    public required int Succeeded { get; init; }

    /// <summary>
    /// The total number of items processed in child workflow executions that have failed.
    /// </summary>
    [JsonPropertyName("failed")]
    public required int Failed { get; init; }

    /// <summary>
    /// The total number of items processed in child workflow executions that have timed out.
    /// </summary>
    [JsonPropertyName("timedOut")]
    public required int TimedOut { get; init; }

    /// <summary>
    /// The total number of items processed in child workflow executions that were either stopped by the user or by Step Functions, because the Map Run failed.
    /// </summary>
    [JsonPropertyName("aborted")]
    public required int Aborted { get; init; }

    /// <summary>
    /// The total number of items processed in all the child workflow executions started by a Map Run.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// Returns the count of items whose results were written by ResultWriter. For more information, see ResultWriter in the Step Functions Developer Guide.
    /// </summary>
    [JsonPropertyName("resultsWritten")]
    public required int ResultsWritten { get; init; }

    /// <summary>
    /// The number of FAILED, ABORTED, or TIMED_OUT items in child workflow executions that cannot be redriven because the execution status of those child workflows is terminal. For example, child workflows with an execution status of FAILED, ABORTED, or TIMED_OUT and a redriveStatus of NOT_REDRIVABLE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failuresNotRedrivable")]
    public int? FailuresNotRedrivable { get; init; }

    /// <summary>
    /// The number of unsuccessful items in child workflow executions currently waiting to be redriven.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pendingRedrive")]
    public int? PendingRedrive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
