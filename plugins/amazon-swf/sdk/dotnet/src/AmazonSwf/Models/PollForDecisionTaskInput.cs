using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record PollForDecisionTaskInput
{
    /// <summary>
    /// The name of the domain containing the task lists to poll.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("taskList")]
    public required TaskList TaskList { get; init; }

    /// <summary>
    /// Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many results can be returned in a single call. The nextPageToken returned by this action cannot be used with GetWorkflowExecutionHistory to get the next p
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximumPageSize")]
    public int? MaximumPageSize { get; init; }

    /// <summary>
    /// When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimestamp of the events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reverseOrder")]
    public bool? ReverseOrder { get; init; }

    /// <summary>
    /// When set to true, returns the events with eventTimestamp greater than or equal to eventTimestamp of the most recent DecisionTaskStarted event. By default, this parameter is set to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startAtPreviousStartedEvent")]
    public bool? StartAtPreviousStartedEvent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
