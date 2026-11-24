using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AccountType>))]
public sealed record AccountType : OpenStringEnum<AccountType>
{
    private AccountType(string value) : base(value)
    {
    }

    public static readonly AccountType BankAccount = new("bank_account");

    public static readonly AccountType Vpa = new("vpa");

    public TResult Match<TResult>(Func<TResult> onBankAccount, Func<TResult> onVpa, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankAccount => onBankAccount(),
            _ when this == Vpa => onVpa(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankAccount, Action onVpa, Action<string> otherwise)
    {
        if (this == BankAccount) onBankAccount();
        else if (this == Vpa) onVpa();
        else otherwise(Value);
    }
}
