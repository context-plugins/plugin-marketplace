using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EntityRazorpayPaymentsApi>))]
public sealed record EntityRazorpayPaymentsApi : OpenStringEnum<EntityRazorpayPaymentsApi>
{
    private EntityRazorpayPaymentsApi(string value) : base(value)
    {
    }

    public static readonly EntityRazorpayPaymentsApi Payment = new("payment");

    public TResult Match<TResult>(Func<TResult> onPayment, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payment => onPayment(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayment, Action<string> otherwise)
    {
        if (this == Payment) onPayment();
        else otherwise(Value);
    }
}
