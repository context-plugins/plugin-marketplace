using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MediaType>))]
public sealed record MediaType : OpenStringEnum<MediaType>
{
    private MediaType(string value) : base(value)
    {
    }

    public static readonly MediaType ImageJpeg = new("image/jpeg");

    public static readonly MediaType ImagePng = new("image/png");

    public static readonly MediaType ImageGif = new("image/gif");

    public static readonly MediaType ImageWebp = new("image/webp");

    public TResult Match<TResult>(Func<TResult> onImageJpeg,
        Func<TResult> onImagePng,
        Func<TResult> onImageGif,
        Func<TResult> onImageWebp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ImageJpeg => onImageJpeg(),
            _ when this == ImagePng => onImagePng(),
            _ when this == ImageGif => onImageGif(),
            _ when this == ImageWebp => onImageWebp(),
            _ => otherwise(Value)
        };

    public void Match(Action onImageJpeg,
        Action onImagePng,
        Action onImageGif,
        Action onImageWebp,
        Action<string> otherwise)
    {
        if (this == ImageJpeg) onImageJpeg();
        else if (this == ImagePng) onImagePng();
        else if (this == ImageGif) onImageGif();
        else if (this == ImageWebp) onImageWebp();
        else otherwise(Value);
    }
}
