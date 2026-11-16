using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The country where the entity (bank or financial institution) that issued the payment instrument (e.g., credit card, debit card) is located.
/// <list type="bullet">
///   <item><description><c>NON_USA</c> - The card was issued outside of the United States.</description></item>
///   <item><description><c>USA</c> - The card was issued in the United States.</description></item>
///   <item><description><c>UNKNOWN</c> - The processor did not return an issuer country for this particular BIN.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IssuerCountry1>))]
public sealed record IssuerCountry1 : OpenStringEnum<IssuerCountry1>
{
    private IssuerCountry1(string value) : base(value)
    {
    }

    public static readonly IssuerCountry1 NonUsa = new("NON_USA");

    public static readonly IssuerCountry1 Usa = new("USA");

    public static readonly IssuerCountry1 Unknown = new("UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onNonUsa,
        Func<TResult> onUsa,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NonUsa => onNonUsa(),
            _ when this == Usa => onUsa(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onNonUsa, Action onUsa, Action onUnknown, Action<string> otherwise)
    {
        if (this == NonUsa) onNonUsa();
        else if (this == Usa) onUsa();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
