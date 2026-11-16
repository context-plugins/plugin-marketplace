using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BillingInterval1>))]
public sealed record BillingInterval1 : OpenStringEnum<BillingInterval1>
{
    private BillingInterval1(string value) : base(value)
    {
    }

    public static readonly BillingInterval1 Bimonthly = new("BIMONTHLY");

    public static readonly BillingInterval1 Biweekly = new("BIWEEKLY");

    public static readonly BillingInterval1 Biyearly = new("BIYEARLY");

    public static readonly BillingInterval1 Daily = new("DAILY");

    public static readonly BillingInterval1 Monthly = new("MONTHLY");

    public static readonly BillingInterval1 Quarterly = new("QUARTERLY");

    public static readonly BillingInterval1 Semiyearly = new("SEMIYEARLY");

    public static readonly BillingInterval1 Triyearly = new("TRIYEARLY");

    public static readonly BillingInterval1 Weekly = new("WEEKLY");

    public static readonly BillingInterval1 Yearly = new("YEARLY");

    public TResult Match<TResult>(Func<TResult> onBimonthly,
        Func<TResult> onBiweekly,
        Func<TResult> onBiyearly,
        Func<TResult> onDaily,
        Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onSemiyearly,
        Func<TResult> onTriyearly,
        Func<TResult> onWeekly,
        Func<TResult> onYearly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bimonthly => onBimonthly(),
            _ when this == Biweekly => onBiweekly(),
            _ when this == Biyearly => onBiyearly(),
            _ when this == Daily => onDaily(),
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == Semiyearly => onSemiyearly(),
            _ when this == Triyearly => onTriyearly(),
            _ when this == Weekly => onWeekly(),
            _ when this == Yearly => onYearly(),
            _ => otherwise(Value)
        };

    public void Match(Action onBimonthly,
        Action onBiweekly,
        Action onBiyearly,
        Action onDaily,
        Action onMonthly,
        Action onQuarterly,
        Action onSemiyearly,
        Action onTriyearly,
        Action onWeekly,
        Action onYearly,
        Action<string> otherwise)
    {
        if (this == Bimonthly) onBimonthly();
        else if (this == Biweekly) onBiweekly();
        else if (this == Biyearly) onBiyearly();
        else if (this == Daily) onDaily();
        else if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == Semiyearly) onSemiyearly();
        else if (this == Triyearly) onTriyearly();
        else if (this == Weekly) onWeekly();
        else if (this == Yearly) onYearly();
        else otherwise(Value);
    }
}
