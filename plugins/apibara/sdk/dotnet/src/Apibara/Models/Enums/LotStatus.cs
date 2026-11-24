using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LotStatus>))]
public sealed record LotStatus : OpenStringEnum<LotStatus>
{
    private LotStatus(string value) : base(value)
    {
    }

    public static readonly LotStatus All = new("All");

    public static readonly LotStatus Timed = new("Timed");

    public static readonly LotStatus BuyNow = new("Buy Now");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onTimed,
        Func<TResult> onBuyNow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Timed => onTimed(),
            _ when this == BuyNow => onBuyNow(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onTimed, Action onBuyNow, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Timed) onTimed();
        else if (this == BuyNow) onBuyNow();
        else otherwise(Value);
    }
}
