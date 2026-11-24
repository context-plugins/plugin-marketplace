using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity4>))]
public sealed record Entity4 : OpenStringEnum<Entity4>
{
    private Entity4(string value) : base(value)
    {
    }

    public static readonly Entity4 BankAccount = new("bank_account");

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
