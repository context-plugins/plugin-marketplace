using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Dialing mode of the group this destination belongs to: <c>sequence</c> tries it alone, <c>ring_all</c> dials the whole group at once, <c>random</c> picks group members in a random order. Mirrors <c>callhunt</c> (<c>ring_all</c> maps to true).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DialingType>))]
public sealed record DialingType : OpenStringEnum<DialingType>
{
    private DialingType(string value) : base(value)
    {
    }

    public static readonly DialingType Sequence = new("sequence");

    public static readonly DialingType RingAll = new("ring_all");

    public static readonly DialingType Random = new("random");

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
