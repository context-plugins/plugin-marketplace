using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = EmpWithOutOT
/// 3 = EmpWithOT
/// 5 = EmpByDayHour
/// 7 = Owner
/// </summary>
[JsonConverter(typeof(IntEnumConverter<EmployeeTypes>))]
public sealed record EmployeeTypes : OpenIntEnum<EmployeeTypes>
{
    private EmployeeTypes(long value) : base(value)
    {
    }

    public static readonly EmployeeTypes Value1 = new(1L);

    public static readonly EmployeeTypes Value3 = new(3L);

    public static readonly EmployeeTypes Value5 = new(5L);

    public static readonly EmployeeTypes Value7 = new(7L);

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
