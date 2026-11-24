using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayPaymentLinksApi>))]
public sealed record EntityRazorpayPaymentLinksApi : OpenStringEnum<EntityRazorpayPaymentLinksApi>
{
    private EntityRazorpayPaymentLinksApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayPaymentLinksApi PaymentLink = new("payment_link");

    public TResult Match<TResult>(Func<TResult> onPaymentLink, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentLink => onPaymentLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentLink, Action<string> otherwise)
    {
        if (this == PaymentLink) onPaymentLink();
        else otherwise(Value);
    }
}
