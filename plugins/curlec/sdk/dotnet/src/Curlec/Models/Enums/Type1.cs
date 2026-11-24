using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Invoice = new("invoice");

    public static readonly Type1 PaymentPage = new("payment_page");

    public TResult Match<TResult>(Func<TResult> onInvoice,
        Func<TResult> onPaymentPage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Invoice => onInvoice(),
            _ when this == PaymentPage => onPaymentPage(),
            _ => otherwise(Value)
        };

    public void Match(Action onInvoice, Action onPaymentPage, Action<string> otherwise)
    {
        if (this == Invoice) onInvoice();
        else if (this == PaymentPage) onPaymentPage();
        else otherwise(Value);
    }
}
