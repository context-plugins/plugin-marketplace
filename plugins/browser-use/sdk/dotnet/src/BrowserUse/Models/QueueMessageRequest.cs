using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BrowserUse.Models.AnyOf;

namespace BrowserUse.Models;

/// <summary>
/// Send a message to a session. If the session is busy the message waits on
/// the queue and runs as the next turn; if idle it runs immediately.
/// <para>
/// Set <c>interrupt</c> to make it take effect now: the session's active run is
/// cancelled and this message drains straight after. Interrupt is a no-op when
/// the session is already idle, and BEST-EFFORT when busy — if the cancel can't
/// be delivered, the message stays queued and runs after the current turn.
/// </para>
/// </summary>
public record QueueMessageRequest
{
    [JsonPropertyName("text")]
    [MinLength(1)]
    public required string Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interrupt")]
    public bool? Interrupt { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachedFileIds")]
    public Attachedfileids? AttachedFileIds { get; init; }
}
