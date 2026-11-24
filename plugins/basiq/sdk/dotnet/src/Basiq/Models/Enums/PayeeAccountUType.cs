using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of domestic payee account.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PayeeAccountUType>))]
public sealed record PayeeAccountUType : OpenStringEnum<PayeeAccountUType>
{
    private PayeeAccountUType(string value) : base(value)
    {
    }

    public static readonly PayeeAccountUType Account = new("account");

    public static readonly PayeeAccountUType PayId = new("payId");

    public TResult Match<TResult>(Func<TResult> onAccount, Func<TResult> onPayId, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Account => onAccount(),
            _ when this == PayId => onPayId(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccount, Action onPayId, Action<string> otherwise)
    {
        if (this == Account) onAccount();
        else if (this == PayId) onPayId();
        else otherwise(Value);
    }
}
