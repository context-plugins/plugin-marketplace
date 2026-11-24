using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreateOrderLineAttributeRequestPricingSignalType>))]
public sealed record CreateOrderLineAttributeRequestPricingSignalType : OpenStringEnum<CreateOrderLineAttributeRequestPricingSignalType>
{
    private CreateOrderLineAttributeRequestPricingSignalType(string value) : base(value)
    {
    }

    public static readonly CreateOrderLineAttributeRequestPricingSignalType Activity = new("activity");

    public static readonly CreateOrderLineAttributeRequestPricingSignalType Outcome = new("outcome");

    public TResult Match<TResult>(Func<TResult> onActivity, Func<TResult> onOutcome, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Activity => onActivity(),
            _ when this == Outcome => onOutcome(),
            _ => otherwise(Value)
        };

    public void Match(Action onActivity, Action onOutcome, Action<string> otherwise)
    {
        if (this == Activity) onActivity();
        else if (this == Outcome) onOutcome();
        else otherwise(Value);
    }
}
