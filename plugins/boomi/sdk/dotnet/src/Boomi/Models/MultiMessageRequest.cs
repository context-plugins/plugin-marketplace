using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// Request body for publishing multiple messages in the predefined JSON format. Each message contains a payload and optional properties.
/// </summary>
public record MultiMessageRequest
{
    /// <summary>
    /// Array of messages to publish to the topic.
    /// </summary>
    [JsonPropertyName("messages")]
    public required IReadOnlyList<MessageItem> Messages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
