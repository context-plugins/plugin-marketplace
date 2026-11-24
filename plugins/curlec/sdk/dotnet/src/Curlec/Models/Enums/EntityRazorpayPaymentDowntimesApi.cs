using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayPaymentDowntimesApi>))]
public sealed record EntityRazorpayPaymentDowntimesApi : OpenStringEnum<EntityRazorpayPaymentDowntimesApi>
{
    private EntityRazorpayPaymentDowntimesApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayPaymentDowntimesApi PaymentDowntime = new("payment.downtime");

    public TResult Match<TResult>(Func<TResult> onPaymentDowntime, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentDowntime => onPaymentDowntime(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentDowntime, Action<string> otherwise)
    {
        if (this == PaymentDowntime) onPaymentDowntime();
        else otherwise(Value);
    }
}
