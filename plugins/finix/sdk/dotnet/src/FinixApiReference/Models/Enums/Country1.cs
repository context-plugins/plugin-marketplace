using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Country of the Merchant's business
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Country1>))]
public sealed record Country1 : OpenStringEnum<Country1>
{
    private Country1(string value) : base(value)
    {
    }

    public static readonly Country1 Usa = new("USA");

    public static readonly Country1 Can = new("CAN");

    public TResult Match<TResult>(Func<TResult> onUsa, Func<TResult> onCan, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Usa => onUsa(),
            _ when this == Can => onCan(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsa, Action onCan, Action<string> otherwise)
    {
        if (this == Usa) onUsa();
        else if (this == Can) onCan();
        else otherwise(Value);
    }
}
