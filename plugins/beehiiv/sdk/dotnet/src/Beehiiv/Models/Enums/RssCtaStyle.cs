using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The style of the call to action.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RssCtaStyle>))]
public sealed record RssCtaStyle : OpenStringEnum<RssCtaStyle>
{
    private RssCtaStyle(string value) : base(value)
    {
    }

    public static readonly RssCtaStyle CtaButton = new("CTA button");

    public static readonly RssCtaStyle CtaLink = new("CTA link");

    public static readonly RssCtaStyle TitleAsLink = new("Title as link");

    public static readonly RssCtaStyle ThumbnailAsLink = new("Thumbnail as link");

    public static readonly RssCtaStyle TitleAndThumbnailAsLink = new("Title and thumbnail as link");

    public TResult Match<TResult>(Func<TResult> onCtaButton,
        Func<TResult> onCtaLink,
        Func<TResult> onTitleAsLink,
        Func<TResult> onThumbnailAsLink,
        Func<TResult> onTitleAndThumbnailAsLink,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CtaButton => onCtaButton(),
            _ when this == CtaLink => onCtaLink(),
            _ when this == TitleAsLink => onTitleAsLink(),
            _ when this == ThumbnailAsLink => onThumbnailAsLink(),
            _ when this == TitleAndThumbnailAsLink => onTitleAndThumbnailAsLink(),
            _ => otherwise(Value)
        };

    public void Match(Action onCtaButton,
        Action onCtaLink,
        Action onTitleAsLink,
        Action onThumbnailAsLink,
        Action onTitleAndThumbnailAsLink,
        Action<string> otherwise)
    {
        if (this == CtaButton) onCtaButton();
        else if (this == CtaLink) onCtaLink();
        else if (this == TitleAsLink) onTitleAsLink();
        else if (this == ThumbnailAsLink) onThumbnailAsLink();
        else if (this == TitleAndThumbnailAsLink) onTitleAndThumbnailAsLink();
        else otherwise(Value);
    }
}
