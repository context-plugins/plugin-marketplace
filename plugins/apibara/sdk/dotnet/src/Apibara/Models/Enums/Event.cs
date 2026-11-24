using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event LotCreated = new("lot.created");

    public static readonly Event LotUpdated = new("lot.updated");

    public static readonly Event LotSold = new("lot.sold");

    public static readonly Event LotNotSold = new("lot.not_sold");

    public static readonly Event LotRemoved = new("lot.removed");

    public static readonly Event AuctionRescheduled = new("auction.rescheduled");

    public static readonly Event AuctionEnded = new("auction.ended");

    public static readonly Event BidChanged = new("bid.changed");

    public static readonly Event BuyNowChanged = new("buy_now.changed");

    public static readonly Event ReserveChanged = new("reserve.changed");

    public TResult Match<TResult>(Func<TResult> onLotCreated,
        Func<TResult> onLotUpdated,
        Func<TResult> onLotSold,
        Func<TResult> onLotNotSold,
        Func<TResult> onLotRemoved,
        Func<TResult> onAuctionRescheduled,
        Func<TResult> onAuctionEnded,
        Func<TResult> onBidChanged,
        Func<TResult> onBuyNowChanged,
        Func<TResult> onReserveChanged,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LotCreated => onLotCreated(),
            _ when this == LotUpdated => onLotUpdated(),
            _ when this == LotSold => onLotSold(),
            _ when this == LotNotSold => onLotNotSold(),
            _ when this == LotRemoved => onLotRemoved(),
            _ when this == AuctionRescheduled => onAuctionRescheduled(),
            _ when this == AuctionEnded => onAuctionEnded(),
            _ when this == BidChanged => onBidChanged(),
            _ when this == BuyNowChanged => onBuyNowChanged(),
            _ when this == ReserveChanged => onReserveChanged(),
            _ => otherwise(Value)
        };

    public void Match(Action onLotCreated,
        Action onLotUpdated,
        Action onLotSold,
        Action onLotNotSold,
        Action onLotRemoved,
        Action onAuctionRescheduled,
        Action onAuctionEnded,
        Action onBidChanged,
        Action onBuyNowChanged,
        Action onReserveChanged,
        Action<string> otherwise)
    {
        if (this == LotCreated) onLotCreated();
        else if (this == LotUpdated) onLotUpdated();
        else if (this == LotSold) onLotSold();
        else if (this == LotNotSold) onLotNotSold();
        else if (this == LotRemoved) onLotRemoved();
        else if (this == AuctionRescheduled) onAuctionRescheduled();
        else if (this == AuctionEnded) onAuctionEnded();
        else if (this == BidChanged) onBidChanged();
        else if (this == BuyNowChanged) onBuyNowChanged();
        else if (this == ReserveChanged) onReserveChanged();
        else otherwise(Value);
    }
}
