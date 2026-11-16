using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// ISO 4217 3-letter currency code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Cad = new("CAD");

    public static readonly Currency Usd = new("USD");

    public TResult Match<TResult>(Func<TResult> onCad, Func<TResult> onUsd, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Cad => onCad(),
            _ when this == Usd => onUsd(),
            _ => otherwise(Value)
        };

    public void Match(Action onCad, Action onUsd, Action<string> otherwise)
    {
        if (this == Cad) onCad();
        else if (this == Usd) onUsd();
        else otherwise(Value);
    }
}
