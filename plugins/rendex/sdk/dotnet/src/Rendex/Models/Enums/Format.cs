using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// Output format
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Png = new("png");

    public static readonly Format Jpeg = new("jpeg");

    public static readonly Format Webp = new("webp");

    public static readonly Format Pdf = new("pdf");

    public TResult Match<TResult>(Func<TResult> onPng,
        Func<TResult> onJpeg,
        Func<TResult> onWebp,
        Func<TResult> onPdf,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Png => onPng(),
            _ when this == Jpeg => onJpeg(),
            _ when this == Webp => onWebp(),
            _ when this == Pdf => onPdf(),
            _ => otherwise(Value)
        };

    public void Match(Action onPng, Action onJpeg, Action onWebp, Action onPdf, Action<string> otherwise)
    {
        if (this == Png) onPng();
        else if (this == Jpeg) onJpeg();
        else if (this == Webp) onWebp();
        else if (this == Pdf) onPdf();
        else otherwise(Value);
    }
}
