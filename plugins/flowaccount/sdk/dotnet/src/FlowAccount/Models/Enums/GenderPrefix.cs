using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Mr
/// 3 = Mrs
/// 5 = Ms
/// </summary>
[JsonConverter(typeof(IntEnumConverter<GenderPrefix>))]
public sealed record GenderPrefix : OpenIntEnum<GenderPrefix>
{
    private GenderPrefix(long value) : base(value)
    {
    }

    public static readonly GenderPrefix Value1 = new(1L);

    public static readonly GenderPrefix Value3 = new(3L);

    public static readonly GenderPrefix Value5 = new(5L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1, Action onValue3, Action onValue5, Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else otherwise(Value);
    }
}
