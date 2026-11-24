using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListTestExecutionResultItemsRequest
{
    /// <summary>
    /// The unique identifier of the test execution to list the result items.
    /// </summary>
    [JsonPropertyName("testExecutionId")]
    public required string TestExecutionId { get; init; }

    [JsonPropertyName("resultFilterBy")]
    public required TestExecutionResultFilterBy ResultFilterBy { get; init; }

    /// <summary>
    /// The maximum number of test execution result items to return in each page. If there are fewer results than the max page size, only the actual number of results are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If the response from the ListTestExecutionResultItems operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
