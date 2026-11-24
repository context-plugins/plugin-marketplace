using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Day>))]
public sealed record Day : OpenStringEnum<Day>
{
    private Day(string value) : base(value)
    {
    }

    public static readonly Day DayOfWeekUnspecified = new("DAY_OF_WEEK_UNSPECIFIED");

    public static readonly Day Monday = new("MONDAY");

    public static readonly Day Tuesday = new("TUESDAY");

    public static readonly Day Wednesday = new("WEDNESDAY");

    public static readonly Day Thursday = new("THURSDAY");

    public static readonly Day Friday = new("FRIDAY");

    public static readonly Day Saturday = new("SATURDAY");

    public static readonly Day Sunday = new("SUNDAY");

    public TResult Match<TResult>(Func<TResult> onDayOfWeekUnspecified,
        Func<TResult> onMonday,
        Func<TResult> onTuesday,
        Func<TResult> onWednesday,
        Func<TResult> onThursday,
        Func<TResult> onFriday,
        Func<TResult> onSaturday,
        Func<TResult> onSunday,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DayOfWeekUnspecified => onDayOfWeekUnspecified(),
            _ when this == Monday => onMonday(),
            _ when this == Tuesday => onTuesday(),
            _ when this == Wednesday => onWednesday(),
            _ when this == Thursday => onThursday(),
            _ when this == Friday => onFriday(),
            _ when this == Saturday => onSaturday(),
            _ when this == Sunday => onSunday(),
            _ => otherwise(Value)
        };

    public void Match(Action onDayOfWeekUnspecified,
        Action onMonday,
        Action onTuesday,
        Action onWednesday,
        Action onThursday,
        Action onFriday,
        Action onSaturday,
        Action onSunday,
        Action<string> otherwise)
    {
        if (this == DayOfWeekUnspecified) onDayOfWeekUnspecified();
        else if (this == Monday) onMonday();
        else if (this == Tuesday) onTuesday();
        else if (this == Wednesday) onWednesday();
        else if (this == Thursday) onThursday();
        else if (this == Friday) onFriday();
        else if (this == Saturday) onSaturday();
        else if (this == Sunday) onSunday();
        else otherwise(Value);
    }
}
