using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<QrCodeDotPatternType>))]
public sealed record QrCodeDotPatternType : OpenStringEnum<QrCodeDotPatternType>
{
    private QrCodeDotPatternType(string value) : base(value)
    {
    }

    public static readonly QrCodeDotPatternType Standard = new("standard");

    public static readonly QrCodeDotPatternType Circle = new("circle");

    public static readonly QrCodeDotPatternType Block = new("block");

    public static readonly QrCodeDotPatternType Blob = new("blob");

    public static readonly QrCodeDotPatternType Rounded = new("rounded");

    public static readonly QrCodeDotPatternType Vertical = new("vertical");

    public static readonly QrCodeDotPatternType Horizontal = new("horizontal");

    public static readonly QrCodeDotPatternType Triangle = new("triangle");

    public static readonly QrCodeDotPatternType Heart = new("heart");

    public static readonly QrCodeDotPatternType Star = new("star");

    public static readonly QrCodeDotPatternType Diamond = new("diamond");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onCircle,
        Func<TResult> onBlock,
        Func<TResult> onBlob,
        Func<TResult> onRounded,
        Func<TResult> onVertical,
        Func<TResult> onHorizontal,
        Func<TResult> onTriangle,
        Func<TResult> onHeart,
        Func<TResult> onStar,
        Func<TResult> onDiamond,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Circle => onCircle(),
            _ when this == Block => onBlock(),
            _ when this == Blob => onBlob(),
            _ when this == Rounded => onRounded(),
            _ when this == Vertical => onVertical(),
            _ when this == Horizontal => onHorizontal(),
            _ when this == Triangle => onTriangle(),
            _ when this == Heart => onHeart(),
            _ when this == Star => onStar(),
            _ when this == Diamond => onDiamond(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onCircle,
        Action onBlock,
        Action onBlob,
        Action onRounded,
        Action onVertical,
        Action onHorizontal,
        Action onTriangle,
        Action onHeart,
        Action onStar,
        Action onDiamond,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Circle) onCircle();
        else if (this == Block) onBlock();
        else if (this == Blob) onBlob();
        else if (this == Rounded) onRounded();
        else if (this == Vertical) onVertical();
        else if (this == Horizontal) onHorizontal();
        else if (this == Triangle) onTriangle();
        else if (this == Heart) onHeart();
        else if (this == Star) onStar();
        else if (this == Diamond) onDiamond();
        else otherwise(Value);
    }
}
