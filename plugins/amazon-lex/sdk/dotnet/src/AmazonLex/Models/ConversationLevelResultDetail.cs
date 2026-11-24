using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ConversationLevelResultDetail
{
    /// <summary>
    /// The success or failure of the streaming of the conversation.
    /// </summary>
    [JsonPropertyName("endToEndResult")]
    public required EndToEndResult EndToEndResult { get; init; }

    /// <summary>
    /// The speech transcription success or failure details of the conversation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechTranscriptionResult")]
    public SpeechTranscriptionResult? SpeechTranscriptionResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
