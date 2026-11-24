using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record RuntimeLexPutSessionResponse
{
    /// <summary>
    /// Content type as specified in the Accept HTTP header in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    public string? ContentType { get; init; }

    /// <summary>
    /// The name of the current intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    /// <summary>
    /// Map of zero or more intent slots Amazon Lex detected from the user input during the conversation. Amazon Lex creates a resolution list containing likely values for a slot. The value that it returns is determined by the valueSelectionStrategy selected when the slot type was created or updated. If valueSelectionStrategy is set to ORIGINAL_VALUE, the value provided by the user is returned, if the user value is similar to the slot values. If valueSelectionStrategy is set to TOP_RESOLUTION Amazon Lex returns the first value in the resolution list or, if there is no resolution list, null. If you don
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public string? Slots { get; init; }

    /// <summary>
    /// Map of key/value pairs representing session-specific context information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionAttributes")]
    public string? SessionAttributes { get; init; }

    /// <summary>
    /// The next message that should be presented to the user. You can only use this field in the de-DE, en-AU, en-GB, en-US, es-419, es-ES, es-US, fr-CA, fr-FR, and it-IT locales. In all other locales, the message field is null. You should use the encodedMessage field instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// The next message that should be presented to the user. The encodedMessage field is base-64 encoded. You must decode the field before you can use the value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encodedMessage")]
    public string? EncodedMessage { get; init; }

    /// <summary>
    /// The format of the response message. One of the following values: PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML - The message contains text formatted for voice output. Composite - The message contains an escaped JSON object containing one or more messages from the groups that messages were assigned to when the intent was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageFormat")]
    public MessageFormat1? MessageFormat { get; init; }

    /// <summary>
    /// ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response to confirm the intent before fulfilling an intent. ElicitIntent - Amazon Lex wants to elicit the user's intent. ElicitSlot - Amazon Lex is expecting the value of a slot for the current intent. Failed - Conveys that the conversation with the user has failed. This can happen for various reasons, including the user does not provide an appropriate response to prompts from the service, or if the Lambda function fails to fulfill the intent. Fulfilled - Conveys that the Lambda function has sucessfully fulfilled the intent. ReadyForFulfi
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dialogState")]
    public DialogState1? DialogState { get; init; }

    /// <summary>
    /// If the dialogState is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    /// <summary>
    /// The audio version of the message to convey to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioStream")]
    public string? AudioStream { get; init; }

    /// <summary>
    /// A unique identifier for the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// A list of active contexts for the session.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeContexts")]
    public string? ActiveContexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
