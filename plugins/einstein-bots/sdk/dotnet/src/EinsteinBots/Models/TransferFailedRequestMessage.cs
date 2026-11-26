using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;
using EinsteinBots.Models.Enums;

namespace EinsteinBots.Models;

public record TransferFailedRequestMessage
{
    /// <summary>
    /// Message type for the client to inform the bot that the client failed to transfer the session to another target.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "transferFailed";

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
    /// Reason for the failed transfer.
    /// </summary>
    [JsonPropertyName("reason")]
    public required Reason1 Reason { get; init; }

    /// <summary>
    /// Description of why the transfer failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
