using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// the unit of time queried for (minute, hour, day, week, month)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeUnit>))]
public sealed record TimeUnit : OpenStringEnum<TimeUnit>
{
    private TimeUnit(string value) : base(value)
    {
    }

    public static readonly TimeUnit Minute = new("minute");

    public static readonly TimeUnit Hour = new("hour");

    public static readonly TimeUnit Day = new("day");

    public static readonly TimeUnit Week = new("week");

    public static readonly TimeUnit Month = new("month");

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
