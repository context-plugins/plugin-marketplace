using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Receivable funding account type for receivable payment API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReceivableFundingAccountTypeRequestDto>))]
public sealed record ReceivableFundingAccountTypeRequestDto : OpenStringEnum<ReceivableFundingAccountTypeRequestDto>
{
    private ReceivableFundingAccountTypeRequestDto(string value) : base(value)
    {
    }

    public static readonly ReceivableFundingAccountTypeRequestDto BankAccount = new("BANK_ACCOUNT");

    public TResult Match<TResult>(Func<TResult> onBankAccount, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount, Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else otherwise(Value);
    }
}
