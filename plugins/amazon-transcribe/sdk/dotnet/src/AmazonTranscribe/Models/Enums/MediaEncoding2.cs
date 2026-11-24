using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The Media Encoding you specified in your request. Same as provided in the StartMedicalScribeStreamRequest
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MediaEncoding2>))]
public sealed record MediaEncoding2 : OpenStringEnum<MediaEncoding2>
{
    private MediaEncoding2(string value) : base(value)
    {
    }

    public static readonly MediaEncoding2 Pcm = new("pcm");

    public static readonly MediaEncoding2 OggOpus = new("ogg-opus");

    public static readonly MediaEncoding2 Flac = new("flac");

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
