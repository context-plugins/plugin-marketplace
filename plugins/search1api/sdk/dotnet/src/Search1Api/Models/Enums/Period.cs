using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Period>))]
public sealed record Period : OpenStringEnum<Period>
{
    private Period(string value) : base(value)
    {
    }

    public static readonly Period Day = new("day");

    public static readonly Period Week = new("week");

    public static readonly Period Month = new("month");

    public static readonly Period Year = new("year");

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
