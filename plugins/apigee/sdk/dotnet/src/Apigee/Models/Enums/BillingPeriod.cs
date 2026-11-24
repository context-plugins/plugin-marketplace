using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Frequency at which the customer will be billed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingPeriod>))]
public sealed record BillingPeriod : OpenStringEnum<BillingPeriod>
{
    private BillingPeriod(string value) : base(value)
    {
    }

    public static readonly BillingPeriod BillingPeriodUnspecified = new("BILLING_PERIOD_UNSPECIFIED");

    public static readonly BillingPeriod Weekly = new("WEEKLY");

    public static readonly BillingPeriod Monthly = new("MONTHLY");

    public TResult Match<TResult>(Func<TResult> onBillingPeriodUnspecified,
        Func<TResult> onWeekly,
        Func<TResult> onMonthly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BillingPeriodUnspecified => onBillingPeriodUnspecified(),
            _ when this == Weekly => onWeekly(),
            _ when this == Monthly => onMonthly(),
            _ => otherwise(Value)
        };

    public void Match(Action onBillingPeriodUnspecified, Action onWeekly, Action onMonthly, Action<string> otherwise)
    {
        if (this == BillingPeriodUnspecified) onBillingPeriodUnspecified();
        else if (this == Weekly) onWeekly();
        else if (this == Monthly) onMonthly();
        else otherwise(Value);
    }
}
