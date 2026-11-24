using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Funading account type for Payments API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FundingAccountTypeResponse>))]
public sealed record FundingAccountTypeResponse : OpenStringEnum<FundingAccountTypeResponse>
{
    private FundingAccountTypeResponse(string value) : base(value)
    {
    }

    public static readonly FundingAccountTypeResponse BankAccount = new("BANK_ACCOUNT");

    public static readonly FundingAccountTypeResponse CardAccount = new("CARD_ACCOUNT");

    public static readonly FundingAccountTypeResponse Wallet = new("WALLET");

    public static readonly FundingAccountTypeResponse ApCard = new("AP_CARD");

    public static readonly FundingAccountTypeResponse Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onBankAccount,
        Func<TResult> onCardAccount,
        Func<TResult> onWallet,
        Func<TResult> onApCard,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ when this == CardAccount => onCardAccount(),
            _ when this == Wallet => onWallet(),
            _ when this == ApCard => onApCard(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount,
        Action onCardAccount,
        Action onWallet,
        Action onApCard,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else if (this == CardAccount) onCardAccount();
        else if (this == Wallet) onWallet();
        else if (this == ApCard) onApCard();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
