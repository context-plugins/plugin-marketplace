using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of value being stored in the custom field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomFieldType>))]
public sealed record CustomFieldType : OpenStringEnum<CustomFieldType>
{
    private CustomFieldType(string value) : base(value)
    {
    }

    public static readonly CustomFieldType String = new("string");

    public static readonly CustomFieldType Integer = new("integer");

    public static readonly CustomFieldType Boolean = new("boolean");

    public static readonly CustomFieldType Date = new("date");

    public static readonly CustomFieldType Datetime = new("datetime");

    public static readonly CustomFieldType List = new("list");

    public static readonly CustomFieldType Double = new("double");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onInteger,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onDatetime,
        Func<TResult> onList,
        Func<TResult> onDouble,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Integer => onInteger(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == Datetime => onDatetime(),
            _ when this == List => onList(),
            _ when this == Double => onDouble(),
            _ => otherwise(Value)
        };

    public void Match(Action onString,
        Action onInteger,
        Action onBoolean,
        Action onDate,
        Action onDatetime,
        Action onList,
        Action onDouble,
        Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Integer) onInteger();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == Datetime) onDatetime();
        else if (this == List) onList();
        else if (this == Double) onDouble();
        else otherwise(Value);
    }
}
