using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// eBay marketplace
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi>))]
public sealed record EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi : OpenStringEnum<EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi>
{
    private EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi(string value) : base(value)
    {
    }

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayCom = new("ebay.com");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayCoUk = new("ebay.co.uk");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayComAu = new("ebay.com.au");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayCa = new("ebay.ca");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayDe = new("ebay.de");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayFr = new("ebay.fr");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayIt = new("ebay.it");

    public static readonly EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi EbayEs = new("ebay.es");

    public TResult Match<TResult>(Func<TResult> onEbayCom,
        Func<TResult> onEbayCoUk,
        Func<TResult> onEbayComAu,
        Func<TResult> onEbayCa,
        Func<TResult> onEbayDe,
        Func<TResult> onEbayFr,
        Func<TResult> onEbayIt,
        Func<TResult> onEbayEs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EbayCom => onEbayCom(),
            _ when this == EbayCoUk => onEbayCoUk(),
            _ when this == EbayComAu => onEbayComAu(),
            _ when this == EbayCa => onEbayCa(),
            _ when this == EbayDe => onEbayDe(),
            _ when this == EbayFr => onEbayFr(),
            _ when this == EbayIt => onEbayIt(),
            _ when this == EbayEs => onEbayEs(),
            _ => otherwise(Value)
        };

    public void Match(Action onEbayCom,
        Action onEbayCoUk,
        Action onEbayComAu,
        Action onEbayCa,
        Action onEbayDe,
        Action onEbayFr,
        Action onEbayIt,
        Action onEbayEs,
        Action<string> otherwise)
    {
        if (this == EbayCom) onEbayCom();
        else if (this == EbayCoUk) onEbayCoUk();
        else if (this == EbayComAu) onEbayComAu();
        else if (this == EbayCa) onEbayCa();
        else if (this == EbayDe) onEbayDe();
        else if (this == EbayFr) onEbayFr();
        else if (this == EbayIt) onEbayIt();
        else if (this == EbayEs) onEbayEs();
        else otherwise(Value);
    }
}
