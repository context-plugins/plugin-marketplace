using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// MIME type of the uploaded file.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MimeType>))]
public sealed record MimeType : OpenStringEnum<MimeType>
{
    private MimeType(string value) : base(value)
    {
    }

    public static readonly MimeType ImageJpg = new("image/jpg");

    public static readonly MimeType ImageJpeg = new("image/jpeg");

    public static readonly MimeType ImagePng = new("image/png");

    public static readonly MimeType ApplicationPdf = new("application/pdf");

    public TResult Match<TResult>(Func<TResult> onImageJpg,
        Func<TResult> onImageJpeg,
        Func<TResult> onImagePng,
        Func<TResult> onApplicationPdf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ImageJpg => onImageJpg(),
            _ when this == ImageJpeg => onImageJpeg(),
            _ when this == ImagePng => onImagePng(),
            _ when this == ApplicationPdf => onApplicationPdf(),
            _ => otherwise(Value)
        };

    public void Match(Action onImageJpg,
        Action onImageJpeg,
        Action onImagePng,
        Action onApplicationPdf,
        Action<string> otherwise)
    {
        if (this == ImageJpg) onImageJpg();
        else if (this == ImageJpeg) onImageJpeg();
        else if (this == ImagePng) onImagePng();
        else if (this == ApplicationPdf) onApplicationPdf();
        else otherwise(Value);
    }
}
