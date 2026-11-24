using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = CurrentMonth
/// 3 = PreviousMonth
/// 5 = Manual
/// 7 = CurrentYear
/// 9 = PreviousYear
/// 11 = AsAt
/// 13 = Grid
/// 15 = FiscalYear
/// 17 = Months
/// 19 = Days
/// </summary>
[JsonConverter(typeof(IntEnumConverter<DataRange>))]
public sealed record DataRange : OpenIntEnum<DataRange>
{
    private DataRange(long value) : base(value)
    {
    }

    public static readonly DataRange Value1 = new(1L);

    public static readonly DataRange Value3 = new(3L);

    public static readonly DataRange Value5 = new(5L);

    public static readonly DataRange Value7 = new(7L);

    public static readonly DataRange Value9 = new(9L);

    public static readonly DataRange Value11 = new(11L);

    public static readonly DataRange Value13 = new(13L);

    public static readonly DataRange Value15 = new(15L);

    public static readonly DataRange Value17 = new(17L);

    public static readonly DataRange Value19 = new(19L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<TResult> onValue17,
        Func<TResult> onValue19,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value11 => onValue11(),
            _ when this == Value13 => onValue13(),
            _ when this == Value15 => onValue15(),
            _ when this == Value17 => onValue17(),
            _ when this == Value19 => onValue19(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action onValue11,
        Action onValue13,
        Action onValue15,
        Action onValue17,
        Action onValue19,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value11) onValue11();
        else if (this == Value13) onValue13();
        else if (this == Value15) onValue15();
        else if (this == Value17) onValue17();
        else if (this == Value19) onValue19();
        else otherwise(Value);
    }
}
