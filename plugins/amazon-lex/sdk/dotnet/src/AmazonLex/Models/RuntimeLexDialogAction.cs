using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record RuntimeLexDialogAction
{
    /// <summary>
    /// The next action that the bot should take in its interaction with the user. The possible values are: ConfirmIntent - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?" Close - Indicates that the there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response. Delegate - The next action is determined by Amazon Lex. ElicitIntent - The next action is to determine the intent that the user wants to fulfill. ElicitSlot - The next action is to elicit
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// The name of the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    /// <summary>
    /// Map of the slots that have been gathered and their values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public IReadOnlyDictionary<string, string>? Slots { get; init; }

    /// <summary>
    /// The name of the slot that should be elicited from the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    /// <summary>
    /// The fulfillment state of the intent. The possible values are: Failed - The Lambda function associated with the intent failed to fulfill the intent. Fulfilled - The intent has fulfilled by the Lambda function associated with the intent. ReadyForFulfillment - All of the information necessary for the intent is present and the intent ready to be fulfilled by the client application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fulfillmentState")]
    public FulfillmentState? FulfillmentState { get; init; }

    /// <summary>
    /// The message that should be shown to the user. If you don't specify a message, Amazon Lex will use the message configured for the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML - The message contains text formatted for voice output. Composite - The message contains an escaped JSON object containing one or more messages. For more information, see Message Groups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messageFormat")]
    public MessageFormat? MessageFormat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
