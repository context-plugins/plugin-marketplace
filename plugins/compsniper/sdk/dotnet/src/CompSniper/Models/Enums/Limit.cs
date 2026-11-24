using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Rows per page
/// </summary>
[JsonConverter(typeof(IntEnumConverter<Limit>))]
public sealed record Limit : OpenIntEnum<Limit>
{
    private Limit(long value) : base(value)
    {
    }

    public static readonly Limit Value10 = new(10L);

    public static readonly Limit Value20 = new(20L);

    public static readonly Limit Value50 = new(50L);

    public TResult Match<TResult>(Func<TResult> onValue10,
        Func<TResult> onValue20,
        Func<TResult> onValue50,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value10 => onValue10(),
            _ when this == Value20 => onValue20(),
            _ when this == Value50 => onValue50(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue10, Action onValue20, Action onValue50, Action<long> otherwise)
    {
        if (this == Value10) onValue10();
        else if (this == Value20) onValue20();
        else if (this == Value50) onValue50();
        else otherwise(Value);
    }
}
