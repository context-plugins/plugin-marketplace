using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ColumnTypeDto>))]
public sealed record ColumnTypeDto : OpenStringEnum<ColumnTypeDto>
{
    private ColumnTypeDto(string value) : base(value)
    {
    }

    public static readonly ColumnTypeDto Unknown = new("unknown");

    public static readonly ColumnTypeDto String = new("string");

    public static readonly ColumnTypeDto Integer = new("integer");

    public static readonly ColumnTypeDto Float = new("float");

    public static readonly ColumnTypeDto Time = new("time");

    public static readonly ColumnTypeDto Boolean = new("boolean");

    public static readonly ColumnTypeDto Date = new("date");

    public static readonly ColumnTypeDto DateTime = new("dateTime");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onString,
        Func<TResult> onInteger,
        Func<TResult> onFloat,
        Func<TResult> onTime,
        Func<TResult> onBoolean,
        Func<TResult> onDate,
        Func<TResult> onDateTime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == String => onString(),
            _ when this == Integer => onInteger(),
            _ when this == Float => onFloat(),
            _ when this == Time => onTime(),
            _ when this == Boolean => onBoolean(),
            _ when this == Date => onDate(),
            _ when this == DateTime => onDateTime(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown,
        Action onString,
        Action onInteger,
        Action onFloat,
        Action onTime,
        Action onBoolean,
        Action onDate,
        Action onDateTime,
        Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == String) onString();
        else if (this == Integer) onInteger();
        else if (this == Float) onFloat();
        else if (this == Time) onTime();
        else if (this == Boolean) onBoolean();
        else if (this == Date) onDate();
        else if (this == DateTime) onDateTime();
        else otherwise(Value);
    }
}
