using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

public record ChatMessagesResponse
{
    /// <summary>
    /// The list of chat messages in chronological order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<ChatMessage>? Messages { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
