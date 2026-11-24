using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = Default
/// 1 = DisastersFire
/// 3 = StolenGoods
/// 5 = StockWrittenOff
/// 7 = StockTakingResults
/// 9 = ReturnedStock
/// 11 = DamagedGoods
/// 13 = RawMaterialUsed
/// 15 = FinishedGoodsTransfer
/// 17 = Other
/// </summary>
[JsonConverter(typeof(IntEnumConverter<AdjustInventoryReason>))]
public sealed record AdjustInventoryReason : OpenIntEnum<AdjustInventoryReason>
{
    private AdjustInventoryReason(long value) : base(value)
    {
    }

    public static readonly AdjustInventoryReason Value0 = new(0L);

    public static readonly AdjustInventoryReason Value1 = new(1L);

    public static readonly AdjustInventoryReason Value3 = new(3L);

    public static readonly AdjustInventoryReason Value5 = new(5L);

    public static readonly AdjustInventoryReason Value7 = new(7L);

    public static readonly AdjustInventoryReason Value9 = new(9L);

    public static readonly AdjustInventoryReason Value11 = new(11L);

    public static readonly AdjustInventoryReason Value13 = new(13L);

    public static readonly AdjustInventoryReason Value15 = new(15L);

    public static readonly AdjustInventoryReason Value17 = new(17L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<TResult> onValue17,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value11 => onValue11(),
            _ when this == Value13 => onValue13(),
            _ when this == Value15 => onValue15(),
            _ when this == Value17 => onValue17(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action onValue11,
        Action onValue13,
        Action onValue15,
        Action onValue17,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value11) onValue11();
        else if (this == Value13) onValue13();
        else if (this == Value15) onValue15();
        else if (this == Value17) onValue17();
        else otherwise(Value);
    }
}
