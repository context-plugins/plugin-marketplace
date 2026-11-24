using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The fulfillment state of the intent. The possible values are: Failed - The Lambda function associated with the intent failed to fulfill the intent. Fulfilled - The intent has fulfilled by the Lambda function associated with the intent. ReadyForFulfillment - All of the information necessary for the intent is present and the intent ready to be fulfilled by the client application.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FulfillmentState>))]
public sealed record FulfillmentState : OpenStringEnum<FulfillmentState>
{
    private FulfillmentState(string value) : base(value)
    {
    }

    public static readonly FulfillmentState Fulfilled = new("Fulfilled");

    public static readonly FulfillmentState Failed = new("Failed");

    public static readonly FulfillmentState ReadyForFulfillment = new("ReadyForFulfillment");

    public TResult Match<TResult>(Func<TResult> onFulfilled,
        Func<TResult> onFailed,
        Func<TResult> onReadyForFulfillment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fulfilled => onFulfilled(),
            _ when this == Failed => onFailed(),
            _ when this == ReadyForFulfillment => onReadyForFulfillment(),
            _ => otherwise(Value)
        };

    public void Match(Action onFulfilled, Action onFailed, Action onReadyForFulfillment, Action<string> otherwise)
    {
        if (this == Fulfilled) onFulfilled();
        else if (this == Failed) onFailed();
        else if (this == ReadyForFulfillment) onReadyForFulfillment();
        else otherwise(Value);
    }
}
