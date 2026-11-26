using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Record AR payment type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvoicePaymentTypeResponse>))]
public sealed record InvoicePaymentTypeResponse : OpenStringEnum<InvoicePaymentTypeResponse>
{
    private InvoicePaymentTypeResponse(string value) : base(value)
    {
    }

    public static readonly InvoicePaymentTypeResponse Cash = new("CASH");

    public static readonly InvoicePaymentTypeResponse Check = new("CHECK");

    public static readonly InvoicePaymentTypeResponse CreditCard = new("CREDIT_CARD");

    public static readonly InvoicePaymentTypeResponse Ach = new("ACH");

    public static readonly InvoicePaymentTypeResponse Paypal = new("PAYPAL");

    public static readonly InvoicePaymentTypeResponse Other = new("OTHER");

    public static readonly InvoicePaymentTypeResponse Wallet = new("WALLET");

    public static readonly InvoicePaymentTypeResponse VirtualCard = new("VIRTUAL_CARD");

    public static readonly InvoicePaymentTypeResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onCash,
        Func<TResult> onCheck,
        Func<TResult> onCreditCard,
        Func<TResult> onAch,
        Func<TResult> onPaypal,
        Func<TResult> onOther,
        Func<TResult> onWallet,
        Func<TResult> onVirtualCard,
        Func<TResult> onUndefined,
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
            _ when this == Undefined => onUndefined(),
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
        Action onUndefined,
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
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
