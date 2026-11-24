using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Condition filter
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ItemConditionCompSniperMarketplaceAndShippingMercariApi>))]
public sealed record ItemConditionCompSniperMarketplaceAndShippingMercariApi : OpenStringEnum<ItemConditionCompSniperMarketplaceAndShippingMercariApi>
{
    private ItemConditionCompSniperMarketplaceAndShippingMercariApi(string value) : base(value)
    {
    }

    public static readonly ItemConditionCompSniperMarketplaceAndShippingMercariApi Any = new("any");

    public static readonly ItemConditionCompSniperMarketplaceAndShippingMercariApi New = new("new");

    public static readonly ItemConditionCompSniperMarketplaceAndShippingMercariApi LikeNew = new("likeNew");

    public static readonly ItemConditionCompSniperMarketplaceAndShippingMercariApi Good = new("good");

    public static readonly ItemConditionCompSniperMarketplaceAndShippingMercariApi Fair = new("fair");

    public static readonly ItemConditionCompSniperMarketplaceAndShippingMercariApi Poor = new("poor");

    public TResult Match<TResult>(Func<TResult> onAny,
        Func<TResult> onNew,
        Func<TResult> onLikeNew,
        Func<TResult> onGood,
        Func<TResult> onFair,
        Func<TResult> onPoor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Any => onAny(),
            _ when this == New => onNew(),
            _ when this == LikeNew => onLikeNew(),
            _ when this == Good => onGood(),
            _ when this == Fair => onFair(),
            _ when this == Poor => onPoor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAny,
        Action onNew,
        Action onLikeNew,
        Action onGood,
        Action onFair,
        Action onPoor,
        Action<string> otherwise)
    {
        if (this == Any) onAny();
        else if (this == New) onNew();
        else if (this == LikeNew) onLikeNew();
        else if (this == Good) onGood();
        else if (this == Fair) onFair();
        else if (this == Poor) onPoor();
        else otherwise(Value);
    }
}
