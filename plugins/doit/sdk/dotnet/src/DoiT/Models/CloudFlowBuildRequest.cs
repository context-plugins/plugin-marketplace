using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CloudFlowBuildRequest
{
    /// <summary>
    /// Natural language description of the CloudFlow to build from scratch.
    /// </summary>
    [JsonPropertyName("question")]
    public required string Question { get; init; }

    /// <summary>
    /// ID of an existing conversation to continue. When omitted, a new conversation is started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationId")]
    public string? ConversationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
