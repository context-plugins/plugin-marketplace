using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The color of the label.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Color>))]
public sealed record Color : OpenStringEnum<Color>
{
    private Color(string value) : base(value)
    {
    }

    public static readonly Color Blue = new("blue");

    public static readonly Color SkyBlue = new("skyBlue");

    public static readonly Color Teal = new("teal");

    public static readonly Color Mint = new("mint");

    public static readonly Color Lime = new("lime");

    public static readonly Color SoftYellow = new("softYellow");

    public static readonly Color Apricot = new("apricot");

    public static readonly Color Lavender = new("lavender");

    public static readonly Color Purple = new("purple");

    public static readonly Color RosePink = new("rosePink");

    public static readonly Color SlateGrey = new("slateGrey");

    public TResult Match<TResult>(Func<TResult> onBlue,
        Func<TResult> onSkyBlue,
        Func<TResult> onTeal,
        Func<TResult> onMint,
        Func<TResult> onLime,
        Func<TResult> onSoftYellow,
        Func<TResult> onApricot,
        Func<TResult> onLavender,
        Func<TResult> onPurple,
        Func<TResult> onRosePink,
        Func<TResult> onSlateGrey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Blue => onBlue(),
            _ when this == SkyBlue => onSkyBlue(),
            _ when this == Teal => onTeal(),
            _ when this == Mint => onMint(),
            _ when this == Lime => onLime(),
            _ when this == SoftYellow => onSoftYellow(),
            _ when this == Apricot => onApricot(),
            _ when this == Lavender => onLavender(),
            _ when this == Purple => onPurple(),
            _ when this == RosePink => onRosePink(),
            _ when this == SlateGrey => onSlateGrey(),
            _ => otherwise(Value)
        };

    public void Match(Action onBlue,
        Action onSkyBlue,
        Action onTeal,
        Action onMint,
        Action onLime,
        Action onSoftYellow,
        Action onApricot,
        Action onLavender,
        Action onPurple,
        Action onRosePink,
        Action onSlateGrey,
        Action<string> otherwise)
    {
        if (this == Blue) onBlue();
        else if (this == SkyBlue) onSkyBlue();
        else if (this == Teal) onTeal();
        else if (this == Mint) onMint();
        else if (this == Lime) onLime();
        else if (this == SoftYellow) onSoftYellow();
        else if (this == Apricot) onApricot();
        else if (this == Lavender) onLavender();
        else if (this == Purple) onPurple();
        else if (this == RosePink) onRosePink();
        else if (this == SlateGrey) onSlateGrey();
        else otherwise(Value);
    }
}
