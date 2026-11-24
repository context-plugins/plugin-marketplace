using System;
using System.Text.Json.Serialization;
using Tabby.Core.Enum;

namespace Tabby.Models.Enums;

/// <summary>
/// The currency of the dispute. It's always equal to the currency of the payment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency1>))]
public sealed record Currency1 : OpenStringEnum<Currency1>
{
    private Currency1(string value) : base(value)
    {
    }

    public static readonly Currency1 Aed = new("AED");

    public static readonly Currency1 Sar = new("SAR");

    public static readonly Currency1 Kwd = new("KWD");

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
