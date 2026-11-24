using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response to confirm the intent before fulfilling an intent. ElicitIntent - Amazon Lex wants to elicit the user's intent. ElicitSlot - Amazon Lex is expecting the value of a slot for the current intent. Failed - Conveys that the conversation with the user has failed. This can happen for various reasons, including the user does not provide an appropriate response to prompts from the service, or if the Lambda function fails to fulfill the intent. Fulfilled - Conveys that the Lambda function has sucessfully fulfilled the intent. ReadyForFulfi
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DialogState1>))]
public sealed record DialogState1 : OpenStringEnum<DialogState1>
{
    private DialogState1(string value) : base(value)
    {
    }

    public static readonly DialogState1 ElicitIntent = new("ElicitIntent");

    public static readonly DialogState1 ConfirmIntent = new("ConfirmIntent");

    public static readonly DialogState1 ElicitSlot = new("ElicitSlot");

    public static readonly DialogState1 Fulfilled = new("Fulfilled");

    public static readonly DialogState1 ReadyForFulfillment = new("ReadyForFulfillment");

    public static readonly DialogState1 Failed = new("Failed");

    public TResult Match<TResult>(Func<TResult> onElicitIntent,
        Func<TResult> onConfirmIntent,
        Func<TResult> onElicitSlot,
        Func<TResult> onFulfilled,
        Func<TResult> onReadyForFulfillment,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ElicitIntent => onElicitIntent(),
            _ when this == ConfirmIntent => onConfirmIntent(),
            _ when this == ElicitSlot => onElicitSlot(),
            _ when this == Fulfilled => onFulfilled(),
            _ when this == ReadyForFulfillment => onReadyForFulfillment(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onElicitIntent,
        Action onConfirmIntent,
        Action onElicitSlot,
        Action onFulfilled,
        Action onReadyForFulfillment,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == ElicitIntent) onElicitIntent();
        else if (this == ConfirmIntent) onConfirmIntent();
        else if (this == ElicitSlot) onElicitSlot();
        else if (this == Fulfilled) onFulfilled();
        else if (this == ReadyForFulfillment) onReadyForFulfillment();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
