using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// ISO 4217 3-letter currency code. Currently, the only <c>currency</c> supported is <c>USD</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency11>))]
public sealed record Currency11 : OpenStringEnum<Currency11>
{
    private Currency11(string value) : base(value)
    {
    }

    public static readonly Currency11 Usd = new("USD");

    public TResult Match<TResult>(Func<TResult> onUsd, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usd => onUsd(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsd, Action<string> otherwise)
    {
        if (this == Usd) onUsd();
        else otherwise(Value);
    }
}
