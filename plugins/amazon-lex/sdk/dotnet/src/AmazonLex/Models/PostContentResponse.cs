using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record PostContentResponse
{
    /// <summary>
    /// Content type as specified in the Accept HTTP header in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    public string? ContentType { get; init; }

    /// <summary>
    /// Current user intent that Amazon Lex is aware of.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    /// <summary>
    /// Provides a score that indicates how confident Amazon Lex is that the returned intent is the one that matches the user's intent. The score is between 0.0 and 1.0. The score is a relative score, not an absolute score. The score may change based on improvements to Amazon Lex.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nluIntentConfidence")]
    public string? NluIntentConfidence { get; init; }

    /// <summary>
    /// One to four alternative intents that may be applicable to the user's intent. Each alternative includes a score that indicates how confident Amazon Lex is that the intent matches the user's intent. The intents are sorted by the confidence score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alternativeIntents")]
    public string? AlternativeIntents { get; init; }

    /// <summary>
    /// Map of zero or more intent slots (name/value pairs) Amazon Lex detected from the user input during the conversation. The field is base-64 encoded. Amazon Lex creates a resolution list containing likely values for a slot. The value that it returns is determined by the valueSelectionStrategy selected when the slot type was created or updated. If valueSelectionStrategy is set to ORIGINAL_VALUE, the value provided by the user is returned, if the user value is similar to the slot values. If valueSelectionStrategy is set to TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or,
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public string? Slots { get; init; }

    /// <summary>
    /// Map of key/value pairs representing the session-specific context information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionAttributes")]
    public string? SessionAttributes { get; init; }

    /// <summary>
    /// The sentiment expressed in an utterance. When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field contains the result of the analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentimentResponse")]
    public string? SentimentResponse { get; init; }

    /// <summary>
    /// You can only use this field in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the message field is null. You should use the encodedMessage field instead. The message to convey to the user. The message can come from the bot's configuration or from a Lambda function. If the intent is not configured with a Lambda function, or if the Lambda function returned Delegate as the dialogAction.type in its response, Amazon Lex decides on the next course of action and selects an appropriate message from the bot's configuration based on the curre
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// The message to convey to the user. The message can come from the bot's configuration or from a Lambda function. If the intent is not configured with a Lambda function, or if the Lambda function returned Delegate as the dialogAction.type in its response, Amazon Lex decides on the next course of action and selects an appropriate message from the bot's configuration based on the current interaction context. For example, if Amazon Lex isn't able to understand user input, it uses a clarification prompt message. When you create an intent you can assign messages to groups. When messages are assigned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encodedMessage")]
    public string? EncodedMessage { get; init; }

    /// <summary>
    /// The format of the response message. One of the following values: PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML - The message contains text formatted for voice output. Composite - The message contains an escaped JSON object containing one or more messages from the groups that messages were assigned to when the intent was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageFormat")]
    public MessageFormatAmazonLexModelBuildingV2OperationsApi? MessageFormat { get; init; }

    /// <summary>
    /// Identifies the current state of the user interaction. Amazon Lex returns one of the following values as dialogState. The client can optionally use this information to customize the user interface. ElicitIntent - Amazon Lex wants to elicit the user's intent. Consider the following examples: For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialog state. ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response. For example, Amazon Lex wants user confirmation before fulfilling an inten
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dialogState")]
    public DialogStateAmazonLexModelBuildingV2OperationsApi? DialogState { get; init; }

    /// <summary>
    /// If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    /// <summary>
    /// The text used to process the request. You can use this field only in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the inputTranscript field is null. You should use the encodedInputTranscript field instead. If the input was an audio stream, the inputTranscript field contains the text extracted from the audio stream. This is the text that is actually processed to recognize intents and slot values. You can use this information to determine if Amazon Lex is correctly processing the audio that you send.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputTranscript")]
    public string? InputTranscript { get; init; }

    /// <summary>
    /// The text used to process the request. If the input was an audio stream, the encodedInputTranscript field contains the text extracted from the audio stream. This is the text that is actually processed to recognize intents and slot values. You can use this information to determine if Amazon Lex is correctly processing the audio that you send. The encodedInputTranscript field is base-64 encoded. You must decode the field before you can use the value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encodedInputTranscript")]
    public string? EncodedInputTranscript { get; init; }

    /// <summary>
    /// The prompt (or statement) to convey to the user. This is based on the bot configuration and context. For example, if Amazon Lex did not understand the user intent, it sends the clarificationPrompt configured for the bot. If the intent requires confirmation before taking the fulfillment action, it sends the confirmationPrompt. Another example: Suppose that the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. Then Amazon Lex sends that message in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioStream")]
    public string? AudioStream { get; init; }

    /// <summary>
    /// The version of the bot that responded to the conversation. You can use this information to help determine if one version of a bot is performing better than another version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The unique identifier for the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the PostContent, PostText, or PutSession operation. You can use a context to control the intents that can follow up an intent, or to modify the operation of your application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeContexts")]
    public string? ActiveContexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
