using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 0 = Or
/// 1 = And
/// </summary>
[JsonConverter(typeof(IntEnumConverter<PredicateOperator>))]
public sealed record PredicateOperator : OpenIntEnum<PredicateOperator>
{
    private PredicateOperator(long value) : base(value)
    {
    }

    public static readonly PredicateOperator Value0 = new(0L);

    public static readonly PredicateOperator Value1 = new(1L);

    public TResult Match<TResult>(Func<TResult> onValue0, Func<TResult> onValue1, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0, Action onValue1, Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else otherwise(Value);
    }
}
