using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = Delete
/// 1 = Awaiting
/// 5 = Approved
/// 9 = Void
/// -9 = ResetVoid
/// -5 = ResetApproved
/// -1 = ResetAwaiting
/// </summary>
[JsonConverter(typeof(IntEnumConverter<BookOfAccountStatus>))]
public sealed record BookOfAccountStatus : OpenIntEnum<BookOfAccountStatus>
{
    private BookOfAccountStatus(long value) : base(value)
    {
    }

    public static readonly BookOfAccountStatus Value0 = new(0L);

    public static readonly BookOfAccountStatus Value1 = new(1L);

    public static readonly BookOfAccountStatus Value5 = new(5L);

    public static readonly BookOfAccountStatus Value9 = new(9L);

    public static readonly BookOfAccountStatus Negative9 = new(-9L);

    public static readonly BookOfAccountStatus Negative5 = new(-5L);

    public static readonly BookOfAccountStatus Negative1 = new(-1L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue5,
        Func<TResult> onValue9,
        Func<TResult> onNegative9,
        Func<TResult> onNegative5,
        Func<TResult> onNegative1,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value5 => onValue5(),
            _ when this == Value9 => onValue9(),
            _ when this == Negative9 => onNegative9(),
            _ when this == Negative5 => onNegative5(),
            _ when this == Negative1 => onNegative1(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue1,
        Action onValue5,
        Action onValue9,
        Action onNegative9,
        Action onNegative5,
        Action onNegative1,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value5) onValue5();
        else if (this == Value9) onValue9();
        else if (this == Negative9) onNegative9();
        else if (this == Negative5) onNegative5();
        else if (this == Negative1) onNegative1();
        else otherwise(Value);
    }
}
