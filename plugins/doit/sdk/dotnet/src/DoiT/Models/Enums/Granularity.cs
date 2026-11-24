using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Granularity>))]
public sealed record Granularity : OpenStringEnum<Granularity>
{
    private Granularity(string value) : base(value)
    {
    }

    public static readonly Granularity Hour = new("hour");

    public static readonly Granularity Day = new("day");

    public static readonly Granularity Week = new("week");

    public static readonly Granularity Month = new("month");

    public TResult Match<TResult>(Func<TResult> onHour,
        Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hour => onHour(),
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onHour, Action onDay, Action onWeek, Action onMonth, Action<string> otherwise)
    {
        if (this == Hour) onHour();
        else if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
