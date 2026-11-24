using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortOrder1>))]
public sealed record SortOrder1 : OpenStringEnum<SortOrder1>
{
    private SortOrder1(string value) : base(value)
    {
    }

    public static readonly SortOrder1 EndedRecently = new("endedRecently");

    public static readonly SortOrder1 TimeNewlyListed = new("timeNewlyListed");

    public static readonly SortOrder1 PricePlusPostageLowest = new("pricePlusPostageLowest");

    public static readonly SortOrder1 PricePlusPostageHighest = new("pricePlusPostageHighest");

    public TResult Match<TResult>(Func<TResult> onEndedRecently,
        Func<TResult> onTimeNewlyListed,
        Func<TResult> onPricePlusPostageLowest,
        Func<TResult> onPricePlusPostageHighest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EndedRecently => onEndedRecently(),
            _ when this == TimeNewlyListed => onTimeNewlyListed(),
            _ when this == PricePlusPostageLowest => onPricePlusPostageLowest(),
            _ when this == PricePlusPostageHighest => onPricePlusPostageHighest(),
            _ => otherwise(Value)
        };

    public void Match(Action onEndedRecently,
        Action onTimeNewlyListed,
        Action onPricePlusPostageLowest,
        Action onPricePlusPostageHighest,
        Action<string> otherwise)
    {
        if (this == EndedRecently) onEndedRecently();
        else if (this == TimeNewlyListed) onTimeNewlyListed();
        else if (this == PricePlusPostageLowest) onPricePlusPostageLowest();
        else if (this == PricePlusPostageHighest) onPricePlusPostageHighest();
        else otherwise(Value);
    }
}
