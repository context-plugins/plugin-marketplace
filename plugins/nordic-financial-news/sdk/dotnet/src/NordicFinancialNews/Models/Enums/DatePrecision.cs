using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Granularity of <c>scheduled_at</c>. <c>exact</c> = timestamp known; <c>day</c> = date only; <c>month</c> = only the month is known. Consumers that need a date should still use <c>scheduled_at</c> (set to a representative point inside the window).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DatePrecision>))]
public sealed record DatePrecision : OpenStringEnum<DatePrecision>
{
    private DatePrecision(string value) : base(value)
    {
    }

    public static readonly DatePrecision Exact = new("exact");

    public static readonly DatePrecision Day = new("day");

    public static readonly DatePrecision Month = new("month");

    public TResult Match<TResult>(Func<TResult> onExact,
        Func<TResult> onDay,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Exact => onExact(),
            _ when this == Day => onDay(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onExact, Action onDay, Action onMonth, Action<string> otherwise)
    {
        if (this == Exact) onExact();
        else if (this == Day) onDay();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
