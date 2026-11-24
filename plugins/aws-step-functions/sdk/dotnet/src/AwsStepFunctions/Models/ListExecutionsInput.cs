using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;
using AwsStepFunctions.Models.Enums;

namespace AwsStepFunctions.Models;

public record ListExecutionsInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the state machine whose executions is listed. You can specify either a mapRunArn or a stateMachineArn, but not both. You can also return a list of executions associated with a specific alias or version, by specifying an alias ARN or a version ARN in the stateMachineArn parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateMachineArn")]
    public string? StateMachineArn { get; init; }

    /// <summary>
    /// If specified, only list the executions whose current execution status matches the given filter. If you provide a PENDING_REDRIVE statusFilter, you must specify mapRunArn. For more information, see Child workflow execution redrive behaviour in the Step Functions Developer Guide. If you provide a stateMachineArn and a PENDING_REDRIVE statusFilter, the API returns a validation exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusFilter")]
    public StatusFilter? StatusFilter { get; init; }

    /// <summary>
    /// The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Map Run that started the child workflow executions. If the mapRunArn field is specified, a list of all of the child workflow executions started by a Map Run is returned. For more information, see Examining Map Run in the Step Functions Developer Guide. You can specify either a mapRunArn or a stateMachineArn, but not both.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mapRunArn")]
    public string? MapRunArn { get; init; }

    /// <summary>
    /// Sets a filter to list executions based on whether or not they have been redriven. For a Distributed Map, redriveFilter sets a filter to list child workflow executions based on whether or not they have been redriven. If you do not provide a redriveFilter, Step Functions returns a list of both redriven and non-redriven executions. If you provide a state machine ARN in redriveFilter, the API returns a validation exception.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redriveFilter")]
    public RedriveFilter? RedriveFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
