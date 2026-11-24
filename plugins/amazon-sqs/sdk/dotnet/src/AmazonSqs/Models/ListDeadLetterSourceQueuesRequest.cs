using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListDeadLetterSourceQueuesRequest
{
    /// <summary>
    /// The URL of a dead-letter queue. Queue URLs and names are case-sensitive.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// Pagination token to request the next set of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Maximum number of results to include in the response. Value range is 1 to 1000. You must set MaxResults to receive a value for NextToken in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
