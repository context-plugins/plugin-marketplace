using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record StartMessageMoveTaskResult
{
    /// <summary>
    /// An identifier associated with a message movement task. You can use this identifier to cancel a specified message movement task using the CancelMessageMoveTask action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TaskHandle")]
    public string? TaskHandle { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
