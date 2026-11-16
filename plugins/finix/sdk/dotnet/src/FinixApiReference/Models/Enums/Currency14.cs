using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Currency14>))]
public sealed record Currency14 : OpenStringEnum<Currency14>
{
    private Currency14(string value) : base(value)
    {
    }

    public static readonly Currency14 Usd = new("USD");

    public static readonly Currency14 Cad = new("CAD");

    public TResult Match<TResult>(Func<TResult> onUsd, Func<TResult> onCad, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usd => onUsd(),
            _ when this == Cad => onCad(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsd, Action onCad, Action<string> otherwise)
    {
        if (this == Usd) onUsd();
        else if (this == Cad) onCad();
        else otherwise(Value);
    }
}
