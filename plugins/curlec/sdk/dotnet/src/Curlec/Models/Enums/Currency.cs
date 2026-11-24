using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Currency>))]
public sealed record Currency : OpenStringEnum<Currency>
{
    private Currency(string value) : base(value)
    {
    }

    public static readonly Currency Inr = new("INR");

    public TResult Match<TResult>(Func<TResult> onInr, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Inr => onInr(),
            _ => otherwise(Value)
        };

    public void Match(Action onInr, Action<string> otherwise)
    {
        if (this == Inr) onInr();
        else otherwise(Value);
    }
}
