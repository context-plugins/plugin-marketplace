using System.Text.Json.Serialization;
using SalesforceServiceCloud.Core.Models;

namespace SalesforceServiceCloud.Models;

public record TransferSucceededRequestMessage
{
    /// <summary>
    /// Message type for the client to inform the bot that the client successfully transferred the session to another target.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "transferSucceeded";

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
