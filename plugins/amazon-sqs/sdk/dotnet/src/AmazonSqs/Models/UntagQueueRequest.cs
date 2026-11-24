using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record UntagQueueRequest
{
    /// <summary>
    /// The URL of the queue.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The list of tags to be removed from the specified queue.
    /// </summary>
    [JsonPropertyName("TagKeys")]
    public required IReadOnlyList<string> TagKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
