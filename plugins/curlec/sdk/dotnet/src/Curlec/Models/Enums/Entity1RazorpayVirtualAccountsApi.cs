using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity1RazorpayVirtualAccountsApi>))]
public sealed record Entity1RazorpayVirtualAccountsApi : OpenStringEnum<Entity1RazorpayVirtualAccountsApi>
{
    private Entity1RazorpayVirtualAccountsApi(string value) : base(value)
    {
    }

    public static readonly Entity1RazorpayVirtualAccountsApi BankAccount = new("bank_account");

    public static readonly Entity1RazorpayVirtualAccountsApi Vpa = new("vpa");

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
