using System;
using System.Text.Json.Serialization;
using Instagram.Core.Enum;

namespace Instagram.Models.Enums;

/// <summary>
/// Type of media to publish.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MediaTypeInstagramGraphPublishingApi>))]
public sealed record MediaTypeInstagramGraphPublishingApi : OpenStringEnum<MediaTypeInstagramGraphPublishingApi>
{
    private MediaTypeInstagramGraphPublishingApi(string value) : base(value)
    {
    }

    public static readonly MediaTypeInstagramGraphPublishingApi Image = new("IMAGE");

    public static readonly MediaTypeInstagramGraphPublishingApi Video = new("VIDEO");

    public static readonly MediaTypeInstagramGraphPublishingApi Reels = new("REELS");

    public static readonly MediaTypeInstagramGraphPublishingApi Stories = new("STORIES");

    public static readonly MediaTypeInstagramGraphPublishingApi Carousel = new("CAROUSEL");

    public TResult Match<TResult>(Func<TResult> onImage,
        Func<TResult> onVideo,
        Func<TResult> onReels,
        Func<TResult> onStories,
        Func<TResult> onCarousel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ when this == Reels => onReels(),
            _ when this == Stories => onStories(),
            _ when this == Carousel => onCarousel(),
            _ => otherwise(Value)
        };

    public void Match(Action onImage,
        Action onVideo,
        Action onReels,
        Action onStories,
        Action onCarousel,
        Action<string> otherwise)
    {
        if (this == Image) onImage();
        else if (this == Video) onVideo();
        else if (this == Reels) onReels();
        else if (this == Stories) onStories();
        else if (this == Carousel) onCarousel();
        else otherwise(Value);
    }
}
