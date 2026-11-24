using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TimeRange>))]
public sealed record TimeRange : OpenStringEnum<TimeRange>
{
    private TimeRange(string value) : base(value)
    {
    }

    public static readonly TimeRange Day = new("day");

    public static readonly TimeRange Week = new("week");

    public static readonly TimeRange Month = new("month");

    public static readonly TimeRange Year = new("year");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onMonth,
        Func<TResult> onYear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ when this == Year => onYear(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onWeek, Action onMonth, Action onYear, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else if (this == Year) onYear();
        else otherwise(Value);
    }
}
