using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListTestExecutionResultItemsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExecutionResults")]
    public TestExecutionResultItems? TestExecutionResults { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListTestExecutionResultItems operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestExecutionResultItems operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
