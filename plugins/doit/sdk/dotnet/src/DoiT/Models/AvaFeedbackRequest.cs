using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AvaFeedbackRequest
{
    /// <summary>
    /// The conversation ID the feedback relates to.
    /// </summary>
    [JsonPropertyName("conversationId")]
    public required string ConversationId { get; init; }

    /// <summary>
    /// The specific answer ID within the conversation.
    /// </summary>
    [JsonPropertyName("answerId")]
    public required string AnswerId { get; init; }

    [JsonPropertyName("feedback")]
    public required Feedback Feedback { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
