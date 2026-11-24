using System;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Enum;

namespace AmazonForecast.Models.Enums;

/// <summary>
/// The month to use for time alignment during aggregation. The month must be in uppercase.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Month>))]
public sealed record Month : OpenStringEnum<Month>
{
    private Month(string value) : base(value)
    {
    }

    public static readonly Month January = new("JANUARY");

    public static readonly Month February = new("FEBRUARY");

    public static readonly Month March = new("MARCH");

    public static readonly Month April = new("APRIL");

    public static readonly Month May = new("MAY");

    public static readonly Month June = new("JUNE");

    public static readonly Month July = new("JULY");

    public static readonly Month August = new("AUGUST");

    public static readonly Month September = new("SEPTEMBER");

    public static readonly Month October = new("OCTOBER");

    public static readonly Month November = new("NOVEMBER");

    public static readonly Month December = new("DECEMBER");

    public TResult Match<TResult>(Func<TResult> onJanuary,
        Func<TResult> onFebruary,
        Func<TResult> onMarch,
        Func<TResult> onApril,
        Func<TResult> onMay,
        Func<TResult> onJune,
        Func<TResult> onJuly,
        Func<TResult> onAugust,
        Func<TResult> onSeptember,
        Func<TResult> onOctober,
        Func<TResult> onNovember,
        Func<TResult> onDecember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == January => onJanuary(),
            _ when this == February => onFebruary(),
            _ when this == March => onMarch(),
            _ when this == April => onApril(),
            _ when this == May => onMay(),
            _ when this == June => onJune(),
            _ when this == July => onJuly(),
            _ when this == August => onAugust(),
            _ when this == September => onSeptember(),
            _ when this == October => onOctober(),
            _ when this == November => onNovember(),
            _ when this == December => onDecember(),
            _ => otherwise(Value)
        };

    public void Match(Action onJanuary,
        Action onFebruary,
        Action onMarch,
        Action onApril,
        Action onMay,
        Action onJune,
        Action onJuly,
        Action onAugust,
        Action onSeptember,
        Action onOctober,
        Action onNovember,
        Action onDecember,
        Action<string> otherwise)
    {
        if (this == January) onJanuary();
        else if (this == February) onFebruary();
        else if (this == March) onMarch();
        else if (this == April) onApril();
        else if (this == May) onMay();
        else if (this == June) onJune();
        else if (this == July) onJuly();
        else if (this == August) onAugust();
        else if (this == September) onSeptember();
        else if (this == October) onOctober();
        else if (this == November) onNovember();
        else if (this == December) onDecember();
        else otherwise(Value);
    }
}
