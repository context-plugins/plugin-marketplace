using System;
using System.Text.Json.Serialization;
using Search1Api.Core.Enum;

namespace Search1Api.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Png = new("png");

    public static readonly Format Jpeg = new("jpeg");

    public static readonly Format Webp = new("webp");

    public TResult Match<TResult>(Func<TResult> onPng,
        Func<TResult> onJpeg,
        Func<TResult> onWebp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Png => onPng(),
            _ when this == Jpeg => onJpeg(),
            _ when this == Webp => onWebp(),
            _ => otherwise(Value)
        };

    public void Match(Action onPng, Action onJpeg, Action onWebp, Action<string> otherwise)
    {
        if (this == Png) onPng();
        else if (this == Jpeg) onJpeg();
        else if (this == Webp) onWebp();
        else otherwise(Value);
    }
}
