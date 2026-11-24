using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format4>))]
public sealed record Format4 : OpenStringEnum<Format4>
{
    private Format4(string value) : base(value)
    {
    }

    public static readonly Format4 Pdf = new("pdf");

    public static readonly Format4 Png = new("png");

    public TResult Match<TResult>(Func<TResult> onPdf, Func<TResult> onPng, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pdf => onPdf(),
            _ when this == Png => onPng(),
            _ => otherwise(Value)
        };

    public void Match(Action onPdf, Action onPng, Action<string> otherwise)
    {
        if (this == Pdf) onPdf();
        else if (this == Png) onPng();
        else otherwise(Value);
    }
}
