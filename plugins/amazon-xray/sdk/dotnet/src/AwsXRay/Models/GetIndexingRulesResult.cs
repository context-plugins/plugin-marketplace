using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record GetIndexingRulesResult
{
    /// <summary>
    /// Retrieves all indexing rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IndexingRules")]
    public IReadOnlyList<IndexingRule>? IndexingRules { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of indexes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
