using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Usd = new("USD");

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
