using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record InsightEventsRequest
{
    /// <summary>
    /// The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
    /// </summary>
    [JsonPropertyName("InsightId")]
    public required string InsightId { get; init; }

    /// <summary>
    /// Used to retrieve at most the specified value of events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// Specify the pagination token returned by a previous request to retrieve the next page of events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
