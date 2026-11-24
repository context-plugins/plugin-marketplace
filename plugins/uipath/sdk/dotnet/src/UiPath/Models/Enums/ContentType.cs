using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// MIME type of the document being submitted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ContentType>))]
public sealed record ContentType : OpenStringEnum<ContentType>
{
    private ContentType(string value) : base(value)
    {
    }

    public static readonly ContentType ImageJpeg = new("image/jpeg");

    public static readonly ContentType ImagePng = new("image/png");

    public static readonly ContentType ApplicationPdf = new("application/pdf");

    public static readonly ContentType ImageTiff = new("image/tiff");

    public TResult Match<TResult>(Func<TResult> onImageJpeg,
        Func<TResult> onImagePng,
        Func<TResult> onApplicationPdf,
        Func<TResult> onImageTiff,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ImageJpeg => onImageJpeg(),
            _ when this == ImagePng => onImagePng(),
            _ when this == ApplicationPdf => onApplicationPdf(),
            _ when this == ImageTiff => onImageTiff(),
            _ => otherwise(Value)
        };

    public void Match(Action onImageJpeg,
        Action onImagePng,
        Action onApplicationPdf,
        Action onImageTiff,
        Action<string> otherwise)
    {
        if (this == ImageJpeg) onImageJpeg();
        else if (this == ImagePng) onImagePng();
        else if (this == ApplicationPdf) onApplicationPdf();
        else if (this == ImageTiff) onImageTiff();
        else otherwise(Value);
    }
}
