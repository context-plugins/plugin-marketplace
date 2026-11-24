using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The unit of time for the gift duration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ComplimentaryAccessTimeUnit2>))]
public sealed record ComplimentaryAccessTimeUnit2 : OpenStringEnum<ComplimentaryAccessTimeUnit2>
{
    private ComplimentaryAccessTimeUnit2(string value) : base(value)
    {
    }

    public static readonly ComplimentaryAccessTimeUnit2 Days = new("days");

    public static readonly ComplimentaryAccessTimeUnit2 Months = new("months");

    public static readonly ComplimentaryAccessTimeUnit2 Years = new("years");

    public static readonly ComplimentaryAccessTimeUnit2 Forever = new("forever");

    public TResult Match<TResult>(Func<TResult> onDays,
        Func<TResult> onMonths,
        Func<TResult> onYears,
        Func<TResult> onForever,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Days => onDays(),
            _ when this == Months => onMonths(),
            _ when this == Years => onYears(),
            _ when this == Forever => onForever(),
            _ => otherwise(Value)
        };

    public void Match(Action onDays, Action onMonths, Action onYears, Action onForever, Action<string> otherwise)
    {
        if (this == Days) onDays();
        else if (this == Months) onMonths();
        else if (this == Years) onYears();
        else if (this == Forever) onForever();
        else otherwise(Value);
    }
}
