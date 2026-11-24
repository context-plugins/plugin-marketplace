using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record TagQueueRequest
{
    /// <summary>
    /// The URL of the queue.
    /// </summary>
    [JsonPropertyName("QueueUrl")]
    public required string QueueUrl { get; init; }

    /// <summary>
    /// The list of tags to be added to the specified queue.
    /// </summary>
    [JsonPropertyName("Tags")]
    public required IReadOnlyDictionary<string, string> Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
