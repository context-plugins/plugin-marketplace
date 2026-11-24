using System;
using System.Text.Json.Serialization;
using Instagram.Core.Enum;

namespace Instagram.Models.Enums;

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

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onDays28,
        Func<TResult> onMonth,
        Func<TResult> onLifetime,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Days28 => onDays28(),
            _ when this == Month => onMonth(),
            _ when this == Lifetime => onLifetime(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay,
        Action onWeek,
        Action onDays28,
        Action onMonth,
        Action onLifetime,
        Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Days28) onDays28();
        else if (this == Month) onMonth();
        else if (this == Lifetime) onLifetime();
        else otherwise(Value);
    }
}
