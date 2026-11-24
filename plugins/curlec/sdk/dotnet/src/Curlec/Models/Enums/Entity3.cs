using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Entity3>))]
public sealed record Entity3 : OpenStringEnum<Entity3>
{
    private Entity3(string value) : base(value)
    {
    }

    public static readonly Entity3 BankTransfer = new("bank_transfer");

    public TResult Match<TResult>(Func<TResult> onBankTransfer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BankTransfer => onBankTransfer(),
            _ => otherwise(Value)
        };

    public void Match(Action onBankTransfer, Action<string> otherwise)
    {
        if (this == BankTransfer) onBankTransfer();
        else otherwise(Value);
    }
}
