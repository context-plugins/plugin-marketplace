using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Pdf = new("pdf");

    public static readonly Format Tiff = new("tiff");

    public TResult Match<TResult>(Func<TResult> onPdf, Func<TResult> onTiff, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pdf => onPdf(),
            _ when this == Tiff => onTiff(),
            _ => otherwise(Value)
        };

    public void Match(Action onPdf, Action onTiff, Action<string> otherwise)
    {
        if (this == Pdf) onPdf();
        else if (this == Tiff) onTiff();
        else otherwise(Value);
    }
}
