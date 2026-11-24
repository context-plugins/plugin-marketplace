using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The type of the custom field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CustomFieldKind>))]
public sealed record CustomFieldKind : OpenStringEnum<CustomFieldKind>
{
    private CustomFieldKind(string value) : base(value)
    {
    }

    public static readonly CustomFieldKind String = new("string");

    public static readonly CustomFieldKind Integer = new("integer");

    public static readonly CustomFieldKind Number = new("number");

    public static readonly CustomFieldKind Boolean = new("boolean");

    public static readonly CustomFieldKind Date = new("date");

    public static readonly CustomFieldKind Datetime = new("datetime");

    public static readonly CustomFieldKind List = new("list");

    public TResult Match<TResult>(Func<TResult> onString,
        Func<TResult> onInteger,
        Func<TResult> onNumber,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onDatetime,
        Func<TResult> onList,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == String => onString(),
            _ when this == Integer => onInteger(),
            _ when this == Number => onNumber(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == Datetime => onDatetime(),
            _ when this == List => onList(),
            _ => otherwise(Value)
        };

    public void Match(Action onString,
        Action onInteger,
        Action onNumber,
        Action onBoolean,
        Action onDate,
        Action onDatetime,
        Action onList,
        Action<string> otherwise)
    {
        if (this == String) onString();
        else if (this == Integer) onInteger();
        else if (this == Number) onNumber();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == Datetime) onDatetime();
        else if (this == List) onList();
        else otherwise(Value);
    }
}
