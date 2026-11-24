using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The next action that the bot should take in its interaction with the user. The possible values are: ConfirmIntent - The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?" Close - Indicates that the there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response. ElicitIntent - The next action is to determine the intent that the user wants to fulfill. ElicitSlot - The next action is to elicit a slot value from the user.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DialogActionType>))]
public sealed record DialogActionType : OpenStringEnum<DialogActionType>
{
    private DialogActionType(string value) : base(value)
    {
    }

    public static readonly DialogActionType ElicitIntent = new("ElicitIntent");

    public static readonly DialogActionType ConfirmIntent = new("ConfirmIntent");

    public static readonly DialogActionType ElicitSlot = new("ElicitSlot");

    public static readonly DialogActionType Close = new("Close");

    public static readonly DialogActionType Delegate = new("Delegate");

    public TResult Match<TResult>(Func<TResult> onElicitIntent,
        Func<TResult> onConfirmIntent,
        Func<TResult> onElicitSlot,
        Func<TResult> onClose,
        Func<TResult> onDelegate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ElicitIntent => onElicitIntent(),
            _ when this == ConfirmIntent => onConfirmIntent(),
            _ when this == ElicitSlot => onElicitSlot(),
            _ when this == Close => onClose(),
            _ when this == Delegate => onDelegate(),
            _ => otherwise(Value)
        };

    public void Match(Action onElicitIntent,
        Action onConfirmIntent,
        Action onElicitSlot,
        Action onClose,
        Action onDelegate,
        Action<string> otherwise)
    {
        if (this == ElicitIntent) onElicitIntent();
        else if (this == ConfirmIntent) onConfirmIntent();
        else if (this == ElicitSlot) onElicitSlot();
        else if (this == Close) onClose();
        else if (this == Delegate) onDelegate();
        else otherwise(Value);
    }
}
