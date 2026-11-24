using System;
using System.Text.Json.Serialization;
using S1.Core.Enum;

namespace S1.Models.Enums;

/// <summary>
/// Publication window applied, or null for none.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeRange1>))]
public sealed record TimeRange1 : OpenStringEnum<TimeRange1>
{
    private TimeRange1(string value) : base(value)
    {
    }

    public static readonly TimeRange1 Day = new("day");

    public static readonly TimeRange1 Week = new("week");

    public static readonly TimeRange1 Month = new("month");

    public static readonly TimeRange1 Year = new("year");

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
