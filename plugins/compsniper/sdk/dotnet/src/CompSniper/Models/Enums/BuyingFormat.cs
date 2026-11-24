using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BuyingFormat>))]
public sealed record BuyingFormat : OpenStringEnum<BuyingFormat>
{
    private BuyingFormat(string value) : base(value)
    {
    }

    public static readonly BuyingFormat All = new("all");

    public static readonly BuyingFormat Auction = new("auction");

    public static readonly BuyingFormat BuyItNow = new("buyItNow");

    public static readonly BuyingFormat AcceptsOffers = new("acceptsOffers");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onAuction,
        Func<TResult> onBuyItNow,
        Func<TResult> onAcceptsOffers,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Auction => onAuction(),
            _ when this == BuyItNow => onBuyItNow(),
            _ when this == AcceptsOffers => onAcceptsOffers(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll,
        Action onAuction,
        Action onBuyItNow,
        Action onAcceptsOffers,
        Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Auction) onAuction();
        else if (this == BuyItNow) onBuyItNow();
        else if (this == AcceptsOffers) onAcceptsOffers();
        else otherwise(Value);
    }
}
