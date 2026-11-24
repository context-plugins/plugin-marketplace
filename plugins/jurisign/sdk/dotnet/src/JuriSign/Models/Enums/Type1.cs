using System;
using System.Text.Json.Serialization;
using JuriSign.Core.Enum;

namespace JuriSign.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Signature = new("signature");

    public static readonly Type1 Text = new("text");

    public static readonly Type1 Date = new("date");

    public static readonly Type1 Checkbox = new("checkbox");

    public TResult Match<TResult>(Func<TResult> onSignature,
        Func<TResult> onText,
        Func<TResult> onDate,
        Func<TResult> onCheckbox,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Signature => onSignature(),
            _ when this == Text => onText(),
            _ when this == Date => onDate(),
            _ when this == Checkbox => onCheckbox(),
            _ => otherwise(Value)
        };

    public void Match(Action onSignature, Action onText, Action onDate, Action onCheckbox, Action<string> otherwise)
    {
        if (this == Signature) onSignature();
        else if (this == Text) onText();
        else if (this == Date) onDate();
        else if (this == Checkbox) onCheckbox();
        else otherwise(Value);
    }
}
