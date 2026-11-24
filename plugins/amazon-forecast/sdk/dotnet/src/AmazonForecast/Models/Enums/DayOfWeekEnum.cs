using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The day of week to use for time alignment during aggregation. The day must be in uppercase.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DayOfWeekEnum>))]
public sealed record DayOfWeekEnum : OpenStringEnum<DayOfWeekEnum>
{
    private DayOfWeekEnum(string value) : base(value)
    {
    }

    public static readonly DayOfWeekEnum Monday = new("MONDAY");

    public static readonly DayOfWeekEnum Tuesday = new("TUESDAY");

    public static readonly DayOfWeekEnum Wednesday = new("WEDNESDAY");

    public static readonly DayOfWeekEnum Thursday = new("THURSDAY");

    public static readonly DayOfWeekEnum Friday = new("FRIDAY");

    public static readonly DayOfWeekEnum Saturday = new("SATURDAY");

    public static readonly DayOfWeekEnum Sunday = new("SUNDAY");

    public TResult Match<TResult>(Func<TResult> onMonday,
        Func<TResult> onTuesday,
        Func<TResult> onWednesday,
        Func<TResult> onThursday,
        Func<TResult> onFriday,
        Func<TResult> onSaturday,
        Func<TResult> onSunday,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monday => onMonday(),
            _ when this == Tuesday => onTuesday(),
            _ when this == Wednesday => onWednesday(),
            _ when this == Thursday => onThursday(),
            _ when this == Friday => onFriday(),
            _ when this == Saturday => onSaturday(),
            _ when this == Sunday => onSunday(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonday,
        Action onTuesday,
        Action onWednesday,
        Action onThursday,
        Action onFriday,
        Action onSaturday,
        Action onSunday,
        Action<string> otherwise)
    {
        if (this == Monday) onMonday();
        else if (this == Tuesday) onTuesday();
        else if (this == Wednesday) onWednesday();
        else if (this == Thursday) onThursday();
        else if (this == Friday) onFriday();
        else if (this == Saturday) onSaturday();
        else if (this == Sunday) onSunday();
        else otherwise(Value);
    }
}
