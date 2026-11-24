using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(IntEnumConverter<Min>))]
public sealed record Min : OpenIntEnum<Min>
{
    private Min(long value) : base(value)
    {
    }

    public static readonly Min Value0 = new(0L);

    public static readonly Min Value100000 = new(100000L);

    public static readonly Min Value1000000 = new(1000000L);

    public static readonly Min Value5000000 = new(5000000L);

    public static readonly Min Value10000000 = new(10000000L);

    public TResult Match<TResult>(Func<TResult> onValue0,
        Func<TResult> onValue100000,
        Func<TResult> onValue1000000,
        Func<TResult> onValue5000000,
        Func<TResult> onValue10000000,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value0 => onValue0(),
            _ when this == Value100000 => onValue100000(),
            _ when this == Value1000000 => onValue1000000(),
            _ when this == Value5000000 => onValue5000000(),
            _ when this == Value10000000 => onValue10000000(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue0,
        Action onValue100000,
        Action onValue1000000,
        Action onValue5000000,
        Action onValue10000000,
        Action<long> otherwise)
    {
        if (this == Value0) onValue0();
        else if (this == Value100000) onValue100000();
        else if (this == Value1000000) onValue1000000();
        else if (this == Value5000000) onValue5000000();
        else if (this == Value10000000) onValue10000000();
        else otherwise(Value);
    }
}
