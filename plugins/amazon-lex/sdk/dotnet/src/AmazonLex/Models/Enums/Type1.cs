using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The next action that the bot should take in its interaction with the user. The following values are possible: Close – Indicates that there will not be a response from the user. For example, the statement "Your order has been placed" does not require a response. ConfirmIntent – The next action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no question such as "Place the order?" Delegate – The next action is determined by Amazon Lex V2. ElicitIntent – The next action is to elicit an intent from the user. ElicitSlot – The next action is to elicit a slot valu
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Close = new("Close");

    public static readonly Type1 ConfirmIntent = new("ConfirmIntent");

    public static readonly Type1 Delegate = new("Delegate");

    public static readonly Type1 ElicitIntent = new("ElicitIntent");

    public static readonly Type1 ElicitSlot = new("ElicitSlot");

    public static readonly Type1 None = new("None");

    public TResult Match<TResult>(Func<TResult> onClose,
        Func<TResult> onConfirmIntent,
        Func<TResult> onDelegate,
        Func<TResult> onElicitIntent,
        Func<TResult> onElicitSlot,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Close => onClose(),
            _ when this == ConfirmIntent => onConfirmIntent(),
            _ when this == Delegate => onDelegate(),
            _ when this == ElicitIntent => onElicitIntent(),
            _ when this == ElicitSlot => onElicitSlot(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onClose,
        Action onConfirmIntent,
        Action onDelegate,
        Action onElicitIntent,
        Action onElicitSlot,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Close) onClose();
        else if (this == ConfirmIntent) onConfirmIntent();
        else if (this == Delegate) onDelegate();
        else if (this == ElicitIntent) onElicitIntent();
        else if (this == ElicitSlot) onElicitSlot();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
