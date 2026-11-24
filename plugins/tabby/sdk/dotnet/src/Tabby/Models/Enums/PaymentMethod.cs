using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// Payment method used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PaymentMethod>))]
public sealed record PaymentMethod : OpenStringEnum<PaymentMethod>
{
    private PaymentMethod(string value) : base(value)
    {
    }

    public static readonly PaymentMethod Card = new("card");

    public static readonly PaymentMethod Cod = new("cod");

    public TResult Match<TResult>(Func<TResult> onCard, Func<TResult> onCod, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Card => onCard(),
            _ when this == Cod => onCod(),
            _ => otherwise(Value)
        };

    public void Match(Action onCard, Action onCod, Action<string> otherwise)
    {
        if (this == Card) onCard();
        else if (this == Cod) onCod();
        else otherwise(Value);
    }
}
