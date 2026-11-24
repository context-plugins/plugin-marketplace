using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

/// <summary>
/// A pdf cannot be visually diffed — pair it with diffMode <c>text</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FormatRendexRenderingWatchApi>))]
public sealed record FormatRendexRenderingWatchApi : OpenStringEnum<FormatRendexRenderingWatchApi>
{
    private FormatRendexRenderingWatchApi(string value) : base(value)
    {
    }

    public static readonly FormatRendexRenderingWatchApi Png = new("png");

    public static readonly FormatRendexRenderingWatchApi Jpeg = new("jpeg");

    public static readonly FormatRendexRenderingWatchApi Webp = new("webp");

    public static readonly FormatRendexRenderingWatchApi Pdf = new("pdf");

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
