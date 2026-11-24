using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ListClosedWorkflowExecutionsInput
{
    /// <summary>
    /// The name of the domain that contains the workflow executions to list.
    /// </summary>
    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimeFilter")]
    public ExecutionTimeFilter? StartTimeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeTimeFilter")]
    public ExecutionTimeFilter? CloseTimeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executionFilter")]
    public WorkflowExecutionFilter? ExecutionFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closeStatusFilter")]
    public CloseStatusFilter? CloseStatusFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("typeFilter")]
    public WorkflowTypeFilter? TypeFilter { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tagFilter")]
    public TagFilter? TagFilter { get; init; }

    /// <summary>
    /// If NextPageToken is returned there are more results available. The value of NextPageToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded its maximum lifetime". The configured maximumPageSize determines how many results can be returned in a single call.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// The maximum number of results that are returned per call. Use nextPageToken to obtain further pages of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximumPageSize")]
    public int? MaximumPageSize { get; init; }

    /// <summary>
    /// When set to true, returns the results in reverse order. By default the results are returned in descending order of the start or the close time of the executions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reverseOrder")]
    public bool? ReverseOrder { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
