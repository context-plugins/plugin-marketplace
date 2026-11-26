using System.Text.Json.Serialization;
using EinsteinBots.Core.Models;

namespace EinsteinBots.Models;

public record RedirectMessage
{
    /// <summary>
    /// Message type for the redirecting the client to another bot flow.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "redirect";

    /// <summary>
    /// Client-generated sequence number of the message in a session. Increase this number for each subsequent message.
    /// </summary>
    [JsonPropertyName("sequenceId")]
    public required long SequenceId { get; init; }

    /// <summary>
    /// Dialog ID to redirect to.
    /// </summary>
    [JsonPropertyName("dialogId")]
    public required string DialogId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
