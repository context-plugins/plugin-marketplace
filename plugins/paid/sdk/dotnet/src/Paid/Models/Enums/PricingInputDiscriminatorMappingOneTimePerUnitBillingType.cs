using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingInputDiscriminatorMappingOneTimePerUnitBillingType>))]
public sealed record PricingInputDiscriminatorMappingOneTimePerUnitBillingType : OpenStringEnum<PricingInputDiscriminatorMappingOneTimePerUnitBillingType>
{
    private PricingInputDiscriminatorMappingOneTimePerUnitBillingType(string value) : base(value)
    {
    }

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitBillingType Advance = new("Advance");

    public static readonly PricingInputDiscriminatorMappingOneTimePerUnitBillingType Arrears = new("Arrears");

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
