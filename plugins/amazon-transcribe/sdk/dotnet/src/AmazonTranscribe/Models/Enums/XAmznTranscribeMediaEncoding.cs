using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeMediaEncoding>))]
public sealed record XAmznTranscribeMediaEncoding : OpenStringEnum<XAmznTranscribeMediaEncoding>
{
    private XAmznTranscribeMediaEncoding(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeMediaEncoding Pcm = new("pcm");

    public static readonly XAmznTranscribeMediaEncoding OggOpus = new("ogg-opus");

    public static readonly XAmznTranscribeMediaEncoding Flac = new("flac");

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
