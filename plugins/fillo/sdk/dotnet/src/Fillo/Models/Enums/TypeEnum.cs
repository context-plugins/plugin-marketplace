using System;
using System.Text.Json.Serialization;
using Fillo.Core.Enum;

namespace Fillo.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum String = new("string");

    public static readonly TypeEnum Number = new("number");

    public static readonly TypeEnum Date = new("date");

    public static readonly TypeEnum Datetime = new("datetime");

    public static readonly TypeEnum Enumeration = new("enumeration");

    public static readonly TypeEnum Bool = new("bool");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onNumber,
        Func<TResult> onDate,
        Func<TResult> onDatetime,
        Func<TResult> onEnumeration,
        Func<TResult> onBool,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Number => onNumber(),
            _ when this == Date => onDate(),
            _ when this == Datetime => onDatetime(),
            _ when this == Enumeration => onEnumeration(),
            _ when this == Bool => onBool(),
            _ => otherwise(Value)
        };

    public void Match(Action onString,
        Action onNumber,
        Action onDate,
        Action onDatetime,
        Action onEnumeration,
        Action onBool,
        Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Number) onNumber();
        else if (this == Date) onDate();
        else if (this == Datetime) onDatetime();
        else if (this == Enumeration) onEnumeration();
        else if (this == Bool) onBool();
        else otherwise(Value);
    }
}
