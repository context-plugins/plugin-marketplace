using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PostTextResponse
{
    /// <summary>
    /// The current user intent that Amazon Lex is aware of.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nluIntentConfidence")]
    public IntentConfidence? NluIntentConfidence { get; init; }

    /// <summary>
    /// One to four alternative intents that may be applicable to the user's intent. Each alternative includes a score that indicates how confident Amazon Lex is that the intent matches the user's intent. The intents are sorted by the confidence score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeIntents")]
    public IReadOnlyList<PredictedIntent>? AlternativeIntents { get; init; }

    /// <summary>
    /// The intent slots that Amazon Lex detected from the user input in the conversation. Amazon Lex creates a resolution list containing likely values for a slot. The value that it returns is determined by the valueSelectionStrategy selected when the slot type was created or updated. If valueSelectionStrategy is set to ORIGINAL_VALUE, the value provided by the user is returned, if the user value is similar to the slot values. If valueSelectionStrategy is set to TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or, if there is no resolution list, null. If you don't specify a va
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public IReadOnlyDictionary<string, string>? Slots { get; init; }

    /// <summary>
    /// A map of key-value pairs representing the session-specific context information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionAttributes")]
    public IReadOnlyDictionary<string, string>? SessionAttributes { get; init; }

    /// <summary>
    /// The message to convey to the user. The message can come from the bot's configuration or from a Lambda function. If the intent is not configured with a Lambda function, or if the Lambda function returned Delegate as the dialogAction.type its response, Amazon Lex decides on the next course of action and selects an appropriate message from the bot's configuration based on the current interaction context. For example, if Amazon Lex isn't able to understand user input, it uses a clarification prompt message. When you create an intent you can assign messages to groups. When messages are assigned to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentimentResponse")]
    public RuntimeLexSentimentResponse? SentimentResponse { get; init; }

    /// <summary>
    /// The format of the response message. One of the following values: PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format defined by the Lambda function. SSML - The message contains text formatted for voice output. Composite - The message contains an escaped JSON object containing one or more messages from the groups that messages were assigned to when the intent was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageFormat")]
    public MessageFormat1AmazonLexModelBuildingV2OperationsApi? MessageFormat { get; init; }

    /// <summary>
    /// Identifies the current state of the user interaction. Amazon Lex returns one of the following values as dialogState. The client can optionally use this information to customize the user interface. ElicitIntent - Amazon Lex wants to elicit user intent. For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialogState. ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response. For example, Amazon Lex wants user confirmation before fulfilling an intent. Instead of a simple "yes" or "no," a
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dialogState")]
    public DialogState1AmazonLexModelBuildingV2OperationsApi? DialogState { get; init; }

    /// <summary>
    /// If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCard")]
    public ResponseCard? ResponseCard { get; init; }

    /// <summary>
    /// A unique identifier for the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// The version of the bot that responded to the conversation. You can use this information to help determine if one version of a bot is performing better than another version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the PostContent, PostText, or PutSession operation. You can use a context to control the intents that can follow up an intent, or to modify the operation of your application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeContexts")]
    public IReadOnlyList<RuntimeLexActiveContext>? ActiveContexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
