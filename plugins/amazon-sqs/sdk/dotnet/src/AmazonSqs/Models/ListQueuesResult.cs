using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListQueuesResult
{
    /// <summary>
    /// A list of queue URLs, up to 1,000 entries, or the value of MaxResults that you sent in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QueueUrls")]
    public IReadOnlyList<string>? QueueUrls { get; init; }

    /// <summary>
    /// Pagination token to include in the next request. Token value is null if there are no additional results to request, or if you did not set MaxResults in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
