using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record UserTurnResult
{
    [JsonPropertyName("input")]
    public required UserTurnInputSpecification Input { get; init; }

    [JsonPropertyName("expectedOutput")]
    public required UserTurnOutputSpecification ExpectedOutput { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actualOutput")]
    public UserTurnOutputSpecification? ActualOutput { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public ExecutionErrorDetails? ErrorDetails { get; init; }

    /// <summary>
    /// Specifies whether the expected and actual outputs match or not, or if there is an error in execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endToEndResult")]
    public EndToEndResult3? EndToEndResult { get; init; }

    /// <summary>
    /// Specifies whether the expected and actual intents match or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentMatchResult")]
    public IntentMatchResult? IntentMatchResult { get; init; }

    /// <summary>
    /// Specifies whether the expected and actual slots match or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotMatchResult")]
    public SlotMatchResult? SlotMatchResult { get; init; }

    /// <summary>
    /// Specifies whether the expected and actual speech transcriptions match or not, or if there is an error in execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechTranscriptionResult")]
    public SpeechTranscriptionResult2? SpeechTranscriptionResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationLevelResult")]
    public ConversationLevelResultDetail? ConversationLevelResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
