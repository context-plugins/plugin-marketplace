using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeMediaEncoding1>))]
public sealed record XAmznTranscribeMediaEncoding1 : OpenStringEnum<XAmznTranscribeMediaEncoding1>
{
    private XAmznTranscribeMediaEncoding1(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeMediaEncoding1 Pcm = new("pcm");

    public static readonly XAmznTranscribeMediaEncoding1 OggOpus = new("ogg-opus");

    public static readonly XAmznTranscribeMediaEncoding1 Flac = new("flac");

    public static readonly XAmznTranscribeMediaEncoding1 G711Alaw = new("g711-alaw");

    public static readonly XAmznTranscribeMediaEncoding1 G711Ulaw = new("g711-ulaw");

    public static readonly XAmznTranscribeMediaEncoding1 G729 = new("g729");

    public TResult Match<TResult>(Func<TResult> onPcm,
        Func<TResult> onOggOpus,
        Func<TResult> onFlac,
        Func<TResult> onG711Alaw,
        Func<TResult> onG711Ulaw,
        Func<TResult> onG729,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pcm => onPcm(),
            _ when this == OggOpus => onOggOpus(),
            _ when this == Flac => onFlac(),
            _ when this == G711Alaw => onG711Alaw(),
            _ when this == G711Ulaw => onG711Ulaw(),
            _ when this == G729 => onG729(),
            _ => otherwise(Value)
        };

    public void Match(Action onPcm,
        Action onOggOpus,
        Action onFlac,
        Action onG711Alaw,
        Action onG711Ulaw,
        Action onG729,
        Action<string> otherwise)
    {
        if (this == Pcm) onPcm();
        else if (this == OggOpus) onOggOpus();
        else if (this == Flac) onFlac();
        else if (this == G711Alaw) onG711Alaw();
        else if (this == G711Ulaw) onG711Ulaw();
        else if (this == G729) onG729();
        else otherwise(Value);
    }
}
