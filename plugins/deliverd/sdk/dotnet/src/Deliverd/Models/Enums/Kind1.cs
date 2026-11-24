using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Kind1>))]
public sealed record Kind1 : OpenStringEnum<Kind1>
{
    private Kind1(string value) : base(value)
    {
    }

    public static readonly Kind1 Text = new("text");

    public static readonly Kind1 LongText = new("long_text");

    public static readonly Kind1 Number = new("number");

    public static readonly Kind1 Date = new("date");

    public static readonly Kind1 Choice = new("choice");

    public static readonly Kind1 MultiChoice = new("multi_choice");

    public static readonly Kind1 Boolean = new("boolean");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onLongText,
        Func<TResult> onNumber,
        Func<TResult> onDate,
        Func<TResult> onChoice,
        Func<TResult> onMultiChoice,
        Func<TResult> onBoolean,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == LongText => onLongText(),
            _ when this == Number => onNumber(),
            _ when this == Date => onDate(),
            _ when this == Choice => onChoice(),
            _ when this == MultiChoice => onMultiChoice(),
            _ when this == Boolean => onBoolean(),
            _ => otherwise(Value)
        };

    public void Match(Action onText,
        Action onLongText,
        Action onNumber,
        Action onDate,
        Action onChoice,
        Action onMultiChoice,
        Action onBoolean,
        Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == LongText) onLongText();
        else if (this == Number) onNumber();
        else if (this == Date) onDate();
        else if (this == Choice) onChoice();
        else if (this == MultiChoice) onMultiChoice();
        else if (this == Boolean) onBoolean();
        else otherwise(Value);
    }
}
