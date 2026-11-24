using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What kind of answer: text, long_text, number, date, choice, multi_choice or boolean
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Text = new("text");

    public static readonly Kind LongText = new("long_text");

    public static readonly Kind Number = new("number");

    public static readonly Kind Date = new("date");

    public static readonly Kind Choice = new("choice");

    public static readonly Kind MultiChoice = new("multi_choice");

    public static readonly Kind Boolean = new("boolean");

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
