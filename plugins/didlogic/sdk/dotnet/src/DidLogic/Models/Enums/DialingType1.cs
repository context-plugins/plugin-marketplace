using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Dialing mode of the group this destination belongs to: <c>sequence</c> tries it alone, <c>ring_all</c> dials the whole group at once, <c>random</c> picks group members in a random order. Mirrors <c>callhunt</c> (<c>ring_all</c> maps to true). Takes precedence over <c>callhunt</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DialingType1>))]
public sealed record DialingType1 : OpenStringEnum<DialingType1>
{
    private DialingType1(string value) : base(value)
    {
    }

    public static readonly DialingType1 Sequence = new("sequence");

    public static readonly DialingType1 RingAll = new("ring_all");

    public static readonly DialingType1 Random = new("random");

    public TResult Match<TResult>(Func<TResult> onSequence,
        Func<TResult> onRingAll,
        Func<TResult> onRandom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sequence => onSequence(),
            _ when this == RingAll => onRingAll(),
            _ when this == Random => onRandom(),
            _ => otherwise(Value)
        };

    public void Match(Action onSequence, Action onRingAll, Action onRandom, Action<string> otherwise)
    {
        if (this == Sequence) onSequence();
        else if (this == RingAll) onRingAll();
        else if (this == Random) onRandom();
        else otherwise(Value);
    }
}
