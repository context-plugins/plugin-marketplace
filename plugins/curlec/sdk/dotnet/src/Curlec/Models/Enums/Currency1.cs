using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Always INR for transfers.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Currency1>))]
public sealed record Currency1 : OpenStringEnum<Currency1>
{
    private Currency1(string value) : base(value)
    {
    }

    public static readonly Currency1 Inr = new("INR");

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
