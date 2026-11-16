using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type52>))]
public sealed record Type52 : OpenStringEnum<Type52>
{
    private Type52(string value) : base(value)
    {
    }

    public static readonly Type52 All = new("ALL");

    public static readonly Type52 BankAccount = new("BANK_ACCOUNT");

    public static readonly Type52 PaymentCard = new("PAYMENT_CARD");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onBankAccount,
        Func<TResult> onPaymentCard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == BankAccount => onBankAccount(),
            _ when this == PaymentCard => onPaymentCard(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onBankAccount, Action onPaymentCard, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == BankAccount) onBankAccount();
        else if (this == PaymentCard) onPaymentCard();
        else otherwise(Value);
    }
}
