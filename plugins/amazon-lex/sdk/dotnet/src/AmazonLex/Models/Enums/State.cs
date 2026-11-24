using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates the fulfillment state for the intent. The meanings of each value are as follows: Failed – The bot failed to fulfill the intent. Fulfilled – The bot has completed fulfillment of the intent. FulfillmentInProgress – The bot is in the middle of fulfilling the intent. InProgress – The bot is in the middle of eliciting the slot values that are necessary to fulfill the intent. ReadyForFulfillment – The bot has elicited all the slot values for the intent and is ready to fulfill the intent. Waiting – The bot is waiting for a response from the user (limited to streaming conversations).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Failed = new("Failed");

    public static readonly State Fulfilled = new("Fulfilled");

    public static readonly State InProgress = new("InProgress");

    public static readonly State ReadyForFulfillment = new("ReadyForFulfillment");

    public static readonly State Waiting = new("Waiting");

    public static readonly State FulfillmentInProgress = new("FulfillmentInProgress");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onFulfilled,
        Func<TResult> onInProgress,
        Func<TResult> onReadyForFulfillment,
        Func<TResult> onWaiting,
        Func<TResult> onFulfillmentInProgress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == Fulfilled => onFulfilled(),
            _ when this == InProgress => onInProgress(),
            _ when this == ReadyForFulfillment => onReadyForFulfillment(),
            _ when this == Waiting => onWaiting(),
            _ when this == FulfillmentInProgress => onFulfillmentInProgress(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed,
        Action onFulfilled,
        Action onInProgress,
        Action onReadyForFulfillment,
        Action onWaiting,
        Action onFulfillmentInProgress,
        Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == Fulfilled) onFulfilled();
        else if (this == InProgress) onInProgress();
        else if (this == ReadyForFulfillment) onReadyForFulfillment();
        else if (this == Waiting) onWaiting();
        else if (this == FulfillmentInProgress) onFulfillmentInProgress();
        else otherwise(Value);
    }
}
