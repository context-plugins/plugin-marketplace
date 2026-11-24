using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// The billing frequency for the plan
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlanPricingBillingFrequency>))]
public sealed record PlanPricingBillingFrequency : OpenStringEnum<PlanPricingBillingFrequency>
{
    private PlanPricingBillingFrequency(string value) : base(value)
    {
    }

    public static readonly PlanPricingBillingFrequency Monthly = new("monthly");

    public static readonly PlanPricingBillingFrequency Quarterly = new("quarterly");

    public static readonly PlanPricingBillingFrequency SemiAnnually = new("semi-annually");

    public static readonly PlanPricingBillingFrequency Yearly = new("yearly");

    public static readonly PlanPricingBillingFrequency Custom = new("custom");

    public TResult Match<TResult>(Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onSemiAnnually,
        Func<TResult> onYearly,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == SemiAnnually => onSemiAnnually(),
            _ when this == Yearly => onYearly(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonthly,
        Action onQuarterly,
        Action onSemiAnnually,
        Action onYearly,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == SemiAnnually) onSemiAnnually();
        else if (this == Yearly) onYearly();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
