using System;
using System.Text.Json.Serialization;
using Zillapi.Core.Enum;

namespace Zillapi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExtractBuildingUnits>))]
public sealed record ExtractBuildingUnits : OpenStringEnum<ExtractBuildingUnits>
{
    private ExtractBuildingUnits(string value) : base(value)
    {
    }

    public static readonly ExtractBuildingUnits Disabled = new("disabled");

    public static readonly ExtractBuildingUnits All = new("all");

    public static readonly ExtractBuildingUnits ForSale = new("for_sale");

    public static readonly ExtractBuildingUnits RecentlySold = new("recently_sold");

    public static readonly ExtractBuildingUnits ForRent = new("for_rent");

    public static readonly ExtractBuildingUnits OffMarket = new("off_market");

    public TResult Match<TResult>(Func<TResult> onDisabled,
        Func<TResult> onAll,
        Func<TResult> onForSale,
        Func<TResult> onRecentlySold,
        Func<TResult> onForRent,
        Func<TResult> onOffMarket,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Disabled => onDisabled(),
            _ when this == All => onAll(),
            _ when this == ForSale => onForSale(),
            _ when this == RecentlySold => onRecentlySold(),
            _ when this == ForRent => onForRent(),
            _ when this == OffMarket => onOffMarket(),
            _ => otherwise(Value)
        };

    public void Match(Action onDisabled,
        Action onAll,
        Action onForSale,
        Action onRecentlySold,
        Action onForRent,
        Action onOffMarket,
        Action<string> otherwise)
    {
        if (this == Disabled) onDisabled();
        else if (this == All) onAll();
        else if (this == ForSale) onForSale();
        else if (this == RecentlySold) onRecentlySold();
        else if (this == ForRent) onForRent();
        else if (this == OffMarket) onOffMarket();
        else otherwise(Value);
    }
}
