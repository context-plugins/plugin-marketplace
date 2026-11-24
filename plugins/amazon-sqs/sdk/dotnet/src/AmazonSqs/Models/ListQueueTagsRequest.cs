using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ListQueueTagsRequest
{
    /// <summary>
    /// The URL of the queue.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
