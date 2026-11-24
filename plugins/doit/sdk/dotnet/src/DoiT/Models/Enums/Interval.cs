using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Bucket interval used for the trend series.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Interval>))]
public sealed record Interval : OpenStringEnum<Interval>
{
    private Interval(string value) : base(value)
    {
    }

    public static readonly Interval Day = new("day");

    public static readonly Interval Week = new("week");

    public static readonly Interval Month = new("month");

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
