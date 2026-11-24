using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListTestExecutionsResponse
{
    /// <summary>
    /// The list of test executions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExecutions")]
    public IReadOnlyList<TestExecutionSummary>? TestExecutions { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListTestExecutions operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestExecutions operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
