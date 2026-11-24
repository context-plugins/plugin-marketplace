using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListDeadLetterSourceQueuesResult
{
    /// <summary>
    /// A list of source queue URLs that have the RedrivePolicy queue attribute configured with a dead-letter queue.
    /// </summary>
    [JsonPropertyName("queueUrls")]
    public required IReadOnlyList<string> QueueUrls { get; init; }

    /// <summary>
    /// Pagination token to include in the next request. Token value is null if there are no additional results to request, or if you did not set MaxResults in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
