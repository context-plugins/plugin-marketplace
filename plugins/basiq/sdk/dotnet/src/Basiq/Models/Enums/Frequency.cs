using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Enum detailing frequency regular income
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Frequency>))]
public sealed record Frequency : OpenStringEnum<Frequency>
{
    private Frequency(string value) : base(value)
    {
    }

    public static readonly Frequency Daily = new("daily");

    public static readonly Frequency Weekly = new("weekly");

    public static readonly Frequency BiWeekly = new("bi-weekly");

    public static readonly Frequency Monthly = new("monthly");

    public static readonly Frequency BiMonthly = new("bi-monthly");

    public static readonly Frequency Quarterly = new("quarterly");

    public static readonly Frequency HalfYear = new("half-year");

    public static readonly Frequency Yearly = new("yearly");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onBiWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onBiMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onHalfYear,
        Func<TResult> onYearly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == BiWeekly => onBiWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == BiMonthly => onBiMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == HalfYear => onHalfYear(),
            _ when this == Yearly => onYearly(),
            _ => otherwise(Value)
        };

    public void Match(Action onDaily,
        Action onWeekly,
        Action onBiWeekly,
        Action onMonthly,
        Action onBiMonthly,
        Action onQuarterly,
        Action onHalfYear,
        Action onYearly,
        Action<string> otherwise)
    {
        if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == BiWeekly) onBiWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == BiMonthly) onBiMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == HalfYear) onHalfYear();
        else if (this == Yearly) onYearly();
        else otherwise(Value);
    }
}
