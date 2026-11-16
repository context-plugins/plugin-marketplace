using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InstrumentType2>))]
public sealed record InstrumentType2 : OpenStringEnum<InstrumentType2>
{
    private InstrumentType2(string value) : base(value)
    {
    }

    public static readonly InstrumentType2 PaymentCard = new("PAYMENT_CARD");

    public static readonly InstrumentType2 BankAccount = new("BANK_ACCOUNT");

    public TResult Match<TResult>(Func<TResult> onPaymentCard,
        Func<TResult> onBankAccount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PaymentCard => onPaymentCard(),
            _ when this == BankAccount => onBankAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onPaymentCard, Action onBankAccount, Action<string> otherwise)
    {
        if (this == PaymentCard) onPaymentCard();
        else if (this == BankAccount) onBankAccount();
        else otherwise(Value);
    }
}
