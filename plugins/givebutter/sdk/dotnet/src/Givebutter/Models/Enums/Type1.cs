using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Image = new("image");

    public static readonly Type1 Video = new("video");

    public TResult Match<TResult>(Func<TResult> onImage, Func<TResult> onVideo, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Image => onImage(),
            _ when this == Video => onVideo(),
            _ => otherwise(Value)
        };

    public void Match(Action onImage, Action onVideo, Action<string> otherwise)
    {
        if (this == Image) onImage();
        else if (this == Video) onVideo();
        else otherwise(Value);
    }
}
