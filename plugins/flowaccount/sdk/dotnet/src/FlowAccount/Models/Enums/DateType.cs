using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = PublishDate
/// 3 = PaymentDate
/// 5 = ExpenseDate
/// 7 = TransitionDate
/// </summary>
[JsonConverter(typeof(IntEnumConverter<DateType>))]
public sealed record DateType : OpenIntEnum<DateType>
{
    private DateType(long value) : base(value)
    {
    }

    public static readonly DateType Value1 = new(1L);

    public static readonly DateType Value3 = new(3L);

    public static readonly DateType Value5 = new(5L);

    public static readonly DateType Value7 = new(7L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action onValue3, Action onValue5, Action onValue7, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else otherwise(Value);
    }
}
