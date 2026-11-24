using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// Inline formatting to apply to a formatted text section. <c>strikethrough</c> renders as a strike mark.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParagraphBlockTextStyle>))]
public sealed record ParagraphBlockTextStyle : OpenStringEnum<ParagraphBlockTextStyle>
{
    private ParagraphBlockTextStyle(string value) : base(value)
    {
    }

    public static readonly ParagraphBlockTextStyle Bold = new("bold");

    public static readonly ParagraphBlockTextStyle Italic = new("italic");

    public static readonly ParagraphBlockTextStyle Underline = new("underline");

    public static readonly ParagraphBlockTextStyle Strikethrough = new("strikethrough");

    public TResult Match<TResult>(Func<TResult> onBold,
        Func<TResult> onItalic,
        Func<TResult> onUnderline,
        Func<TResult> onStrikethrough,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Bold => onBold(),
            _ when this == Italic => onItalic(),
            _ when this == Underline => onUnderline(),
            _ when this == Strikethrough => onStrikethrough(),
            _ => otherwise(Value)
        };

    public void Match(Action onBold,
        Action onItalic,
        Action onUnderline,
        Action onStrikethrough,
        Action<string> otherwise)
    {
        if (this == Bold) onBold();
        else if (this == Italic) onItalic();
        else if (this == Underline) onUnderline();
        else if (this == Strikethrough) onStrikethrough();
        else otherwise(Value);
    }
}
