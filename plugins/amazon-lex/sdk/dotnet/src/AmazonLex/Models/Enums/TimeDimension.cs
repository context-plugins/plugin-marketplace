using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The type of time period that the timeValue field represents.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeDimension>))]
public sealed record TimeDimension : OpenStringEnum<TimeDimension>
{
    private TimeDimension(string value) : base(value)
    {
    }

    public static readonly TimeDimension Hours = new("Hours");

    public static readonly TimeDimension Days = new("Days");

    public static readonly TimeDimension Weeks = new("Weeks");

    public TResult Match<TResult>(Func<TResult> onHours,
        Func<TResult> onDays,
        Func<TResult> onWeeks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Hours => onHours(),
            _ when this == Days => onDays(),
            _ when this == Weeks => onWeeks(),
            _ => otherwise(Value)
        };

    public void Match(Action onHours, Action onDays, Action onWeeks, Action<string> otherwise)
    {
        if (this == Hours) onHours();
        else if (this == Days) onDays();
        else if (this == Weeks) onWeeks();
        else otherwise(Value);
    }
}
