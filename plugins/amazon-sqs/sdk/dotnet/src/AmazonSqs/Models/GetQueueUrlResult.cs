using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record GetQueueUrlResult
{
    /// <summary>
    /// The URL of the queue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QueueUrl")]
    public string? QueueUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
