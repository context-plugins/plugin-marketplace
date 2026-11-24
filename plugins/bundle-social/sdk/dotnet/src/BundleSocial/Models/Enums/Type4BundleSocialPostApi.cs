using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type4BundleSocialPostApi>))]
public sealed record Type4BundleSocialPostApi : OpenStringEnum<Type4BundleSocialPostApi>
{
    private Type4BundleSocialPostApi(string value) : base(value)
    {
    }

    public static readonly Type4BundleSocialPostApi Video = new("VIDEO");

    public static readonly Type4BundleSocialPostApi Image = new("IMAGE");

    public TResult Match<TResult>(Func<TResult> onVideo, Func<TResult> onImage, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Video => onVideo(),
            _ when this == Image => onImage(),
            _ => otherwise(Value)
        };

    public void Match(Action onVideo, Action onImage, Action<string> otherwise)
    {
        if (this == Video) onVideo();
        else if (this == Image) onImage();
        else otherwise(Value);
    }
}
