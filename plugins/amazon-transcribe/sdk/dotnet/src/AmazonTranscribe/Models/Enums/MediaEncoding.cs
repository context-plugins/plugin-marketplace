using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Media Encoding of the HealthScribe streaming session.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MediaEncoding>))]
public sealed record MediaEncoding : OpenStringEnum<MediaEncoding>
{
    private MediaEncoding(string value) : base(value)
    {
    }

    public static readonly MediaEncoding Pcm = new("pcm");

    public static readonly MediaEncoding OggOpus = new("ogg-opus");

    public static readonly MediaEncoding Flac = new("flac");

    public TResult Match<TResult>(Func<TResult> onPcm,
        Func<TResult> onOggOpus,
        Func<TResult> onFlac,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pcm => onPcm(),
            _ when this == OggOpus => onOggOpus(),
            _ when this == Flac => onFlac(),
            _ => otherwise(Value)
        };

    public void Match(Action onPcm, Action onOggOpus, Action onFlac, Action<string> otherwise)
    {
        if (this == Pcm) onPcm();
        else if (this == OggOpus) onOggOpus();
        else if (this == Flac) onFlac();
        else otherwise(Value);
    }
}
