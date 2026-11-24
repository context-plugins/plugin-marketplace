using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0 to 255).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ColorRange>))]
public sealed record ColorRange : OpenStringEnum<ColorRange>
{
    private ColorRange(string value) : base(value)
    {
    }

    public static readonly ColorRange Full = new("FULL");

    public static readonly ColorRange Limited = new("LIMITED");

    public TResult Match<TResult>(Func<TResult> onFull, Func<TResult> onLimited, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Full => onFull(),
            _ when this == Limited => onLimited(),
            _ => otherwise(Value)
        };

    public void Match(Action onFull, Action onLimited, Action<string> otherwise)
    {
        if (this == Full) onFull();
        else if (this == Limited) onLimited();
        else otherwise(Value);
    }
}
