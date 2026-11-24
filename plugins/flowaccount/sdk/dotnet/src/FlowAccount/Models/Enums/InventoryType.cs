using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 3 = Initial
/// 5 = BroughtForward
/// 7 = In
/// 11 = TransferIn
/// 17 = Out
/// 21 = TransferOut
/// 25 = CreditNote
/// 27 = DebitNote
/// 29 = InternalUse
/// 31 = Hold
/// 35 = AdjustIn
/// 39 = AdjustOut
/// </summary>
[JsonConverter(typeof(IntEnumConverter<InventoryType>))]
public sealed record InventoryType : OpenIntEnum<InventoryType>
{
    private InventoryType(long value) : base(value)
    {
    }

    public static readonly InventoryType Value3 = new(3L);

    public static readonly InventoryType Value5 = new(5L);

    public static readonly InventoryType Value7 = new(7L);

    public static readonly InventoryType Value11 = new(11L);

    public static readonly InventoryType Value17 = new(17L);

    public static readonly InventoryType Value21 = new(21L);

    public static readonly InventoryType Value25 = new(25L);

    public static readonly InventoryType Value27 = new(27L);

    public static readonly InventoryType Value29 = new(29L);

    public static readonly InventoryType Value31 = new(31L);

    public static readonly InventoryType Value35 = new(35L);

    public static readonly InventoryType Value39 = new(39L);

    public TResult Match<TResult>(Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue11,
        Func<TResult> onValue17,
        Func<TResult> onValue21,
        Func<TResult> onValue25,
        Func<TResult> onValue27,
        Func<TResult> onValue29,
        Func<TResult> onValue31,
        Func<TResult> onValue35,
        Func<TResult> onValue39,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value11 => onValue11(),
            _ when this == Value17 => onValue17(),
            _ when this == Value21 => onValue21(),
            _ when this == Value25 => onValue25(),
            _ when this == Value27 => onValue27(),
            _ when this == Value29 => onValue29(),
            _ when this == Value31 => onValue31(),
            _ when this == Value35 => onValue35(),
            _ when this == Value39 => onValue39(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue11,
        Action onValue17,
        Action onValue21,
        Action onValue25,
        Action onValue27,
        Action onValue29,
        Action onValue31,
        Action onValue35,
        Action onValue39,
        Action<long> otherwise)
    {
        if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value11) onValue11();
        else if (this == Value17) onValue17();
        else if (this == Value21) onValue21();
        else if (this == Value25) onValue25();
        else if (this == Value27) onValue27();
        else if (this == Value29) onValue29();
        else if (this == Value31) onValue31();
        else if (this == Value35) onValue35();
        else if (this == Value39) onValue39();
        else otherwise(Value);
    }
}
