using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MethodRazorpayPaymentLinksApi>))]
public sealed record MethodRazorpayPaymentLinksApi : OpenStringEnum<MethodRazorpayPaymentLinksApi>
{
    private MethodRazorpayPaymentLinksApi(string value) : base(value)
    {
    }

    public static readonly MethodRazorpayPaymentLinksApi Netbanking = new("netbanking");

    public static readonly MethodRazorpayPaymentLinksApi Card = new("card");

    public static readonly MethodRazorpayPaymentLinksApi Wallet = new("wallet");

    public static readonly MethodRazorpayPaymentLinksApi Upi = new("upi");

    public static readonly MethodRazorpayPaymentLinksApi Emi = new("emi");

    public static readonly MethodRazorpayPaymentLinksApi BankTransfer = new("bank_transfer");

    public TResult Match<TResult>(Func<TResult> onNetbanking,
        Func<TResult> onCard,
        Func<TResult> onWallet,
        Func<TResult> onUpi,
        Func<TResult> onEmi,
        Func<TResult> onBankTransfer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Netbanking => onNetbanking(),
            _ when this == Card => onCard(),
            _ when this == Wallet => onWallet(),
            _ when this == Upi => onUpi(),
            _ when this == Emi => onEmi(),
            _ when this == BankTransfer => onBankTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onNetbanking,
        Action onCard,
        Action onWallet,
        Action onUpi,
        Action onEmi,
        Action onBankTransfer,
        Action<string> otherwise)
    {
        if (this == Netbanking) onNetbanking();
        else if (this == Card) onCard();
        else if (this == Wallet) onWallet();
        else if (this == Upi) onUpi();
        else if (this == Emi) onEmi();
        else if (this == BankTransfer) onBankTransfer();
        else otherwise(Value);
    }
}
