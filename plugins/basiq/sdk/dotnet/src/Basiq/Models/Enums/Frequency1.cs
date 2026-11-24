using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Frequency is "other", "irregular" or a time period e.g. "bi-weekly"
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Frequency1>))]
public sealed record Frequency1 : OpenStringEnum<Frequency1>
{
    private Frequency1(string value) : base(value)
    {
    }

    public static readonly Frequency1 Daily = new("daily");

    public static readonly Frequency1 Weekly = new("weekly");

    public static readonly Frequency1 BiWeekly = new("bi-weekly");

    public static readonly Frequency1 Monthly = new("monthly");

    public static readonly Frequency1 BiMonthly = new("bi-monthly");

    public static readonly Frequency1 Quarterly = new("quarterly");

    public static readonly Frequency1 HalfYear = new("half-year");

    public static readonly Frequency1 Yearly = new("yearly");

    public static readonly Frequency1 Other = new("other");

    public static readonly Frequency1 Irregular = new("irregular");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onBiWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onBiMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onHalfYear,
        Func<TResult> onYearly,
        Func<TResult> onOther,
        Func<TResult> onIrregular,
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
            _ when this == Other => onOther(),
            _ when this == Irregular => onIrregular(),
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
        Action onOther,
        Action onIrregular,
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
        else if (this == Other) onOther();
        else if (this == Irregular) onIrregular();
        else otherwise(Value);
    }
}
