using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListMessageMoveTasksRequest
{
    /// <summary>
    /// The ARN of the queue whose message movement tasks are to be listed.
    /// </summary>
    [JsonPropertyName("SourceArn")]
    public required string SourceArn { get; init; }

    /// <summary>
    /// The maximum number of results to include in the response. The default is 1, which provides the most recent message movement task. The upper limit is 10.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
