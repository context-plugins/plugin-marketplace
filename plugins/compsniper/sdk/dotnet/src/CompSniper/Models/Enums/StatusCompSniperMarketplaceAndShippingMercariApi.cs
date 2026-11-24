using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCompSniperMarketplaceAndShippingMercariApi>))]
public sealed record StatusCompSniperMarketplaceAndShippingMercariApi : OpenStringEnum<StatusCompSniperMarketplaceAndShippingMercariApi>
{
    private StatusCompSniperMarketplaceAndShippingMercariApi(string value) : base(value)
    {
    }

    public static readonly StatusCompSniperMarketplaceAndShippingMercariApi Sold = new("sold");

    public static readonly StatusCompSniperMarketplaceAndShippingMercariApi Active = new("active");

    public TResult Match<TResult>(Func<TResult> onSold, Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sold => onSold(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onSold, Action onActive, Action<string> otherwise)
    {
        if (this == Sold) onSold();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
