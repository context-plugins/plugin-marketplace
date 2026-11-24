using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Interval>))]
public sealed record Interval : OpenStringEnum<Interval>
{
    private Interval(string value) : base(value)
    {
    }

    public static readonly Interval Daily = new("daily");

    public static readonly Interval Weekly = new("weekly");

    public static readonly Interval Monthly = new("monthly");

    public static readonly Interval Quarterly = new("quarterly");

    public static readonly Interval Annually = new("annually");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onAnnually,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == Annually => onAnnually(),
            _ => otherwise(Value)
        };

    public void Match(Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action onQuarterly,
        Action onAnnually,
        Action<string> otherwise)
    {
        if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == Annually) onAnnually();
        else otherwise(Value);
    }
}
