using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Billing frequency unit. daily requires interval ≥ 7.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Period>))]
public sealed record Period : OpenStringEnum<Period>
{
    private Period(string value) : base(value)
    {
    }

    public static readonly Period Daily = new("daily");

    public static readonly Period Weekly = new("weekly");

    public static readonly Period Monthly = new("monthly");

    public static readonly Period Quarterly = new("quarterly");

    public static readonly Period Yearly = new("yearly");

    public TResult Match<TResult>(Func<TResult> onDaily,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onYearly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Daily => onDaily(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == Yearly => onYearly(),
            _ => otherwise(Value)
        };

    public void Match(Action onDaily,
        Action onWeekly,
        Action onMonthly,
        Action onQuarterly,
        Action onYearly,
        Action<string> otherwise)
    {
        if (this == Daily) onDaily();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == Yearly) onYearly();
        else otherwise(Value);
    }
}
