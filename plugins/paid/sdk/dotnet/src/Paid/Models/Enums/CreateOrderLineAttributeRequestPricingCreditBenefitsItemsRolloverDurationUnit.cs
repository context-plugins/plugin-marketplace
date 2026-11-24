using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit>))]
public sealed record CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit : OpenStringEnum<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit>
{
    private CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit(string value) : base(value)
    {
    }

    public static readonly CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit Days = new(
        "days");

    public static readonly CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit Months = new(
        "months");

    public TResult Match<TResult>(Func<TResult> onDays, Func<TResult> onMonths, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Days => onDays(),
            _ when this == Months => onMonths(),
            _ => otherwise(Value)
        };

    public void Match(Action onDays, Action onMonths, Action<string> otherwise)
    {
        if (this == Days) onDays();
        else if (this == Months) onMonths();
        else otherwise(Value);
    }
}
