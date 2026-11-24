using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BillingInterval>))]
public sealed record BillingInterval : OpenStringEnum<BillingInterval>
{
    private BillingInterval(string value) : base(value)
    {
    }

    public static readonly BillingInterval Monthly = new("MONTHLY");

    public static readonly BillingInterval Yearly = new("YEARLY");

    public TResult Match<TResult>(Func<TResult> onMonthly, Func<TResult> onYearly, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monthly => onMonthly(),
            _ when this == Yearly => onYearly(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonthly, Action onYearly, Action<string> otherwise)
    {
        if (this == Monthly) onMonthly();
        else if (this == Yearly) onYearly();
        else otherwise(Value);
    }
}
