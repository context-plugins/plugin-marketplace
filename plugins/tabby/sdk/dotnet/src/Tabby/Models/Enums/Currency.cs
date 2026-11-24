using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options - depending on the country where the store is located:
///   - <c>AED</c> - United Arab Emirates Dirham
///   - <c>SAR</c> - Saudi Riyal
///   - <c>KWD</c> - Kuwaiti Dinar
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Aed = new("AED");

    public static readonly Currency Sar = new("SAR");

    public static readonly Currency Kwd = new("KWD");

    public TResult Match<TResult>(Func<TResult> onAed,
        Func<TResult> onSar,
        Func<TResult> onKwd,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aed => onAed(),
            _ when this == Sar => onSar(),
            _ when this == Kwd => onKwd(),
            _ => otherwise(Value)
        };

    public void Match(Action onAed, Action onSar, Action onKwd, Action<string> otherwise)
    {
        if (this == Aed) onAed();
        else if (this == Sar) onSar();
        else if (this == Kwd) onKwd();
        else otherwise(Value);
    }
}
