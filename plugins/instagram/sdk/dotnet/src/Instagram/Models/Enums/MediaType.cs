using System;
using System.Text.Json.Serialization;
using Instagram.Core.Enum;

namespace Instagram.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MediaType>))]
public sealed record MediaType : OpenStringEnum<MediaType>
{
    private MediaType(string value) : base(value)
    {
    }

    public static readonly MediaType Image = new("IMAGE");

    public static readonly MediaType Video = new("VIDEO");

    public static readonly MediaType CarouselAlbum = new("CAROUSEL_ALBUM");

    public static readonly MediaType Reels = new("REELS");

    public static readonly MediaType Stories = new("STORIES");

    public TResult Match<TResult>(Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onCarouselAlbum,
        Func<TResult> onReels,
        Func<TResult> onStories,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == CarouselAlbum => onCarouselAlbum(),
            _ when this == Reels => onReels(),
            _ when this == Stories => onStories(),
            _ => otherwise(Value)
        };

    public void Match(Action onImage,
        Action onVideo,
        Action onCarouselAlbum,
        Action onReels,
        Action onStories,
        Action<string> otherwise)
    {
        if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == CarouselAlbum) onCarouselAlbum();
        else if (this == Reels) onReels();
        else if (this == Stories) onStories();
        else otherwise(Value);
    }
}
