using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MediaFormat>))]
public sealed record MediaFormat : OpenStringEnum<MediaFormat>
{
    private MediaFormat(string value) : base(value)
    {
    }

    public static readonly MediaFormat Photo = new("PHOTO");

    public static readonly MediaFormat Video = new("VIDEO");

    public TResult Match<TResult>(Func<TResult> onPhoto, Func<TResult> onVideo, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Photo => onPhoto(),
            _ when this == Video => onVideo(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhoto, Action onVideo, Action<string> otherwise)
    {
        if (this == Photo) onPhoto();
        else if (this == Video) onVideo();
        else otherwise(Value);
    }
}
