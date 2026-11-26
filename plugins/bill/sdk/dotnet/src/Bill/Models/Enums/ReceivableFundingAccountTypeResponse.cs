using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Receivable funding account type for receivable payment API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReceivableFundingAccountTypeResponse>))]
public sealed record ReceivableFundingAccountTypeResponse : OpenStringEnum<ReceivableFundingAccountTypeResponse>
{
    private ReceivableFundingAccountTypeResponse(string value) : base(value)
    {
    }

    public static readonly ReceivableFundingAccountTypeResponse BankAccount = new("BANK_ACCOUNT");

    public static readonly ReceivableFundingAccountTypeResponse CardAccount = new("CARD_ACCOUNT");

    public TResult Match<TResult>(Func<TResult> onBankAccount,
        Func<TResult> onCardAccount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ when this == CardAccount => onCardAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount, Action onCardAccount, Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else if (this == CardAccount) onCardAccount();
        else otherwise(Value);
    }
}
