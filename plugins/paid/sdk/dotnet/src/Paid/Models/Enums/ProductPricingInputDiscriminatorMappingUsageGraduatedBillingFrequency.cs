using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency>))]
public sealed record ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency : OpenStringEnum<ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency>
{
    private ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency(string value) : base(value)
    {
    }

    public static readonly ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency Monthly = new(
        "Monthly");

    public static readonly ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency Quarterly = new(
        "Quarterly");

    public static readonly ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency SemiAnnually = new(
        "Semi-Annually");

    public static readonly ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency Annual = new("Annual");

    public static readonly ProductPricingInputDiscriminatorMappingUsageGraduatedBillingFrequency Custom = new("Custom");

    public TResult Match<TResult>(Func<TResult> onMonthly,
        Func<TResult> onQuarterly,
        Func<TResult> onSemiAnnually,
        Func<TResult> onAnnual,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Monthly => onMonthly(),
            _ when this == Quarterly => onQuarterly(),
            _ when this == SemiAnnually => onSemiAnnually(),
            _ when this == Annual => onAnnual(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonthly,
        Action onQuarterly,
        Action onSemiAnnually,
        Action onAnnual,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == Monthly) onMonthly();
        else if (this == Quarterly) onQuarterly();
        else if (this == SemiAnnually) onSemiAnnually();
        else if (this == Annual) onAnnual();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
