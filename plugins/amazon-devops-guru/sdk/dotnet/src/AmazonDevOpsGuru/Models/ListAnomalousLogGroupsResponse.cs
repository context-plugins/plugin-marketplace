using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ListAnomalousLogGroupsResponse
{
    /// <summary>
    /// The ID of the insight containing the log groups.
    /// </summary>
    [JsonPropertyName("InsightId")]
    public required string InsightId { get; init; }

    /// <summary>
    /// The list of Amazon CloudWatch log groups that are related to an insight.
    /// </summary>
    [JsonPropertyName("AnomalousLogGroups")]
    public required IReadOnlyList<AnomalousLogGroup> AnomalousLogGroups { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
