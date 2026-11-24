using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record SessionSpecification
{
    /// <summary>
    /// The identifier of the alias of the bot that the session was held with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasId")]
    public string? BotAliasId { get; init; }

    /// <summary>
    /// The version of the bot that the session was held with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The locale of the bot that the session was held with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The channel that is integrated with the bot that the session was held with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public string? Channel { get; init; }

    /// <summary>
    /// The identifier of the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// The date and time when the conversation began. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationStartTime")]
    public DateTimeOffset? ConversationStartTime { get; init; }

    /// <summary>
    /// The date and time when the conversation ended. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationEndTime")]
    public DateTimeOffset? ConversationEndTime { get; init; }

    /// <summary>
    /// The duration of the conversation in seconds. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationDurationSeconds")]
    public int? ConversationDurationSeconds { get; init; }

    /// <summary>
    /// The final state of the conversation. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationEndState")]
    public ConversationEndState? ConversationEndState { get; init; }

    /// <summary>
    /// The mode of the session. The possible values are as follows: Speech – The session was spoken. Text – The session was written. DTMF – The session used a touch-tone keypad (Dual Tone Multi-Frequency). MultiMode – The session used multiple modes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    /// <summary>
    /// The number of turns that the session took.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numberOfTurns")]
    public int? NumberOfTurns { get; init; }

    /// <summary>
    /// A list of objects containing the name of an intent that was invoked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invokedIntentSamples")]
    public IReadOnlyList<InvokedIntentSample>? InvokedIntentSamples { get; init; }

    /// <summary>
    /// The identifier of the first request in a session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("originatingRequestId")]
    public string? OriginatingRequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
