using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SplitBy>))]
public sealed record SplitBy : OpenStringEnum<SplitBy>
{
    private SplitBy(string value) : base(value)
    {
    }

    public static readonly SplitBy Hour = new("hour");

    public static readonly SplitBy Day = new("day");

    public static readonly SplitBy Week = new("week");

    public static readonly SplitBy Month = new("month");

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
