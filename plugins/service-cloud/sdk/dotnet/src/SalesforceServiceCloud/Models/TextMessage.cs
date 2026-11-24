using System.Text.Json.Serialization;

namespace SalesforceServiceCloud.Models;

public record TextMessage
{
    /// <summary>
    /// Message type for replying to the bot through text.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "text";

    /// <summary>
    /// Client-generated sequence number of the message in a session. Increase this number for each subsequent message.
    /// </summary>
    [JsonPropertyName("sequenceId")]
    public required long SequenceId { get; init; }

    /// <summary>
    /// Message ID of the previous response you are replying to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inReplyToMessageId")]
    public string? InReplyToMessageId { get; init; }

    /// <summary>
    /// Text reply to the bot. To answer a question with choices with a text message, type the <c>choiceLabel</c>.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }
}
