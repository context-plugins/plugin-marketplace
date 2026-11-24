using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Indicates the method used to match a payment transaction with a merchant or business classification code. Description for each enum; merchantFull: Indicates an exact match between the transaction and a known merchant in the database. merchantPartial: Suggests a partial match with a merchant, usually based on substring or fuzzy logic. mcc: Match is done using the Merchant Category Code associated with the transaction. ml: Match is determined through machine learning algorithms for classification
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchType1>))]
public sealed record MatchType1 : OpenStringEnum<MatchType1>
{
    private MatchType1(string value) : base(value)
    {
    }

    public static readonly MatchType1 MerchantFull = new("merchantFull");

    public static readonly MatchType1 MerchantPartial = new("merchantPartial");

    public static readonly MatchType1 Mcc = new("mcc");

    public static readonly MatchType1 Ml = new("ml");

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
