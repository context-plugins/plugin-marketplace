using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record CancelMessageMoveTaskRequest
{
    /// <summary>
    /// An identifier associated with a message movement task.
    /// </summary>
    [JsonPropertyName("TaskHandle")]
    public required string TaskHandle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
