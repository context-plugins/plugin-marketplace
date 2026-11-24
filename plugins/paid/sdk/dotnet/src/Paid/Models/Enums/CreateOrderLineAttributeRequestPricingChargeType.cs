using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreateOrderLineAttributeRequestPricingChargeType>))]
public sealed record CreateOrderLineAttributeRequestPricingChargeType : OpenStringEnum<CreateOrderLineAttributeRequestPricingChargeType>
{
    private CreateOrderLineAttributeRequestPricingChargeType(string value) : base(value)
    {
    }

    public static readonly CreateOrderLineAttributeRequestPricingChargeType Usage = new("usage");

    public static readonly CreateOrderLineAttributeRequestPricingChargeType Recurring = new("recurring");

    public static readonly CreateOrderLineAttributeRequestPricingChargeType OneTime = new("oneTime");

    public static readonly CreateOrderLineAttributeRequestPricingChargeType SeatBased = new("seatBased");

    public TResult Match<TResult>(Func<TResult> onUsage,
        Func<TResult> onRecurring,
        Func<TResult> onOneTime,
        Func<TResult> onSeatBased,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usage => onUsage(),
            _ when this == Recurring => onRecurring(),
            _ when this == OneTime => onOneTime(),
            _ when this == SeatBased => onSeatBased(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsage,
        Action onRecurring,
        Action onOneTime,
        Action onSeatBased,
        Action<string> otherwise)
    {
        if (this == Usage) onUsage();
        else if (this == Recurring) onRecurring();
        else if (this == OneTime) onOneTime();
        else if (this == SeatBased) onSeatBased();
        else otherwise(Value);
    }
}
