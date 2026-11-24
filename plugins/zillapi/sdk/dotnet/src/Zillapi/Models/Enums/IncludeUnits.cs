using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IncludeUnits>))]
public sealed record IncludeUnits : OpenStringEnum<IncludeUnits>
{
    private IncludeUnits(string value) : base(value)
    {
    }

    public static readonly IncludeUnits All = new("all");

    public static readonly IncludeUnits ForSale = new("for_sale");

    public static readonly IncludeUnits ForRent = new("for_rent");

    public static readonly IncludeUnits RecentlySold = new("recently_sold");

    public static readonly IncludeUnits OffMarket = new("off_market");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onForSale,
        Func<TResult> onForRent,
        Func<TResult> onRecentlySold,
        Func<TResult> onOffMarket,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == ForSale => onForSale(),
            _ when this == ForRent => onForRent(),
            _ when this == RecentlySold => onRecentlySold(),
            _ when this == OffMarket => onOffMarket(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onForSale,
        Action onForRent,
        Action onRecentlySold,
        Action onOffMarket,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == ForSale) onForSale();
        else if (this == ForRent) onForRent();
        else if (this == RecentlySold) onRecentlySold();
        else if (this == OffMarket) onOffMarket();
        else otherwise(Value);
    }
}
