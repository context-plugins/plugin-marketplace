using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Salary
/// 3 = Commission
/// 5 = Licensing
/// 7 = Interest
/// 9 = NetProfit30
/// 11 = NetProfit25
/// 13 = NetProfit20
/// 15 = NetProfitOther
/// 17 = TaxExemption
/// 19 = DividenFromShareOfProfit
/// 21 = PortionOfNetProfit
/// 23 = RecognitionOfProfit
/// 25 = TaxOther
/// 27 = RevenueDepartmentTax
/// 29 = Others
/// </summary>
[JsonConverter(typeof(IntEnumConverter<IncomeType>))]
public sealed record IncomeType : OpenIntEnum<IncomeType>
{
    private IncomeType(long value) : base(value)
    {
    }

    public static readonly IncomeType Value1 = new(1L);

    public static readonly IncomeType Value3 = new(3L);

    public static readonly IncomeType Value5 = new(5L);

    public static readonly IncomeType Value7 = new(7L);

    public static readonly IncomeType Value9 = new(9L);

    public static readonly IncomeType Value11 = new(11L);

    public static readonly IncomeType Value13 = new(13L);

    public static readonly IncomeType Value15 = new(15L);

    public static readonly IncomeType Value17 = new(17L);

    public static readonly IncomeType Value19 = new(19L);

    public static readonly IncomeType Value21 = new(21L);

    public static readonly IncomeType Value23 = new(23L);

    public static readonly IncomeType Value25 = new(25L);

    public static readonly IncomeType Value27 = new(27L);

    public static readonly IncomeType Value29 = new(29L);

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
        Func<TResult> onValue21,
        Func<TResult> onValue23,
        Func<TResult> onValue25,
        Func<TResult> onValue27,
        Func<TResult> onValue29,
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
            _ when this == Value21 => onValue21(),
            _ when this == Value23 => onValue23(),
            _ when this == Value25 => onValue25(),
            _ when this == Value27 => onValue27(),
            _ when this == Value29 => onValue29(),
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
        Action onValue21,
        Action onValue23,
        Action onValue25,
        Action onValue27,
        Action onValue29,
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
        else if (this == Value21) onValue21();
        else if (this == Value23) onValue23();
        else if (this == Value25) onValue25();
        else if (this == Value27) onValue27();
        else if (this == Value29) onValue29();
        else otherwise(Value);
    }
}
