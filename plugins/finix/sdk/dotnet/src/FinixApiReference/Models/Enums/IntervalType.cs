using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The unit of time for the trial period.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IntervalType>))]
public sealed record IntervalType : OpenStringEnum<IntervalType>
{
    private IntervalType(string value) : base(value)
    {
    }

    public static readonly IntervalType Day = new("DAY");

    public static readonly IntervalType Week = new("WEEK");

    public static readonly IntervalType Month = new("MONTH");

    public static readonly IntervalType Year = new("YEAR");

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
