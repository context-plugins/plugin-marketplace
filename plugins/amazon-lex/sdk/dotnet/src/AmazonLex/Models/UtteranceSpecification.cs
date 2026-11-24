using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record UtteranceSpecification
{
    /// <summary>
    /// The identifier of the alias of the bot that the utterance was made to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasId")]
    public string? BotAliasId { get; init; }

    /// <summary>
    /// The version of the bot that the utterance was made to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The locale of the bot that the utterance was made to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The identifier of the session that the utterance was made in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// The channel that is integrated with the bot that the utterance was made to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public string? Channel { get; init; }

    /// <summary>
    /// The mode of the session. The possible values are as follows: Speech – The session consisted of spoken dialogue. Text – The session consisted of written dialogue. DTMF – The session consisted of touch-tone keypad (Dual Tone Multi-Frequency) key presses. MultiMode – The session consisted of multiple modes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode1? Mode { get; init; }

    /// <summary>
    /// The date and time when the conversation in which the utterance took place began. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationStartTime")]
    public DateTimeOffset? ConversationStartTime { get; init; }

    /// <summary>
    /// The date and time when the conversation in which the utterance took place ended. A conversation is defined as a unique combination of a sessionId and an originatingRequestId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationEndTime")]
    public DateTimeOffset? ConversationEndTime { get; init; }

    /// <summary>
    /// The text of the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utterance")]
    public string? Utterance { get; init; }

    /// <summary>
    /// The date and time when the utterance took place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceTimestamp")]
    public DateTimeOffset? UtteranceTimestamp { get; init; }

    /// <summary>
    /// The duration in milliseconds of the audio associated with the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioVoiceDurationMillis")]
    public int? AudioVoiceDurationMillis { get; init; }

    /// <summary>
    /// Specifies whether the bot understood the utterance or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceUnderstood")]
    public bool? UtteranceUnderstood { get; init; }

    /// <summary>
    /// The input type of the utterance. The possible values are as follows: PCM format: audio data must be in little-endian byte order. audio/l16; rate=16000; channels=1 audio/x-l16; sample-rate=16000; channel-count=1 audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false Opus format audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4 Text format text/plain; charset=utf-8
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputType")]
    public string? InputType { get; init; }

    /// <summary>
    /// The output type of the utterance. The possible values are as follows: audio/mpeg audio/ogg audio/pcm (16 KHz) audio/ (defaults to mpeg) text/plain; charset=utf-8
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputType")]
    public string? OutputType { get; init; }

    /// <summary>
    /// The name of the intent that the utterance is associated to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedIntentName")]
    public string? AssociatedIntentName { get; init; }

    /// <summary>
    /// The name of the slot that the utterance is associated to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedSlotName")]
    public string? AssociatedSlotName { get; init; }

    /// <summary>
    /// The state of the intent that the utterance is associated to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentState")]
    public IntentState? IntentState { get; init; }

    /// <summary>
    /// The type of dialog action that the utterance is associated to. See the type field in DialogAction for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dialogActionType")]
    public string? DialogActionType { get; init; }

    /// <summary>
    /// The identifier for the audio of the bot response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botResponseAudioVoiceId")]
    public string? BotResponseAudioVoiceId { get; init; }

    /// <summary>
    /// The slots that have been filled in the session by the time of the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotsFilledInSession")]
    public string? SlotsFilledInSession { get; init; }

    /// <summary>
    /// The identifier of the request associated with the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceRequestId")]
    public string? UtteranceRequestId { get; init; }

    /// <summary>
    /// A list of objects containing information about the bot response to the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botResponses")]
    public IReadOnlyList<UtteranceBotResponse>? BotResponses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
