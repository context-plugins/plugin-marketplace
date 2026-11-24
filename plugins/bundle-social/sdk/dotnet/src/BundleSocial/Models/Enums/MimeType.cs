using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MimeType>))]
public sealed record MimeType : OpenStringEnum<MimeType>
{
    private MimeType(string value) : base(value)
    {
    }

    public static readonly MimeType ImageJpg = new("image/jpg");

    public static readonly MimeType ImageJpeg = new("image/jpeg");

    public static readonly MimeType ImagePng = new("image/png");

    public static readonly MimeType ImageGif = new("image/gif");

    public static readonly MimeType VideoMp4 = new("video/mp4");

    public static readonly MimeType VideoQuicktime = new("video/quicktime");

    public static readonly MimeType ApplicationPdf = new("application/pdf");

    public TResult Match<TResult>(Func<TResult> onImageJpg,
        Func<TResult> onImageJpeg,
        Func<TResult> onImagePng,
        Func<TResult> onImageGif,
        Func<TResult> onVideoMp4,
        Func<TResult> onVideoQuicktime,
        Func<TResult> onApplicationPdf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ImageJpg => onImageJpg(),
            _ when this == ImageJpeg => onImageJpeg(),
            _ when this == ImagePng => onImagePng(),
            _ when this == ImageGif => onImageGif(),
            _ when this == VideoMp4 => onVideoMp4(),
            _ when this == VideoQuicktime => onVideoQuicktime(),
            _ when this == ApplicationPdf => onApplicationPdf(),
            _ => otherwise(Value)
        };

    public void Match(Action onImageJpg,
        Action onImageJpeg,
        Action onImagePng,
        Action onImageGif,
        Action onVideoMp4,
        Action onVideoQuicktime,
        Action onApplicationPdf,
        Action<string> otherwise)
    {
        if (this == ImageJpg) onImageJpg();
        else if (this == ImageJpeg) onImageJpeg();
        else if (this == ImagePng) onImagePng();
        else if (this == ImageGif) onImageGif();
        else if (this == VideoMp4) onVideoMp4();
        else if (this == VideoQuicktime) onVideoQuicktime();
        else if (this == ApplicationPdf) onApplicationPdf();
        else otherwise(Value);
    }
}
