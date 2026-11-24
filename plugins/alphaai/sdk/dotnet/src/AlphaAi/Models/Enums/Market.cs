using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Market>))]
public sealed record Market : OpenStringEnum<Market>
{
    private Market(string value) : base(value)
    {
    }

    public static readonly Market All = new("all");

    public static readonly Market UsEquity = new("us_equity");

    public static readonly Market Crypto = new("crypto");

    public static readonly Market International = new("international");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onUsEquity,
        Func<TResult> onCrypto,
        Func<TResult> onInternational,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == UsEquity => onUsEquity(),
            _ when this == Crypto => onCrypto(),
            _ when this == International => onInternational(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onUsEquity,
        Action onCrypto,
        Action onInternational,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == UsEquity) onUsEquity();
        else if (this == Crypto) onCrypto();
        else if (this == International) onInternational();
        else otherwise(Value);
    }
}
