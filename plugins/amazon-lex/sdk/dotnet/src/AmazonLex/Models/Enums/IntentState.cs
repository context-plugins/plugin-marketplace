using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The state of the intent that the utterance is associated to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntentState>))]
public sealed record IntentState : OpenStringEnum<IntentState>
{
    private IntentState(string value) : base(value)
    {
    }

    public static readonly IntentState Failed = new("Failed");

    public static readonly IntentState Fulfilled = new("Fulfilled");

    public static readonly IntentState InProgress = new("InProgress");

    public static readonly IntentState ReadyForFulfillment = new("ReadyForFulfillment");

    public static readonly IntentState Waiting = new("Waiting");

    public static readonly IntentState FulfillmentInProgress = new("FulfillmentInProgress");

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
