using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The summary statistic that you requested to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of utterances in the category you provide in name. Max – The highest count in the category you provide in name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Statistic7>))]
public sealed record Statistic7 : OpenStringEnum<Statistic7>
{
    private Statistic7(string value) : base(value)
    {
    }

    public static readonly Statistic7 Sum = new("Sum");

    public static readonly Statistic7 Avg = new("Avg");

    public static readonly Statistic7 Max = new("Max");

    public TResult Match<TResult>(Func<TResult> onSum,
        Func<TResult> onAvg,
        Func<TResult> onMax,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sum => onSum(),
            _ when this == Avg => onAvg(),
            _ when this == Max => onMax(),
            _ => otherwise(Value)
        };

    public void Match(Action onSum, Action onAvg, Action onMax, Action<string> otherwise)
    {
        if (this == Sum) onSum();
        else if (this == Avg) onAvg();
        else if (this == Max) onMax();
        else otherwise(Value);
    }
}
