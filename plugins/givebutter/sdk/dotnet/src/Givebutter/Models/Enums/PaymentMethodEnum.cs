using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PaymentMethodEnum>))]
public sealed record PaymentMethodEnum : OpenStringEnum<PaymentMethodEnum>
{
    private PaymentMethodEnum(string value) : base(value)
    {
    }

    public static readonly PaymentMethodEnum Ach = new("ach");

    public static readonly PaymentMethodEnum Card = new("card");

    public static readonly PaymentMethodEnum Cash = new("cash");

    public static readonly PaymentMethodEnum Check = new("check");

    public static readonly PaymentMethodEnum DigitalWallet = new("digital_wallet");

    public static readonly PaymentMethodEnum DonorAdvisedFund = new("donor_advised_fund");

    public static readonly PaymentMethodEnum Paypal = new("paypal");

    public static readonly PaymentMethodEnum Venmo = new("venmo");

    public static readonly PaymentMethodEnum Cashapp = new("cashapp");

    public static readonly PaymentMethodEnum Terminal = new("terminal");

    public static readonly PaymentMethodEnum Stock = new("stock");

    public static readonly PaymentMethodEnum InKind = new("in-kind");

    public static readonly PaymentMethodEnum Property = new("property");

    public static readonly PaymentMethodEnum Other = new("other");

    public static readonly PaymentMethodEnum None = new("none");

    public TResult Match<TResult>(Func<TResult> onAch,
        Func<TResult> onCard,
        Func<TResult> onCash,
        Func<TResult> onCheck,
        Func<TResult> onDigitalWallet,
        Func<TResult> onDonorAdvisedFund,
        Func<TResult> onPaypal,
        Func<TResult> onVenmo,
        Func<TResult> onCashapp,
        Func<TResult> onTerminal,
        Func<TResult> onStock,
        Func<TResult> onInKind,
        Func<TResult> onProperty,
        Func<TResult> onOther,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ach => onAch(),
            _ when this == Card => onCard(),
            _ when this == Cash => onCash(),
            _ when this == Check => onCheck(),
            _ when this == DigitalWallet => onDigitalWallet(),
            _ when this == DonorAdvisedFund => onDonorAdvisedFund(),
            _ when this == Paypal => onPaypal(),
            _ when this == Venmo => onVenmo(),
            _ when this == Cashapp => onCashapp(),
            _ when this == Terminal => onTerminal(),
            _ when this == Stock => onStock(),
            _ when this == InKind => onInKind(),
            _ when this == Property => onProperty(),
            _ when this == Other => onOther(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onAch,
        Action onCard,
        Action onCash,
        Action onCheck,
        Action onDigitalWallet,
        Action onDonorAdvisedFund,
        Action onPaypal,
        Action onVenmo,
        Action onCashapp,
        Action onTerminal,
        Action onStock,
        Action onInKind,
        Action onProperty,
        Action onOther,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Ach) onAch();
        else if (this == Card) onCard();
        else if (this == Cash) onCash();
        else if (this == Check) onCheck();
        else if (this == DigitalWallet) onDigitalWallet();
        else if (this == DonorAdvisedFund) onDonorAdvisedFund();
        else if (this == Paypal) onPaypal();
        else if (this == Venmo) onVenmo();
        else if (this == Cashapp) onCashapp();
        else if (this == Terminal) onTerminal();
        else if (this == Stock) onStock();
        else if (this == InKind) onInKind();
        else if (this == Property) onProperty();
        else if (this == Other) onOther();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
