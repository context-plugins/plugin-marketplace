using System;
using System.Text.Json.Serialization;
using ForceDream.Core.Enum;

namespace ForceDream.Models.Enums;

/// <summary>
/// 8 for proofs without external_cost_hash, 10 for proofs with it.
/// </summary>
[JsonConverter(typeof(IntEnumConverter<FieldsSigned>))]
public sealed record FieldsSigned : OpenIntEnum<FieldsSigned>
{
    private FieldsSigned(long value) : base(value)
    {
    }

    public static readonly FieldsSigned Value8 = new(8L);

    public static readonly FieldsSigned Value10 = new(10L);

    public TResult Match<TResult>(Func<TResult> onValue8, Func<TResult> onValue10, Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value8 => onValue8(),
            _ when this == Value10 => onValue10(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue8, Action onValue10, Action<long> otherwise)
    {
        if (this == Value8) onValue8();
        else if (this == Value10) onValue10();
        else otherwise(Value);
    }
}
