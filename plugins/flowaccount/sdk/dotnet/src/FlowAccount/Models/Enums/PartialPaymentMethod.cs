using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = Default
/// 1 = None
/// 3 = Quantity
/// 5 = Price
/// 7 = Percentage
/// 11 = RECPartial
/// </summary>
[JsonConverter(typeof(IntEnumConverter<PartialPaymentMethod>))]
public sealed record PartialPaymentMethod : OpenIntEnum<PartialPaymentMethod>
{
    private PartialPaymentMethod(long value) : base(value)
    {
    }

    public static readonly PartialPaymentMethod Value0 = new(0L);

    public static readonly PartialPaymentMethod Value1 = new(1L);

    public static readonly PartialPaymentMethod Value3 = new(3L);

    public static readonly PartialPaymentMethod Value5 = new(5L);

    public static readonly PartialPaymentMethod Value7 = new(7L);

    public static readonly PartialPaymentMethod Value11 = new(11L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue11,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value11 => onValue11(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue11,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value11) onValue11();
        else otherwise(Value);
    }
}
