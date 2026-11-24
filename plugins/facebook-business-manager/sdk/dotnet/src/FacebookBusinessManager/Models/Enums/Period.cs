using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Period>))]
public sealed record Period : OpenStringEnum<Period>
{
    private Period(string value) : base(value)
    {
    }

    public static readonly Period Day = new("day");

    public static readonly Period Week = new("week");

    public static readonly Period Days28 = new("days_28");

    public static readonly Period Month = new("month");

    public static readonly Period Lifetime = new("lifetime");

    public static readonly Period TotalOverRange = new("total_over_range");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onDays28,
        Func<TResult> onMonth,
        Func<TResult> onLifetime,
        Func<TResult> onTotalOverRange,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Days28 => onDays28(),
            _ when this == Month => onMonth(),
            _ when this == Lifetime => onLifetime(),
            _ when this == TotalOverRange => onTotalOverRange(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay,
        Action onWeek,
        Action onDays28,
        Action onMonth,
        Action onLifetime,
        Action onTotalOverRange,
        Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Days28) onDays28();
        else if (this == Month) onMonth();
        else if (this == Lifetime) onLifetime();
        else if (this == TotalOverRange) onTotalOverRange();
        else otherwise(Value);
    }
}
