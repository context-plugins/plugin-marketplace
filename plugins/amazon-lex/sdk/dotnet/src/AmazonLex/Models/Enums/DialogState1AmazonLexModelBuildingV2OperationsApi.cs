using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Identifies the current state of the user interaction. Amazon Lex returns one of the following values as dialogState. The client can optionally use this information to customize the user interface. ElicitIntent - Amazon Lex wants to elicit user intent. For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialogState. ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response. For example, Amazon Lex wants user confirmation before fulfilling an intent. Instead of a simple "yes" or "no," a
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DialogState1AmazonLexModelBuildingV2OperationsApi>))]
public sealed record DialogState1AmazonLexModelBuildingV2OperationsApi : OpenStringEnum<DialogState1AmazonLexModelBuildingV2OperationsApi>
{
    private DialogState1AmazonLexModelBuildingV2OperationsApi(string value) : base(value)
    {
    }

    public static readonly DialogState1AmazonLexModelBuildingV2OperationsApi ElicitIntent = new("ElicitIntent");

    public static readonly DialogState1AmazonLexModelBuildingV2OperationsApi ConfirmIntent = new("ConfirmIntent");

    public static readonly DialogState1AmazonLexModelBuildingV2OperationsApi ElicitSlot = new("ElicitSlot");

    public static readonly DialogState1AmazonLexModelBuildingV2OperationsApi Fulfilled = new("Fulfilled");

    public static readonly DialogState1AmazonLexModelBuildingV2OperationsApi ReadyForFulfillment = new(
        "ReadyForFulfillment");

    public static readonly DialogState1AmazonLexModelBuildingV2OperationsApi Failed = new("Failed");

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
