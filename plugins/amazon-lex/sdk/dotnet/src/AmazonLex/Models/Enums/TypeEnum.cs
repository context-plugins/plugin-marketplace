using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The action that the bot should execute.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum ElicitIntent = new("ElicitIntent");

    public static readonly TypeEnum StartIntent = new("StartIntent");

    public static readonly TypeEnum ElicitSlot = new("ElicitSlot");

    public static readonly TypeEnum EvaluateConditional = new("EvaluateConditional");

    public static readonly TypeEnum InvokeDialogCodeHook = new("InvokeDialogCodeHook");

    public static readonly TypeEnum ConfirmIntent = new("ConfirmIntent");

    public static readonly TypeEnum FulfillIntent = new("FulfillIntent");

    public static readonly TypeEnum CloseIntent = new("CloseIntent");

    public static readonly TypeEnum EndConversation = new("EndConversation");

    public TResult Match<TResult>(Func<TResult> onElicitIntent,
        Func<TResult> onStartIntent,
        Func<TResult> onElicitSlot,
        Func<TResult> onEvaluateConditional,
        Func<TResult> onInvokeDialogCodeHook,
        Func<TResult> onConfirmIntent,
        Func<TResult> onFulfillIntent,
        Func<TResult> onCloseIntent,
        Func<TResult> onEndConversation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ElicitIntent => onElicitIntent(),
            _ when this == StartIntent => onStartIntent(),
            _ when this == ElicitSlot => onElicitSlot(),
            _ when this == EvaluateConditional => onEvaluateConditional(),
            _ when this == InvokeDialogCodeHook => onInvokeDialogCodeHook(),
            _ when this == ConfirmIntent => onConfirmIntent(),
            _ when this == FulfillIntent => onFulfillIntent(),
            _ when this == CloseIntent => onCloseIntent(),
            _ when this == EndConversation => onEndConversation(),
            _ => otherwise(Value)
        };

    public void Match(Action onElicitIntent,
        Action onStartIntent,
        Action onElicitSlot,
        Action onEvaluateConditional,
        Action onInvokeDialogCodeHook,
        Action onConfirmIntent,
        Action onFulfillIntent,
        Action onCloseIntent,
        Action onEndConversation,
        Action<string> otherwise)
    {
        if (this == ElicitIntent) onElicitIntent();
        else if (this == StartIntent) onStartIntent();
        else if (this == ElicitSlot) onElicitSlot();
        else if (this == EvaluateConditional) onEvaluateConditional();
        else if (this == InvokeDialogCodeHook) onInvokeDialogCodeHook();
        else if (this == ConfirmIntent) onConfirmIntent();
        else if (this == FulfillIntent) onFulfillIntent();
        else if (this == CloseIntent) onCloseIntent();
        else if (this == EndConversation) onEndConversation();
        else otherwise(Value);
    }
}
