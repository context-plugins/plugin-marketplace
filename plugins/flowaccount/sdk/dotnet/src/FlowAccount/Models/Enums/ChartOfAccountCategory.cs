using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Assets
/// 2 = Liabilities
/// 3 = Equity
/// 4 = Revenue
/// 5 = Expenses
/// </summary>
[JsonConverter(typeof(IntEnumConverter<ChartOfAccountCategory>))]
public sealed record ChartOfAccountCategory : OpenIntEnum<ChartOfAccountCategory>
{
    private ChartOfAccountCategory(long value) : base(value)
    {
    }

    public static readonly ChartOfAccountCategory Value1 = new(1L);

    public static readonly ChartOfAccountCategory Value2 = new(2L);

    public static readonly ChartOfAccountCategory Value3 = new(3L);

    public static readonly ChartOfAccountCategory Value4 = new(4L);

    public static readonly ChartOfAccountCategory Value5 = new(5L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue2,
        Func<TResult> onValue3,
        Func<TResult> onValue4,
        Func<TResult> onValue5,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value2 => onValue2(),
            _ when this == Value3 => onValue3(),
            _ when this == Value4 => onValue4(),
            _ when this == Value5 => onValue5(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue2,
        Action onValue3,
        Action onValue4,
        Action onValue5,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value2) onValue2();
        else if (this == Value3) onValue3();
        else if (this == Value4) onValue4();
        else if (this == Value5) onValue5();
        else otherwise(Value);
    }
}
