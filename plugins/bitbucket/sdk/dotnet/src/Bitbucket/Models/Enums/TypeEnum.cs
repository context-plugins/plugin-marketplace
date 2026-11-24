using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The type of data contained in the value field. If not provided, then the value will be detected as a boolean, number or string.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Boolean = new("BOOLEAN");

    public static readonly TypeEnum Date = new("DATE");

    public static readonly TypeEnum Duration = new("DURATION");

    public static readonly TypeEnum Link = new("LINK");

    public static readonly TypeEnum Number = new("NUMBER");

    public static readonly TypeEnum Percentage = new("PERCENTAGE");

    public static readonly TypeEnum Text = new("TEXT");

    public TResult Match<TResult>(Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onDuration,
        Func<TResult> onLink,
        Func<TResult> onNumber,
        Func<TResult> onPercentage,
        Func<TResult> onText,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == Duration => onDuration(),
            _ when this == Link => onLink(),
            _ when this == Number => onNumber(),
            _ when this == Percentage => onPercentage(),
            _ when this == Text => onText(),
            _ => otherwise(Value)
        };

    public void Match(Action onBoolean,
        Action onDate,
        Action onDuration,
        Action onLink,
        Action onNumber,
        Action onPercentage,
        Action onText,
        Action<string> otherwise)
    {
        if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == Duration) onDuration();
        else if (this == Link) onLink();
        else if (this == Number) onNumber();
        else if (this == Percentage) onPercentage();
        else if (this == Text) onText();
        else otherwise(Value);
    }
}
