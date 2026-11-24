using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AvaAskRequest
{
    /// <summary>
    /// The question to ask Ava.
    /// </summary>
    [JsonPropertyName("question")]
    public required string Question { get; init; }

    /// <summary>
    /// Optional ID of an existing conversation to continue.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationId")]
    public string? ConversationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
