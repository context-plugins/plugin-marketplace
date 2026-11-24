using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IntervalUnit>))]
public sealed record IntervalUnit : OpenStringEnum<IntervalUnit>
{
    private IntervalUnit(string value) : base(value)
    {
    }

    public static readonly IntervalUnit Minute = new("minute");

    public static readonly IntervalUnit Hour = new("hour");

    public static readonly IntervalUnit Day = new("day");

    public static readonly IntervalUnit Week = new("week");

    public TResult Match<TResult>(Func<TResult> onMinute,
        Func<TResult> onHour,
        Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Minute => onMinute(),
            _ when this == Hour => onHour(),
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ => otherwise(Value)
        };

    public void Match(Action onMinute, Action onHour, Action onDay, Action onWeek, Action<string> otherwise)
    {
        if (this == Minute) onMinute();
        else if (this == Hour) onHour();
        else if (this == Day) onDay();
        else if (this == Week) onWeek();
        else otherwise(Value);
    }
}
