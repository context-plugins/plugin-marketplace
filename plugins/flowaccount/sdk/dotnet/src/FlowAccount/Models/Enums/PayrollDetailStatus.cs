using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = Draft
/// 1 = Awaiting
/// 2 = Reset
/// 3 = Paid
/// 4 = Partial
/// 5 = Rejected
/// 7 = Approved
/// 11 = PushPayAwaiting
/// 13 = PushPayProcessed
/// 15 = PushPayRejected
/// 17 = PushPayPartial
/// 19 = PushPayPendingPayments
/// 50 = KConnectAwaiting
/// 52 = KConnectProcessed
/// 54 = KConnectRejected
/// 56 = KConnectPendingPayments
/// 58 = KConnectPartialPayments
/// </summary>
[JsonConverter(typeof(IntEnumConverter<PayrollDetailStatus>))]
public sealed record PayrollDetailStatus : OpenIntEnum<PayrollDetailStatus>
{
    private PayrollDetailStatus(long value) : base(value)
    {
    }

    public static readonly PayrollDetailStatus Value0 = new(0L);

    public static readonly PayrollDetailStatus Value1 = new(1L);

    public static readonly PayrollDetailStatus Value2 = new(2L);

    public static readonly PayrollDetailStatus Value3 = new(3L);

    public static readonly PayrollDetailStatus Value4 = new(4L);

    public static readonly PayrollDetailStatus Value5 = new(5L);

    public static readonly PayrollDetailStatus Value7 = new(7L);

    public static readonly PayrollDetailStatus Value11 = new(11L);

    public static readonly PayrollDetailStatus Value13 = new(13L);

    public static readonly PayrollDetailStatus Value15 = new(15L);

    public static readonly PayrollDetailStatus Value17 = new(17L);

    public static readonly PayrollDetailStatus Value19 = new(19L);

    public static readonly PayrollDetailStatus Value50 = new(50L);

    public static readonly PayrollDetailStatus Value52 = new(52L);

    public static readonly PayrollDetailStatus Value54 = new(54L);

    public static readonly PayrollDetailStatus Value56 = new(56L);

    public static readonly PayrollDetailStatus Value58 = new(58L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue2,
        Func<TResult> onValue3,
        Func<TResult> onValue4,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<TResult> onValue17,
        Func<TResult> onValue19,
        Func<TResult> onValue50,
        Func<TResult> onValue52,
        Func<TResult> onValue54,
        Func<TResult> onValue56,
        Func<TResult> onValue58,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value2 => onValue2(),
            _ when this == Value3 => onValue3(),
            _ when this == Value4 => onValue4(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value11 => onValue11(),
            _ when this == Value13 => onValue13(),
            _ when this == Value15 => onValue15(),
            _ when this == Value17 => onValue17(),
            _ when this == Value19 => onValue19(),
            _ when this == Value50 => onValue50(),
            _ when this == Value52 => onValue52(),
            _ when this == Value54 => onValue54(),
            _ when this == Value56 => onValue56(),
            _ when this == Value58 => onValue58(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue1,
        Action onValue2,
        Action onValue3,
        Action onValue4,
        Action onValue5,
        Action onValue7,
        Action onValue11,
        Action onValue13,
        Action onValue15,
        Action onValue17,
        Action onValue19,
        Action onValue50,
        Action onValue52,
        Action onValue54,
        Action onValue56,
        Action onValue58,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value2) onValue2();
        else if (this == Value3) onValue3();
        else if (this == Value4) onValue4();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value11) onValue11();
        else if (this == Value13) onValue13();
        else if (this == Value15) onValue15();
        else if (this == Value17) onValue17();
        else if (this == Value19) onValue19();
        else if (this == Value50) onValue50();
        else if (this == Value52) onValue52();
        else if (this == Value54) onValue54();
        else if (this == Value56) onValue56();
        else if (this == Value58) onValue58();
        else otherwise(Value);
    }
}
