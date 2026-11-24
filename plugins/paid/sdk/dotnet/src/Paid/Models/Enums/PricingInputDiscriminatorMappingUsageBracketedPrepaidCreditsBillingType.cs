using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType>))]
public sealed record PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType : OpenStringEnum<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType>
{
    private PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType(string value) : base(value)
    {
    }

    public static readonly PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType Advance = new(
        "Advance");

    public static readonly PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType Arrears = new(
        "Arrears");

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
