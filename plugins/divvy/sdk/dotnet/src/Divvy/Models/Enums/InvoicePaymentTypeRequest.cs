using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Record AR payment type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvoicePaymentTypeRequest>))]
public sealed record InvoicePaymentTypeRequest : OpenStringEnum<InvoicePaymentTypeRequest>
{
    private InvoicePaymentTypeRequest(string value) : base(value)
    {
    }

    public static readonly InvoicePaymentTypeRequest Cash = new("CASH");

    public static readonly InvoicePaymentTypeRequest Check = new("CHECK");

    public static readonly InvoicePaymentTypeRequest CreditCard = new("CREDIT_CARD");

    public static readonly InvoicePaymentTypeRequest Ach = new("ACH");

    public static readonly InvoicePaymentTypeRequest Paypal = new("PAYPAL");

    public static readonly InvoicePaymentTypeRequest Other = new("OTHER");

    public static readonly InvoicePaymentTypeRequest Wallet = new("WALLET");

    public static readonly InvoicePaymentTypeRequest VirtualCard = new("VIRTUAL_CARD");

    public TResult Match<TResult>(Func<TResult> onCash,
        Func<TResult> onCheck,
        Func<TResult> onCreditCard,
        Func<TResult> onAch,
        Func<TResult> onPaypal,
        Func<TResult> onOther,
        Func<TResult> onWallet,
        Func<TResult> onVirtualCard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cash => onCash(),
            _ when this == Check => onCheck(),
            _ when this == CreditCard => onCreditCard(),
            _ when this == Ach => onAch(),
            _ when this == Paypal => onPaypal(),
            _ when this == Other => onOther(),
            _ when this == Wallet => onWallet(),
            _ when this == VirtualCard => onVirtualCard(),
            _ => otherwise(Value)
        };

    public void Match(Action onCash,
        Action onCheck,
        Action onCreditCard,
        Action onAch,
        Action onPaypal,
        Action onOther,
        Action onWallet,
        Action onVirtualCard,
        Action<string> otherwise)
    {
        if (this == Cash) onCash();
        else if (this == Check) onCheck();
        else if (this == CreditCard) onCreditCard();
        else if (this == Ach) onAch();
        else if (this == Paypal) onPaypal();
        else if (this == Other) onOther();
        else if (this == Wallet) onWallet();
        else if (this == VirtualCard) onVirtualCard();
        else otherwise(Value);
    }
}
