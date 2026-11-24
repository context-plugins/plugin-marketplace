using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 Video = new("VIDEO");

    public static readonly Type3 Image = new("IMAGE");

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
