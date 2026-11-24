using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TranscriptEvent
{
    /// <summary>
    /// The transcript of the voice audio from the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript")]
    public string? Transcript { get; init; }

    /// <summary>
    /// A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon Lex V2 in the current session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventId")]
    public string? EventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
