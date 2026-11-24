using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Period>))]
public sealed record Period : OpenStringEnum<Period>
{
    private Period(string value) : base(value)
    {
    }

    public static readonly Period Day = new("day");

    public static readonly Period Hour = new("hour");

    public static readonly Period Month = new("month");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onHour,
        Func<TResult> onMonth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Hour => onHour(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onHour, Action onMonth, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Hour) onHour();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
