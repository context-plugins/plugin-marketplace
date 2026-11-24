using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The unit of time for the gift duration.&lt;br&gt;<c>days</c> - Duration in days.&lt;br&gt;<c>months</c> - Duration in months.&lt;br&gt;<c>years</c> - Duration in years.&lt;br&gt;<c>forever</c> - Lifetime access with no expiration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ComplimentaryAccessTimeUnit>))]
public sealed record ComplimentaryAccessTimeUnit : OpenStringEnum<ComplimentaryAccessTimeUnit>
{
    private ComplimentaryAccessTimeUnit(string value) : base(value)
    {
    }

    public static readonly ComplimentaryAccessTimeUnit Days = new("days");

    public static readonly ComplimentaryAccessTimeUnit Months = new("months");

    public static readonly ComplimentaryAccessTimeUnit Years = new("years");

    public static readonly ComplimentaryAccessTimeUnit Forever = new("forever");

    public TResult Match<TResult>(Func<TResult> onDays,
        Func<TResult> onMonths,
        Func<TResult> onYears,
        Func<TResult> onForever,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Days => onDays(),
            _ when this == Months => onMonths(),
            _ when this == Years => onYears(),
            _ when this == Forever => onForever(),
            _ => otherwise(Value)
        };

    public void Match(Action onDays, Action onMonths, Action onYears, Action onForever, Action<string> otherwise)
    {
        if (this == Days) onDays();
        else if (this == Months) onMonths();
        else if (this == Years) onYears();
        else if (this == Forever) onForever();
        else otherwise(Value);
    }
}
