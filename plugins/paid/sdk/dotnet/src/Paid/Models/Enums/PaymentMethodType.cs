using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// The type of payment method
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentMethodType>))]
public sealed record PaymentMethodType : OpenStringEnum<PaymentMethodType>
{
    private PaymentMethodType(string value) : base(value)
    {
    }

    public static readonly PaymentMethodType Card = new("card");

    public static readonly PaymentMethodType UsBankAccount = new("us_bank_account");

    public static readonly PaymentMethodType SepaDebit = new("sepa_debit");

    public TResult Match<TResult>(Func<TResult> onCard,
        Func<TResult> onUsBankAccount,
        Func<TResult> onSepaDebit,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Card => onCard(),
            _ when this == UsBankAccount => onUsBankAccount(),
            _ when this == SepaDebit => onSepaDebit(),
            _ => otherwise(Value)
        };

    public void Match(Action onCard, Action onUsBankAccount, Action onSepaDebit, Action<string> otherwise)
    {
        if (this == Card) onCard();
        else if (this == UsBankAccount) onUsBankAccount();
        else if (this == SepaDebit) onSepaDebit();
        else otherwise(Value);
    }
}
