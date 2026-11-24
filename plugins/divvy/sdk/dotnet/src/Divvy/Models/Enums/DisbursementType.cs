using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for Disbursement type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DisbursementType>))]
public sealed record DisbursementType : OpenStringEnum<DisbursementType>
{
    private DisbursementType(string value) : base(value)
    {
    }

    public static readonly DisbursementType Check = new("CHECK");

    public static readonly DisbursementType Ach = new("ACH");

    public static readonly DisbursementType Rpps = new("RPPS");

    public static readonly DisbursementType Paypal = new("PAYPAL");

    public static readonly DisbursementType Offline = new("OFFLINE");

    public static readonly DisbursementType InternationalEPayment = new("INTERNATIONAL_E_PAYMENT");

    public static readonly DisbursementType Amex = new("AMEX");

    public static readonly DisbursementType VirtualCard = new("VIRTUAL_CARD");

    public static readonly DisbursementType Wallet = new("WALLET");

    public static readonly DisbursementType CreditCard = new("CREDIT_CARD");

    public static readonly DisbursementType Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onCheck,
        Func<TResult> onAch,
        Func<TResult> onRpps,
        Func<TResult> onPaypal,
        Func<TResult> onOffline,
        Func<TResult> onInternationalEPayment,
        Func<TResult> onAmex,
        Func<TResult> onVirtualCard,
        Func<TResult> onWallet,
        Func<TResult> onCreditCard,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Check => onCheck(),
            _ when this == Ach => onAch(),
            _ when this == Rpps => onRpps(),
            _ when this == Paypal => onPaypal(),
            _ when this == Offline => onOffline(),
            _ when this == InternationalEPayment => onInternationalEPayment(),
            _ when this == Amex => onAmex(),
            _ when this == VirtualCard => onVirtualCard(),
            _ when this == Wallet => onWallet(),
            _ when this == CreditCard => onCreditCard(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onCheck,
        Action onAch,
        Action onRpps,
        Action onPaypal,
        Action onOffline,
        Action onInternationalEPayment,
        Action onAmex,
        Action onVirtualCard,
        Action onWallet,
        Action onCreditCard,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Check) onCheck();
        else if (this == Ach) onAch();
        else if (this == Rpps) onRpps();
        else if (this == Paypal) onPaypal();
        else if (this == Offline) onOffline();
        else if (this == InternationalEPayment) onInternationalEPayment();
        else if (this == Amex) onAmex();
        else if (this == VirtualCard) onVirtualCard();
        else if (this == Wallet) onWallet();
        else if (this == CreditCard) onCreditCard();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
