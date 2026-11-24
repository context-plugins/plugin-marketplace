using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PlaybackInterruptionEvent
{
    /// <summary>
    /// Indicates the type of user input that Amazon Lex V2 detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventReason")]
    public EventReason? EventReason { get; init; }

    /// <summary>
    /// The identifier of the event that contained the audio, DTMF, or text that caused the interruption.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("causedByEventId")]
    public string? CausedByEventId { get; init; }

    /// <summary>
    /// A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventId")]
    public string? EventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
