using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record GetExecutionHistoryInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the execution.
    /// </summary>
    [JsonPropertyName("executionArn")]
    public required string ExecutionArn { get; init; }

    /// <summary>
    /// The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. The default is 100 and the maximum allowed page size is 1000. A value of 0 uses the default. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Lists events in descending order of their timeStamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reverseOrder")]
    public bool? ReverseOrder { get; init; }

    /// <summary>
    /// If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// You can select whether execution data (input or output of a history event) is returned. The default is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeExecutionData")]
    public bool? IncludeExecutionData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
