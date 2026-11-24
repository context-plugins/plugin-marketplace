using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record RuntimeLexIntentSummary
{
    /// <summary>
    /// The name of the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    /// <summary>
    /// A user-defined label that identifies a particular intent. You can use this label to return to a previous intent. Use the checkpointLabelFilter parameter of the GetSessionRequest operation to filter the intents returned by the operation to those with only the specified label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkpointLabel")]
    public string? CheckpointLabel { get; init; }

    /// <summary>
    /// Map of the slots that have been gathered and their values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public IReadOnlyDictionary<string, string>? Slots { get; init; }

    /// <summary>
    /// The status of the intent after the user responds to the confirmation prompt. If the user confirms the intent, Amazon Lex sets this field to Confirmed. If the user denies the intent, Amazon Lex sets this value to Denied. The possible values are: Confirmed - The user has responded "Yes" to the confirmation prompt, confirming that the intent is complete and that it is ready to be fulfilled. Denied - The user has responded "No" to the confirmation prompt. None - The user has never been prompted for confirmation; or, the user was prompted but did not confirm or deny the prompt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confirmationStatus")]
    public ConfirmationStatus? ConfirmationStatus { get; init; }

    /// <summary>
    /// The next action that the bot should take in its interaction with the user. The possible values are: ConfirmIntent - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?" Close - Indicates that the there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response. ElicitIntent - The next action is to determine the intent that the user wants to fulfill. ElicitSlot - The next action is to elicit a slot value from the user.
    /// </summary>
    [JsonPropertyName("dialogActionType")]
    public required DialogActionType DialogActionType { get; init; }

    /// <summary>
    /// The fulfillment state of the intent. The possible values are: Failed - The Lambda function associated with the intent failed to fulfill the intent. Fulfilled - The intent has fulfilled by the Lambda function associated with the intent. ReadyForFulfillment - All of the information necessary for the intent is present and the intent ready to be fulfilled by the client application.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fulfillmentState")]
    public FulfillmentState? FulfillmentState { get; init; }

    /// <summary>
    /// The next slot to elicit from the user. If there is not slot to elicit, the field is blank.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotToElicit")]
    public string? SlotToElicit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
