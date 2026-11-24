using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// One of - card / direct banking / COD (cash) / other
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentOption>))]
public sealed record PaymentOption : OpenStringEnum<PaymentOption>
{
    private PaymentOption(string value) : base(value)
    {
    }

    public static readonly PaymentOption Card = new("card");

    public static readonly PaymentOption DirectBanking = new("direct banking");

    public static readonly PaymentOption Cod = new("cod");

    public static readonly PaymentOption Other = new("other");

    public TResult Match<TResult>(Func<TResult> onCard,
        Func<TResult> onDirectBanking,
        Func<TResult> onCod,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Card => onCard(),
            _ when this == DirectBanking => onDirectBanking(),
            _ when this == Cod => onCod(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onCard, Action onDirectBanking, Action onCod, Action onOther, Action<string> otherwise)
    {
        if (this == Card) onCard();
        else if (this == DirectBanking) onDirectBanking();
        else if (this == Cod) onCod();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
