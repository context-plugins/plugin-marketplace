using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record ChangeMessageVisibilityBatchResultEntry
{
    /// <summary>
    /// Represents a message whose visibility timeout has been changed successfully.
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
