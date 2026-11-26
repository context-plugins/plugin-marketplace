using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Funading account type for Payments API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FundingAccountTypeRequest>))]
public sealed record FundingAccountTypeRequest : OpenStringEnum<FundingAccountTypeRequest>
{
    private FundingAccountTypeRequest(string value) : base(value)
    {
    }

    public static readonly FundingAccountTypeRequest BankAccount = new("BANK_ACCOUNT");

    public static readonly FundingAccountTypeRequest CardAccount = new("CARD_ACCOUNT");

    public static readonly FundingAccountTypeRequest Wallet = new("WALLET");

    public static readonly FundingAccountTypeRequest ApCard = new("AP_CARD");

    public TResult Match<TResult>(Func<TResult> onBankAccount,
        Func<TResult> onCardAccount,
        Func<TResult> onWallet,
        Func<TResult> onApCard,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ when this == CardAccount => onCardAccount(),
            _ when this == Wallet => onWallet(),
            _ when this == ApCard => onApCard(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount,
        Action onCardAccount,
        Action onWallet,
        Action onApCard,
        Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else if (this == CardAccount) onCardAccount();
        else if (this == Wallet) onWallet();
        else if (this == ApCard) onApCard();
        else otherwise(Value);
    }
}
