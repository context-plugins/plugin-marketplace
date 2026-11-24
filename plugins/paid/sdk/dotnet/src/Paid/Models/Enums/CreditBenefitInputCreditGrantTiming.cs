using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreditBenefitInputCreditGrantTiming>))]
public sealed record CreditBenefitInputCreditGrantTiming : OpenStringEnum<CreditBenefitInputCreditGrantTiming>
{
    private CreditBenefitInputCreditGrantTiming(string value) : base(value)
    {
    }

    public static readonly CreditBenefitInputCreditGrantTiming OnOrderActivation = new("on_order_activation");

    public static readonly CreditBenefitInputCreditGrantTiming OnPayment = new("on_payment");

    public static readonly CreditBenefitInputCreditGrantTiming OnInvoicePosted = new("on_invoice_posted");

    public TResult Match<TResult>(Func<TResult> onOnOrderActivation,
        Func<TResult> onOnPayment,
        Func<TResult> onOnInvoicePosted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OnOrderActivation => onOnOrderActivation(),
            _ when this == OnPayment => onOnPayment(),
            _ when this == OnInvoicePosted => onOnInvoicePosted(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnOrderActivation,
        Action onOnPayment,
        Action onOnInvoicePosted,
        Action<string> otherwise)
    {
        if (this == OnOrderActivation) onOnOrderActivation();
        else if (this == OnPayment) onOnPayment();
        else if (this == OnInvoicePosted) onOnInvoicePosted();
        else otherwise(Value);
    }
}
