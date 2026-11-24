using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming>))]
public sealed record CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming : OpenStringEnum<CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming>
{
    private CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming(string value) : base(value)
    {
    }

    public static readonly CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming OnPayment = new(
        "on_payment");

    public static readonly CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming OnInvoicePosted = new(
        "on_invoice_posted");

    public static readonly CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming OnOrderActivation = new(
        "on_order_activation");

    public TResult Match<TResult>(Func<TResult> onOnPayment,
        Func<TResult> onOnInvoicePosted,
        Func<TResult> onOnOrderActivation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OnPayment => onOnPayment(),
            _ when this == OnInvoicePosted => onOnInvoicePosted(),
            _ when this == OnOrderActivation => onOnOrderActivation(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnPayment,
        Action onOnInvoicePosted,
        Action onOnOrderActivation,
        Action<string> otherwise)
    {
        if (this == OnPayment) onOnPayment();
        else if (this == OnInvoicePosted) onOnInvoicePosted();
        else if (this == OnOrderActivation) onOnOrderActivation();
        else otherwise(Value);
    }
}
