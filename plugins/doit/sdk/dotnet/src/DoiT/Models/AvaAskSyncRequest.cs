using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AvaAskSyncRequest
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

    /// <summary>
    /// When true, the conversation is not persisted. Recommended for programmatic consumers (Terraform, MCP, CI pipelines).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ephemeral")]
    public bool? Ephemeral { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
