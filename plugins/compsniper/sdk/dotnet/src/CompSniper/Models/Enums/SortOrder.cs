using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortOrder>))]
public sealed record SortOrder : OpenStringEnum<SortOrder>
{
    private SortOrder(string value) : base(value)
    {
    }

    public static readonly SortOrder EndedRecently = new("endedRecently");

    public static readonly SortOrder TimeNewlyListed = new("timeNewlyListed");

    public static readonly SortOrder PricePlusPostageLowest = new("pricePlusPostageLowest");

    public static readonly SortOrder PricePlusPostageHighest = new("pricePlusPostageHighest");

    public static readonly SortOrder DistanceNearest = new("distanceNearest");

    public TResult Match<TResult>(Func<TResult> onEndedRecently,
        Func<TResult> onTimeNewlyListed,
        Func<TResult> onPricePlusPostageLowest,
        Func<TResult> onPricePlusPostageHighest,
        Func<TResult> onDistanceNearest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EndedRecently => onEndedRecently(),
            _ when this == TimeNewlyListed => onTimeNewlyListed(),
            _ when this == PricePlusPostageLowest => onPricePlusPostageLowest(),
            _ when this == PricePlusPostageHighest => onPricePlusPostageHighest(),
            _ when this == DistanceNearest => onDistanceNearest(),
            _ => otherwise(Value)
        };

    public void Match(Action onEndedRecently,
        Action onTimeNewlyListed,
        Action onPricePlusPostageLowest,
        Action onPricePlusPostageHighest,
        Action onDistanceNearest,
        Action<string> otherwise)
    {
        if (this == EndedRecently) onEndedRecently();
        else if (this == TimeNewlyListed) onTimeNewlyListed();
        else if (this == PricePlusPostageLowest) onPricePlusPostageLowest();
        else if (this == PricePlusPostageHighest) onPricePlusPostageHighest();
        else if (this == DistanceNearest) onDistanceNearest();
        else otherwise(Value);
    }
}
