using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Standard 3 character currency codes as per ISO-4217.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Aud = new("AUD");

    public static readonly Currency Usd = new("USD");

    public static readonly Currency Gbp = new("GBP");

    public TResult Match<TResult>(Func<TResult> onAud,
        Func<TResult> onUsd,
        Func<TResult> onGbp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aud => onAud(),
            _ when this == Usd => onUsd(),
            _ when this == Gbp => onGbp(),
            _ => otherwise(Value)
        };

    public void Match(Action onAud, Action onUsd, Action onGbp, Action<string> otherwise)
    {
        if (this == Aud) onAud();
        else if (this == Usd) onUsd();
        else if (this == Gbp) onGbp();
        else otherwise(Value);
    }
}
