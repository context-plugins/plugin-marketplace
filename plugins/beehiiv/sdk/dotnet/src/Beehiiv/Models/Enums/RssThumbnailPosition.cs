using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The position of the thumbnail.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RssThumbnailPosition>))]
public sealed record RssThumbnailPosition : OpenStringEnum<RssThumbnailPosition>
{
    private RssThumbnailPosition(string value) : base(value)
    {
    }

    public static readonly RssThumbnailPosition AboveTitle = new("Above Title");

    public static readonly RssThumbnailPosition BelowTitle = new("Below Title");

    public static readonly RssThumbnailPosition LeftOfContent = new("Left of content");

    public static readonly RssThumbnailPosition RightOfContent = new("Right of content");

    public static readonly RssThumbnailPosition AlternatingHorizontally = new("Alternating Horizontally");

    public TResult Match<TResult>(Func<TResult> onAboveTitle,
        Func<TResult> onBelowTitle,
        Func<TResult> onLeftOfContent,
        Func<TResult> onRightOfContent,
        Func<TResult> onAlternatingHorizontally,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AboveTitle => onAboveTitle(),
            _ when this == BelowTitle => onBelowTitle(),
            _ when this == LeftOfContent => onLeftOfContent(),
            _ when this == RightOfContent => onRightOfContent(),
            _ when this == AlternatingHorizontally => onAlternatingHorizontally(),
            _ => otherwise(Value)
        };

    public void Match(Action onAboveTitle,
        Action onBelowTitle,
        Action onLeftOfContent,
        Action onRightOfContent,
        Action onAlternatingHorizontally,
        Action<string> otherwise)
    {
        if (this == AboveTitle) onAboveTitle();
        else if (this == BelowTitle) onBelowTitle();
        else if (this == LeftOfContent) onLeftOfContent();
        else if (this == RightOfContent) onRightOfContent();
        else if (this == AlternatingHorizontally) onAlternatingHorizontally();
        else otherwise(Value);
    }
}
