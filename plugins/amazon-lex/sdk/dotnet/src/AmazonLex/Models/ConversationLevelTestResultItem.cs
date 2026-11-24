using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ConversationLevelTestResultItem
{
    /// <summary>
    /// The conversation Id of the test result evaluation item.
    /// </summary>
    [JsonPropertyName("conversationId")]
    public required string ConversationId { get; init; }

    /// <summary>
    /// The end-to-end success or failure of the test result evaluation item.
    /// </summary>
    [JsonPropertyName("endToEndResult")]
    public required EndToEndResult1 EndToEndResult { get; init; }

    /// <summary>
    /// The speech transcription success or failure of the test result evaluation item.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechTranscriptionResult")]
    public SpeechTranscriptionResult1? SpeechTranscriptionResult { get; init; }

    /// <summary>
    /// The intent classification of the test result evaluation item.
    /// </summary>
    [JsonPropertyName("intentClassificationResults")]
    public required IReadOnlyList<ConversationLevelIntentClassificationResultItem> IntentClassificationResults { get; init; }

    /// <summary>
    /// The slot success or failure of the test result evaluation item.
    /// </summary>
    [JsonPropertyName("slotResolutionResults")]
    public required IReadOnlyList<ConversationLevelSlotResolutionResultItem> SlotResolutionResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
