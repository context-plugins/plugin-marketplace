using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(IntEnumConverter<AuctionType>))]
public sealed record AuctionType : OpenIntEnum<AuctionType>
{
    private AuctionType(long value) : base(value)
    {
    }

    public static readonly AuctionType Value0 = new(0L);

    public static readonly AuctionType Value1 = new(1L);

    public static readonly AuctionType Value2 = new(2L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue2,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value2 => onValue2(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0, Action onValue1, Action onValue2, Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value2) onValue2();
        else otherwise(Value);
    }
}
