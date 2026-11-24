using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetSessionResponse
{
    /// <summary>
    /// The identifier of the returned session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// A list of messages that were last sent to the user. The messages are ordered based on the order that your returned the messages from your Lambda function or the order that messages are defined in the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<RuntimeV2LexMessage>? Messages { get; init; }

    /// <summary>
    /// A list of intents that Amazon Lex V2 determined might satisfy the user's utterance. Each interpretation includes the intent, a score that indicates how confident Amazon Lex V2 is that the interpretation is the correct one, and an optional sentiment response that indicates the sentiment expressed in the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interpretations")]
    public IReadOnlyList<Interpretation>? Interpretations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionState")]
    public SessionState? SessionState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
