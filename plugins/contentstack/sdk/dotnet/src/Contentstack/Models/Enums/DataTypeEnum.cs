using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Data type of the attribute.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DataTypeEnum>))]
public sealed record DataTypeEnum : OpenStringEnum<DataTypeEnum>
{
    private DataTypeEnum(string value) : base(value)
    {
    }

    public static readonly DataTypeEnum String = new("string");

    public static readonly DataTypeEnum Number = new("number");

    public static readonly DataTypeEnum Boolean = new("boolean");

    public static readonly DataTypeEnum Date = new("date");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onNumber,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Number => onNumber(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onString, Action onNumber, Action onBoolean, Action onDate, Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Number) onNumber();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else otherwise(Value);
    }
}
