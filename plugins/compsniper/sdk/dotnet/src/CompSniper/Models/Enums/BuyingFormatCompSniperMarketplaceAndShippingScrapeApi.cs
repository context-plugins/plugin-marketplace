using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BuyingFormatCompSniperMarketplaceAndShippingScrapeApi>))]
public sealed record BuyingFormatCompSniperMarketplaceAndShippingScrapeApi : OpenStringEnum<BuyingFormatCompSniperMarketplaceAndShippingScrapeApi>
{
    private BuyingFormatCompSniperMarketplaceAndShippingScrapeApi(string value) : base(value)
    {
    }

    public static readonly BuyingFormatCompSniperMarketplaceAndShippingScrapeApi Auction = new("auction");

    public static readonly BuyingFormatCompSniperMarketplaceAndShippingScrapeApi BuyItNow = new("buyItNow");

    public static readonly BuyingFormatCompSniperMarketplaceAndShippingScrapeApi AuctionWithBin = new("auctionWithBIN");

    public TResult Match<TResult>(Func<TResult> onAuction,
        Func<TResult> onBuyItNow,
        Func<TResult> onAuctionWithBin,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auction => onAuction(),
            _ when this == BuyItNow => onBuyItNow(),
            _ when this == AuctionWithBin => onAuctionWithBin(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuction, Action onBuyItNow, Action onAuctionWithBin, Action<string> otherwise)
    {
        if (this == Auction) onAuction();
        else if (this == BuyItNow) onBuyItNow();
        else if (this == AuctionWithBin) onAuctionWithBin();
        else otherwise(Value);
    }
}
