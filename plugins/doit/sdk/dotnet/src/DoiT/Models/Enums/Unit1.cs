using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Time interval unit for shifting.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Unit1>))]
public sealed record Unit1 : OpenStringEnum<Unit1>
{
    private Unit1(string value) : base(value)
    {
    }

    public static readonly Unit1 Day = new("day");

    public static readonly Unit1 Month = new("month");

    public static readonly Unit1 Quarter = new("quarter");

    public static readonly Unit1 Year = new("year");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onMonth,
        Func<TResult> onQuarter,
        Func<TResult> onYear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Month => onMonth(),
            _ when this == Quarter => onQuarter(),
            _ when this == Year => onYear(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay, Action onMonth, Action onQuarter, Action onYear, Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Month) onMonth();
        else if (this == Quarter) onQuarter();
        else if (this == Year) onYear();
        else otherwise(Value);
    }
}
