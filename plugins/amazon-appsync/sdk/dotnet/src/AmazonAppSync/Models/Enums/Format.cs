using System;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Enum;

namespace AmazonAppSync.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Format>))]
public sealed record Format : OpenStringEnum<Format>
{
    private Format(string value) : base(value)
    {
    }

    public static readonly Format Sdl = new("SDL");

    public static readonly Format Json = new("JSON");

    public TResult Match<TResult>(Func<TResult> onSdl, Func<TResult> onJson, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Sdl => onSdl(),
            _ when this == Json => onJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onSdl, Action onJson, Action<string> otherwise)
    {
        if (this == Sdl) onSdl();
        else if (this == Json) onJson();
        else otherwise(Value);
    }
}
