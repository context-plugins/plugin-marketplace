using System.Text.Json.Serialization;
using AmazonSqs.Core.Models;

namespace AmazonSqs.Models;

public record DeleteMessageBatchResultEntry
{
    /// <summary>
    /// Represents a successfully deleted message.
    /// </summary>
    [JsonPropertyName("Id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
