using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListTestSetRecordsResponse
{
    /// <summary>
    /// The list of records from the test set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetRecords")]
    public IReadOnlyList<TestSetTurnRecord>? TestSetRecords { get; init; }

    /// <summary>
    /// A token that indicates whether there are more records to return in a response to the ListTestSetRecords operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSetRecords operation request to get the next page of records.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
