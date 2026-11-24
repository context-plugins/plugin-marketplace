using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Transport type
/// </summary>
[JsonConverter(typeof(IntEnumConverter<Transport2>))]
public sealed record Transport2 : OpenIntEnum<Transport2>
{
    private Transport2(long value) : base(value)
    {
    }

    public static readonly Transport2 Value1 = new(1L);

    public static readonly Transport2 Value4 = new(4L);

    public static readonly Transport2 Value5 = new(5L);

    public static readonly Transport2 Value10 = new(10L);

    public static readonly Transport2 Value12 = new(12L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue4,
        Func<TResult> onValue5,
        Func<TResult> onValue10,
        Func<TResult> onValue12,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value4 => onValue4(),
            _ when this == Value5 => onValue5(),
            _ when this == Value10 => onValue10(),
            _ when this == Value12 => onValue12(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue4,
        Action onValue5,
        Action onValue10,
        Action onValue12,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value4) onValue4();
        else if (this == Value5) onValue5();
        else if (this == Value10) onValue10();
        else if (this == Value12) onValue12();
        else otherwise(Value);
    }
}
