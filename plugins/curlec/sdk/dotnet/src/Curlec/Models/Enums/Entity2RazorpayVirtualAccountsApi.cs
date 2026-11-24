using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity2RazorpayVirtualAccountsApi>))]
public sealed record Entity2RazorpayVirtualAccountsApi : OpenStringEnum<Entity2RazorpayVirtualAccountsApi>
{
    private Entity2RazorpayVirtualAccountsApi(string value) : base(value)
    {
    }

    public static readonly Entity2RazorpayVirtualAccountsApi Payment = new("payment");

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
