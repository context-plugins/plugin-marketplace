using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// 1 = cancel at end of current cycle; 0 = cancel immediately.
/// </summary>
[JsonConverter(typeof(IntEnumConverter<CancelAtCycleEnd>))]
public sealed record CancelAtCycleEnd : OpenIntEnum<CancelAtCycleEnd>
{
    private CancelAtCycleEnd(long value) : base(value)
    {
    }

    public static readonly CancelAtCycleEnd Value0 = new(0L);

    public static readonly CancelAtCycleEnd Value1 = new(1L);

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
