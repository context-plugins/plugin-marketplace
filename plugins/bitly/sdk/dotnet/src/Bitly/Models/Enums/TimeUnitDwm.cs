using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// the unit of time queried for (day, week, month)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeUnitDwm>))]
public sealed record TimeUnitDwm : OpenStringEnum<TimeUnitDwm>
{
    private TimeUnitDwm(string value) : base(value)
    {
    }

    public static readonly TimeUnitDwm Day = new("day");

    public static readonly TimeUnitDwm Week = new("week");

    public static readonly TimeUnitDwm Month = new("month");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onWeek, Action onMonth, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
