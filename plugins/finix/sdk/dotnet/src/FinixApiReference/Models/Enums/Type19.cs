using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Type of <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type19>))]
public sealed record Type19 : OpenStringEnum<Type19>
{
    private Type19(string value) : base(value)
    {
    }

    public static readonly Type19 BankAccount = new("BANK_ACCOUNT");

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
