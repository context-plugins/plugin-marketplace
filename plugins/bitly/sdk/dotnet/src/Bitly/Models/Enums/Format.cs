using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Svg = new("svg");

    public static readonly Format Png = new("png");

    public TResult Match<TResult>(Func<TResult> onSvg, Func<TResult> onPng, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Svg => onSvg(),
            _ when this == Png => onPng(),
            _ => otherwise(Value)
        };

    public void Match(Action onSvg, Action onPng, Action<string> otherwise)
    {
        if (this == Svg) onSvg();
        else if (this == Png) onPng();
        else otherwise(Value);
    }
}
