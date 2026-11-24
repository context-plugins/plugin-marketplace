using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AudioInputEvent
{
    /// <summary>
    /// An encoded stream of audio.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioChunk")]
    public string? AudioChunk { get; init; }

    /// <summary>
    /// The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit mono-channel little-endian format. The value of the field should be: audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false
    /// </summary>
    [JsonPropertyName("contentType")]
    public required string ContentType { get; init; }

    /// <summary>
    /// A unique identifier that your application assigns to the event. You can use this to identify events in logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventId")]
    public string? EventId { get; init; }

    /// <summary>
    /// A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientTimestampMillis")]
    public int? ClientTimestampMillis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
