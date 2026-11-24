using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Indicates the method used to match a payment transaction with a merchant or business classification code.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchType>))]
public sealed record MatchType : OpenStringEnum<MatchType>
{
    private MatchType(string value) : base(value)
    {
    }

    public static readonly MatchType MerchantFull = new("merchantFull");

    public static readonly MatchType MerchantPartial = new("merchantPartial");

    public static readonly MatchType Mcc = new("mcc");

    public static readonly MatchType Ml = new("ml");

    public TResult Match<TResult>(Func<TResult> onMerchantFull,
        Func<TResult> onMerchantPartial,
        Func<TResult> onMcc,
        Func<TResult> onMl,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MerchantFull => onMerchantFull(),
            _ when this == MerchantPartial => onMerchantPartial(),
            _ when this == Mcc => onMcc(),
            _ when this == Ml => onMl(),
            _ => otherwise(Value)
        };

    public void Match(Action onMerchantFull,
        Action onMerchantPartial,
        Action onMcc,
        Action onMl,
        Action<string> otherwise)
    {
        if (this == MerchantFull) onMerchantFull();
        else if (this == MerchantPartial) onMerchantPartial();
        else if (this == Mcc) onMcc();
        else if (this == Ml) onMl();
        else otherwise(Value);
    }
}
