using System;
using System.Text.Json.Serialization;
using Compabase.Core.Enum;

namespace Compabase.Models.Enums;

[JsonConverter(typeof(IntEnumConverter<Limit>))]
public sealed record Limit : OpenIntEnum<Limit>
{
    private Limit(long value) : base(value)
    {
    }

    public static readonly Limit Value6 = new(6L);

    public static readonly Limit Value20 = new(20L);

    public TResult Match<TResult>(Func<TResult> onValue6, Func<TResult> onValue20, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value6 => onValue6(),
            _ when this == Value20 => onValue20(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue6, Action onValue20, Action<long> otherwise)
    {
        if (this == Value6) onValue6();
        else if (this == Value20) onValue20();
        else otherwise(Value);
    }
}
