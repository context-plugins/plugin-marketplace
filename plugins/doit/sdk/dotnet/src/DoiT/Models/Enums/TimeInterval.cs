using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The period each evaluation looks at.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeInterval>))]
public sealed record TimeInterval : OpenStringEnum<TimeInterval>
{
    private TimeInterval(string value) : base(value)
    {
    }

    public static readonly TimeInterval Day = new("day");

    public static readonly TimeInterval Week = new("week");

    public static readonly TimeInterval Month = new("month");

    public static readonly TimeInterval Quarter = new("quarter");

    public static readonly TimeInterval Year = new("year");

    public TResult Match<TResult>(Func<TResult> onDay,
        Func<TResult> onWeek,
        Func<TResult> onMonth,
        Func<TResult> onQuarter,
        Func<TResult> onYear,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Day => onDay(),
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ when this == Quarter => onQuarter(),
            _ when this == Year => onYear(),
            _ => otherwise(Value)
        };

    public void Match(Action onDay,
        Action onWeek,
        Action onMonth,
        Action onQuarter,
        Action onYear,
        Action<string> otherwise)
    {
        if (this == Day) onDay();
        else if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else if (this == Quarter) onQuarter();
        else if (this == Year) onYear();
        else otherwise(Value);
    }
}
