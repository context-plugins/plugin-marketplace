using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = None
/// 1 = Cash
/// 3 = Cheque
/// 5 = Transfer
/// 7 = CreditCard
/// 9 = PushPay
/// 11 = PettyCash
/// 13 = Other
/// 51 = TransferByKConnect
/// </summary>
[JsonConverter(typeof(IntEnumConverter<PaymentMethod>))]
public sealed record PaymentMethod : OpenIntEnum<PaymentMethod>
{
    private PaymentMethod(long value) : base(value)
    {
    }

    public static readonly PaymentMethod Value0 = new(0L);

    public static readonly PaymentMethod Value1 = new(1L);

    public static readonly PaymentMethod Value3 = new(3L);

    public static readonly PaymentMethod Value5 = new(5L);

    public static readonly PaymentMethod Value7 = new(7L);

    public static readonly PaymentMethod Value9 = new(9L);

    public static readonly PaymentMethod Value11 = new(11L);

    public static readonly PaymentMethod Value13 = new(13L);

    public static readonly PaymentMethod Value51 = new(51L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue51,
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
            _ when this == Value51 => onValue51(),
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
        Action onValue51,
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
        else if (this == Value51) onValue51();
        else otherwise(Value);
    }
}
