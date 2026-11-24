using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi>))]
public sealed record EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi : OpenStringEnum<EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi>
{
    private EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi(string value) : base(value)
    {
    }

    public static readonly EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi EbayCom = new("ebay.com");

    public TResult Match<TResult>(Func<TResult> onEbayCom, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EbayCom => onEbayCom(),
            _ => otherwise(Value)
        };

    public void Match(Action onEbayCom, Action<string> otherwise)
    {
        if (this == EbayCom) onEbayCom();
        else otherwise(Value);
    }
}
