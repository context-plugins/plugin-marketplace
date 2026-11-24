using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The format of this custom field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Currency = new("currency");

    public static readonly Format Identifier = new("identifier");

    public static readonly Format Percentage = new("percentage");

    public static readonly Format Custom = new("custom");

    public static readonly Format None = new("none");

    public TResult Match<TResult>(Func<TResult> onCurrency,
        Func<TResult> onIdentifier,
        Func<TResult> onPercentage,
        Func<TResult> onCustom,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Currency => onCurrency(),
            _ when this == Identifier => onIdentifier(),
            _ when this == Percentage => onPercentage(),
            _ when this == Custom => onCustom(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onCurrency,
        Action onIdentifier,
        Action onPercentage,
        Action onCustom,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == Currency) onCurrency();
        else if (this == Identifier) onIdentifier();
        else if (this == Percentage) onPercentage();
        else if (this == Custom) onCustom();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
