using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Pln = new("PLN");

    public static readonly Currency Usd = new("USD");

    public static readonly Currency Eur = new("EUR");

    public TResult Match<TResult>(Func<TResult> onPln,
        Func<TResult> onUsd,
        Func<TResult> onEur,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pln => onPln(),
            _ when this == Usd => onUsd(),
            _ when this == Eur => onEur(),
            _ => otherwise(Value)
        };

    public void Match(Action onPln, Action onUsd, Action onEur, Action<string> otherwise)
    {
        if (this == Pln) onPln();
        else if (this == Usd) onUsd();
        else if (this == Eur) onEur();
        else otherwise(Value);
    }
}
