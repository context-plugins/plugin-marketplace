using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type7>))]
public sealed record Type7 : OpenStringEnum<Type7>
{
    private Type7(string value) : base(value)
    {
    }

    public static readonly Type7 Post = new("POST");

    public static readonly Type7 Reel = new("REEL");

    public static readonly Type7 Story = new("STORY");

    public static readonly Type7 Video = new("VIDEO");

    public static readonly Type7 Image = new("IMAGE");

    public TResult Match<TResult>(Func<TResult> onPost,
        Func<TResult> onReel,
        Func<TResult> onStory,
        Func<TResult> onVideo,
        Func<TResult> onImage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Post => onPost(),
            _ when this == Reel => onReel(),
            _ when this == Story => onStory(),
            _ when this == Video => onVideo(),
            _ when this == Image => onImage(),
            _ => otherwise(Value)
        };

    public void Match(Action onPost,
        Action onReel,
        Action onStory,
        Action onVideo,
        Action onImage,
        Action<string> otherwise)
    {
        if (this == Post) onPost();
        else if (this == Reel) onReel();
        else if (this == Story) onStory();
        else if (this == Video) onVideo();
        else if (this == Image) onImage();
        else otherwise(Value);
    }
}
