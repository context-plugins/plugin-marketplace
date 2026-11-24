using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<QrCodeFrameType>))]
public sealed record QrCodeFrameType : OpenStringEnum<QrCodeFrameType>
{
    private QrCodeFrameType(string value) : base(value)
    {
    }

    public static readonly QrCodeFrameType None = new("none");

    public static readonly QrCodeFrameType BorderOnly = new("border_only");

    public static readonly QrCodeFrameType TextBottom = new("text_bottom");

    public static readonly QrCodeFrameType TooltipBottom = new("tooltip_bottom");

    public static readonly QrCodeFrameType Arrow = new("arrow");

    public static readonly QrCodeFrameType TextTop = new("text_top");

    public static readonly QrCodeFrameType TextBottomInFrame = new("text_bottom_in_frame");

    public static readonly QrCodeFrameType Script = new("script");

    public static readonly QrCodeFrameType TextTopAndBottom = new("text_top_and_bottom");

    public static readonly QrCodeFrameType Url = new("url");

    public static readonly QrCodeFrameType Instagram = new("instagram");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onBorderOnly,
        Func<TResult> onTextBottom,
        Func<TResult> onTooltipBottom,
        Func<TResult> onArrow,
        Func<TResult> onTextTop,
        Func<TResult> onTextBottomInFrame,
        Func<TResult> onScript,
        Func<TResult> onTextTopAndBottom,
        Func<TResult> onUrl,
        Func<TResult> onInstagram,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == BorderOnly => onBorderOnly(),
            _ when this == TextBottom => onTextBottom(),
            _ when this == TooltipBottom => onTooltipBottom(),
            _ when this == Arrow => onArrow(),
            _ when this == TextTop => onTextTop(),
            _ when this == TextBottomInFrame => onTextBottomInFrame(),
            _ when this == Script => onScript(),
            _ when this == TextTopAndBottom => onTextTopAndBottom(),
            _ when this == Url => onUrl(),
            _ when this == Instagram => onInstagram(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onBorderOnly,
        Action onTextBottom,
        Action onTooltipBottom,
        Action onArrow,
        Action onTextTop,
        Action onTextBottomInFrame,
        Action onScript,
        Action onTextTopAndBottom,
        Action onUrl,
        Action onInstagram,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == BorderOnly) onBorderOnly();
        else if (this == TextBottom) onTextBottom();
        else if (this == TooltipBottom) onTooltipBottom();
        else if (this == Arrow) onArrow();
        else if (this == TextTop) onTextTop();
        else if (this == TextBottomInFrame) onTextBottomInFrame();
        else if (this == Script) onScript();
        else if (this == TextTopAndBottom) onTextTopAndBottom();
        else if (this == Url) onUrl();
        else if (this == Instagram) onInstagram();
        else otherwise(Value);
    }
}
