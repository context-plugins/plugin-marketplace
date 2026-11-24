using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Awaiting
/// 3 = Approved
/// 4 = PendingPayment
/// 5 = Paid
/// 6 = PaidByPaymentSlip
/// 7 = Void
/// 9 = ApprovedAndProcessed
/// 11 = Received
/// 23 = ReceivedByPaymentSlip
/// </summary>
[JsonConverter(typeof(IntEnumConverter<ExpenseStatus>))]
public sealed record ExpenseStatus : OpenIntEnum<ExpenseStatus>
{
    private ExpenseStatus(long value) : base(value)
    {
    }

    public static readonly ExpenseStatus Value1 = new(1L);

    public static readonly ExpenseStatus Value3 = new(3L);

    public static readonly ExpenseStatus Value4 = new(4L);

    public static readonly ExpenseStatus Value5 = new(5L);

    public static readonly ExpenseStatus Value6 = new(6L);

    public static readonly ExpenseStatus Value7 = new(7L);

    public static readonly ExpenseStatus Value9 = new(9L);

    public static readonly ExpenseStatus Value11 = new(11L);

    public static readonly ExpenseStatus Value23 = new(23L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue4,
        Func<TResult> onValue5,
        Func<TResult> onValue6,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue23,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value4 => onValue4(),
            _ when this == Value5 => onValue5(),
            _ when this == Value6 => onValue6(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value11 => onValue11(),
            _ when this == Value23 => onValue23(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue4,
        Action onValue5,
        Action onValue6,
        Action onValue7,
        Action onValue9,
        Action onValue11,
        Action onValue23,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value4) onValue4();
        else if (this == Value5) onValue5();
        else if (this == Value6) onValue6();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value11) onValue11();
        else if (this == Value23) onValue23();
        else otherwise(Value);
    }
}
