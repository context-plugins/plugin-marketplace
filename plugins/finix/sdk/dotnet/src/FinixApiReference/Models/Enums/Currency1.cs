using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// ISO 4217 3 letter currency code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency1>))]
public sealed record Currency1 : OpenStringEnum<Currency1>
{
    private Currency1(string value) : base(value)
    {
    }

    public static readonly Currency1 Usd = new("USD");

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
