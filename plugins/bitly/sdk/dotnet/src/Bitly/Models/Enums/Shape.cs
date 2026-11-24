using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// The shape one of the QR code's corners should take
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Shape>))]
public sealed record Shape : OpenStringEnum<Shape>
{
    private Shape(string value) : base(value)
    {
    }

    public static readonly Shape Standard = new("standard");

    public static readonly Shape SlightlyRound = new("slightly_round");

    public static readonly Shape Rounded = new("rounded");

    public static readonly Shape ExtraRound = new("extra_round");

    public static readonly Shape Leaf = new("leaf");

    public static readonly Shape LeafInner = new("leaf_inner");

    public static readonly Shape LeafOuter = new("leaf_outer");

    public static readonly Shape Target = new("target");

    public static readonly Shape Concave = new("concave");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onSlightlyRound,
        Func<TResult> onRounded,
        Func<TResult> onExtraRound,
        Func<TResult> onLeaf,
        Func<TResult> onLeafInner,
        Func<TResult> onLeafOuter,
        Func<TResult> onTarget,
        Func<TResult> onConcave,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == SlightlyRound => onSlightlyRound(),
            _ when this == Rounded => onRounded(),
            _ when this == ExtraRound => onExtraRound(),
            _ when this == Leaf => onLeaf(),
            _ when this == LeafInner => onLeafInner(),
            _ when this == LeafOuter => onLeafOuter(),
            _ when this == Target => onTarget(),
            _ when this == Concave => onConcave(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onSlightlyRound,
        Action onRounded,
        Action onExtraRound,
        Action onLeaf,
        Action onLeafInner,
        Action onLeafOuter,
        Action onTarget,
        Action onConcave,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == SlightlyRound) onSlightlyRound();
        else if (this == Rounded) onRounded();
        else if (this == ExtraRound) onExtraRound();
        else if (this == Leaf) onLeaf();
        else if (this == LeafInner) onLeafInner();
        else if (this == LeafOuter) onLeafOuter();
        else if (this == Target) onTarget();
        else if (this == Concave) onConcave();
        else otherwise(Value);
    }
}
