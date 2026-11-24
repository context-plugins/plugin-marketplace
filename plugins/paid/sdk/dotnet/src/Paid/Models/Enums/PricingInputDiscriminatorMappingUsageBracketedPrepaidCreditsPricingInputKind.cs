using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind>))]
public sealed record PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind : OpenStringEnum<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind>
{
    private PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind(string value) : base(value)
    {
    }

    public static readonly PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind SignalQuantity = new(
        "signalQuantity");

    public TResult Match<TResult>(Func<TResult> onSignalQuantity, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SignalQuantity => onSignalQuantity(),
            _ => otherwise(Value)
        };

    public void Match(Action onSignalQuantity, Action<string> otherwise)
    {
        if (this == SignalQuantity) onSignalQuantity();
        else otherwise(Value);
    }
}
