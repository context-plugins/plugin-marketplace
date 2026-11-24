using System;
using System.Text.Json.Serialization;
using Ortto.Core.Enum;

namespace Ortto.Models.Enums;

/// <summary>
/// 0 = any, 1 = sequential, 2 = all.
/// </summary>
[JsonConverter(typeof(IntEnumConverter<FindStrategy>))]
public sealed record FindStrategy : OpenIntEnum<FindStrategy>
{
    private FindStrategy(long value) : base(value)
    {
    }

    public static readonly FindStrategy Value0 = new(0L);

    public static readonly FindStrategy Value1 = new(1L);

    public static readonly FindStrategy Value2 = new(2L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue1,
        Func<TResult> onValue2,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value1 => onValue1(),
            _ when this == Value2 => onValue2(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0, Action onValue1, Action onValue2, Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value1) onValue1();
        else if (this == Value2) onValue2();
        else otherwise(Value);
    }
}
