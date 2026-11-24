using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record Intent
{
    /// <summary>
    /// The name of the intent.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// A map of all of the slots for the intent. The name of the slot maps to the value of the slot. If a slot has not been filled, the value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slots")]
    public IReadOnlyDictionary<string, Slot>? Slots { get; init; }

    /// <summary>
    /// Indicates the fulfillment state for the intent. The meanings of each value are as follows: Failed – The bot failed to fulfill the intent. Fulfilled – The bot has completed fulfillment of the intent. FulfillmentInProgress – The bot is in the middle of fulfilling the intent. InProgress – The bot is in the middle of eliciting the slot values that are necessary to fulfill the intent. ReadyForFulfillment – The bot has elicited all the slot values for the intent and is ready to fulfill the intent. Waiting – The bot is waiting for a response from the user (limited to streaming conversations).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Indicates whether the intent has been Confirmed, Denied, or None if the confirmation stage has not yet been reached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confirmationState")]
    public ConfirmationState? ConfirmationState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
