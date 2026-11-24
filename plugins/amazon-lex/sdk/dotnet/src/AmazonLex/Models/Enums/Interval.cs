using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies the interval of time by which to bin the analytics data.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Interval>))]
public sealed record Interval : OpenStringEnum<Interval>
{
    private Interval(string value) : base(value)
    {
    }

    public static readonly Interval OneHour = new("OneHour");

    public static readonly Interval OneDay = new("OneDay");

    public TResult Match<TResult>(Func<TResult> onOneHour, Func<TResult> onOneDay, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OneHour => onOneHour(),
            _ when this == OneDay => onOneDay(),
            _ => otherwise(Value)
        };

    public void Match(Action onOneHour, Action onOneDay, Action<string> otherwise)
    {
        if (this == OneHour) onOneHour();
        else if (this == OneDay) onOneDay();
        else otherwise(Value);
    }
}
