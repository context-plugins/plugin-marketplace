using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record DecisionTask
{
    /// <summary>
    /// The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.
    /// </summary>
    [JsonPropertyName("taskToken")]
    public required string TaskToken { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskStarted event recorded in the history.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    [JsonPropertyName("workflowExecution")]
    public required WorkflowExecution WorkflowExecution { get; init; }

    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    /// <summary>
    /// A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.
    /// </summary>
    [JsonPropertyName("events")]
    public required IReadOnlyList<HistoryEvent> Events { get; init; }

    /// <summary>
    /// If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousStartedEventId")]
    public int? PreviousStartedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
