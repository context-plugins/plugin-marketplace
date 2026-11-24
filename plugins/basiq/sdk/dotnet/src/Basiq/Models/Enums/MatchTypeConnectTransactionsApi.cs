using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Indicates the method used to match a payment transaction with a merchant or business classification code. Description for each enum; merchantFull: Indicates an exact match between the transaction and a known merchant in the database. merchantPartial: Suggests a partial match with a merchant, usually based on substring or fuzzy logic. mcc: Match is done using the Merchant Category Code associated with the transaction. ml: Match is determined through machine learning algorithms for classification. none: Match is not found.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MatchTypeConnectTransactionsApi>))]
public sealed record MatchTypeConnectTransactionsApi : OpenStringEnum<MatchTypeConnectTransactionsApi>
{
    private MatchTypeConnectTransactionsApi(string value) : base(value)
    {
    }

    public static readonly MatchTypeConnectTransactionsApi MerchantFull = new("merchantFull");

    public static readonly MatchTypeConnectTransactionsApi MerchantPartial = new("merchantPartial");

    public static readonly MatchTypeConnectTransactionsApi Mcc = new("mcc");

    public static readonly MatchTypeConnectTransactionsApi Ml = new("ml");

    public static readonly MatchTypeConnectTransactionsApi None = new("none");

    public TResult Match<TResult>(Func<TResult> onMerchantFull,
        Func<TResult> onMerchantPartial,
        Func<TResult> onMcc,
        Func<TResult> onMl,
        Func<TResult> onNone,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MerchantFull => onMerchantFull(),
            _ when this == MerchantPartial => onMerchantPartial(),
            _ when this == Mcc => onMcc(),
            _ when this == Ml => onMl(),
            _ when this == None => onNone(),
            _ => otherwise(Value)
        };

    public void Match(Action onMerchantFull,
        Action onMerchantPartial,
        Action onMcc,
        Action onMl,
        Action onNone,
        Action<string> otherwise)
    {
        if (this == MerchantFull) onMerchantFull();
        else if (this == MerchantPartial) onMerchantPartial();
        else if (this == Mcc) onMcc();
        else if (this == Ml) onMl();
        else if (this == None) onNone();
        else otherwise(Value);
    }
}
