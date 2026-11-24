using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingInputDiscriminatorMappingRecurringVolumeBillingType>))]
public sealed record PricingInputDiscriminatorMappingRecurringVolumeBillingType : OpenStringEnum<PricingInputDiscriminatorMappingRecurringVolumeBillingType>
{
    private PricingInputDiscriminatorMappingRecurringVolumeBillingType(string value) : base(value)
    {
    }

    public static readonly PricingInputDiscriminatorMappingRecurringVolumeBillingType Advance = new("Advance");

    public static readonly PricingInputDiscriminatorMappingRecurringVolumeBillingType Arrears = new("Arrears");

    public TResult Match<TResult>(Func<TResult> onAdvance, Func<TResult> onArrears, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Advance => onAdvance(),
            _ when this == Arrears => onArrears(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdvance, Action onArrears, Action<string> otherwise)
    {
        if (this == Advance) onAdvance();
        else if (this == Arrears) onArrears();
        else otherwise(Value);
    }
}
