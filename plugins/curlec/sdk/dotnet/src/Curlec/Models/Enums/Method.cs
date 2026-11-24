using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Card = new("card");

    public static readonly Method Netbanking = new("netbanking");

    public static readonly Method Wallet = new("wallet");

    public static readonly Method Emi = new("emi");

    public static readonly Method Upi = new("upi");

    public TResult Match<TResult>(Func<TResult> onCard,
        Func<TResult> onNetbanking,
        Func<TResult> onWallet,
        Func<TResult> onEmi,
        Func<TResult> onUpi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Card => onCard(),
            _ when this == Netbanking => onNetbanking(),
            _ when this == Wallet => onWallet(),
            _ when this == Emi => onEmi(),
            _ when this == Upi => onUpi(),
            _ => otherwise(Value)
        };

    public void Match(Action onCard,
        Action onNetbanking,
        Action onWallet,
        Action onEmi,
        Action onUpi,
        Action<string> otherwise)
    {
        if (this == Card) onCard();
        else if (this == Netbanking) onNetbanking();
        else if (this == Wallet) onWallet();
        else if (this == Emi) onEmi();
        else if (this == Upi) onUpi();
        else otherwise(Value);
    }
}
