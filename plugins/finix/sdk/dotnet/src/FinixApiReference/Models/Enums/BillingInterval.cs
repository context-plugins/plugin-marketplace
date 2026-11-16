using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// How often the buyer is billed. The possible billing intervals are as follows:
/// <list type="bullet">
///   <item><description><c>BIMONTHLY</c>: every 2 months</description></item>
///   <item><description><c>BIWEEKLY</c>: every 2 weeks</description></item>
///   <item><description><c>BIYEARLY</c>: every 2 years</description></item>
///   <item><description><c>DAILY</c>: every day</description></item>
///   <item><description><c>MONTHLY</c>: every month</description></item>
///   <item><description><c>QUARTERLY</c>: each quarter</description></item>
///   <item><description><c>SEMIYEARLY</c>: twice a year</description></item>
///   <item><description><c>TRIYEARLY</c>: every 3 years</description></item>
///   <item><description><c>WEEKLY</c>: every week</description></item>
///   <item><description><c>YEARLY</c>: every year</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingInterval>))]
public sealed record BillingInterval : OpenStringEnum<BillingInterval>
{
    private BillingInterval(string value) : base(value)
    {
    }

    public static readonly BillingInterval Bimonthly = new("BIMONTHLY");

    public static readonly BillingInterval Biweekly = new("BIWEEKLY");

    public static readonly BillingInterval Biyearly = new("BIYEARLY");

    public static readonly BillingInterval Daily = new("DAILY");

    public static readonly BillingInterval Monthly = new("MONTHLY");

    public static readonly BillingInterval Quarterly = new("QUARTERLY");

    public static readonly BillingInterval Semiyearly = new("SEMIYEARLY");

    public static readonly BillingInterval Triyearly = new("TRIYEARLY");

    public static readonly BillingInterval Weekly = new("WEEKLY");

    public static readonly BillingInterval Yearly = new("YEARLY");

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
