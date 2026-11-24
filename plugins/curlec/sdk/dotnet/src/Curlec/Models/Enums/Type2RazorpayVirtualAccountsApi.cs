using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Type of allowed payer.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2RazorpayVirtualAccountsApi>))]
public sealed record Type2RazorpayVirtualAccountsApi : OpenStringEnum<Type2RazorpayVirtualAccountsApi>
{
    private Type2RazorpayVirtualAccountsApi(string value) : base(value)
    {
    }

    public static readonly Type2RazorpayVirtualAccountsApi BankAccount = new("bank_account");

    public static readonly Type2RazorpayVirtualAccountsApi Vpa = new("vpa");

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
