using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Unit>))]
public sealed record Unit : OpenStringEnum<Unit>
{
    private Unit(string value) : base(value)
    {
    }

    public static readonly Unit Minute = new("minute");

    public static readonly Unit Hour = new("hour");

    public static readonly Unit Day = new("day");

    public static readonly Unit Week = new("week");

    public static readonly Unit Month = new("month");

    public TResult Match<TResult>(Func<TResult> onMinute,
        Func<TResult> onHour,
        Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Minute => onMinute(),
            _ when this == Hour => onHour(),
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onMinute,
        Action onHour,
        Action onDay,
        Action onWeek,
        Action onMonth,
        Action<string> otherwise)
    {
        if (this == Minute) onMinute();
        else if (this == Hour) onHour();
        else if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
