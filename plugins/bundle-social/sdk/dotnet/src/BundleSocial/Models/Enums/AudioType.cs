using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AudioType>))]
public sealed record AudioType : OpenStringEnum<AudioType>
{
    private AudioType(string value) : base(value)
    {
    }

    public static readonly AudioType OriginalSound = new("original_sound");

    public static readonly AudioType Music = new("music");

    public TResult Match<TResult>(Func<TResult> onOriginalSound,
        Func<TResult> onMusic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OriginalSound => onOriginalSound(),
            _ when this == Music => onMusic(),
            _ => otherwise(Value)
        };

    public void Match(Action onOriginalSound, Action onMusic, Action<string> otherwise)
    {
        if (this == OriginalSound) onOriginalSound();
        else if (this == Music) onMusic();
        else otherwise(Value);
    }
}
