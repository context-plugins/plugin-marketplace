using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListTestSetsResponse
{
    /// <summary>
    /// The selected test sets in a list of test sets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSets")]
    public IReadOnlyList<TestSetSummary>? TestSets { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListTestSets operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSets operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
