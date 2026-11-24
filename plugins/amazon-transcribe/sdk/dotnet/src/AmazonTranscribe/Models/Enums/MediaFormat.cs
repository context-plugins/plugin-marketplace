using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The format of the input media file.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MediaFormat>))]
public sealed record MediaFormat : OpenStringEnum<MediaFormat>
{
    private MediaFormat(string value) : base(value)
    {
    }

    public static readonly MediaFormat Mp3 = new("mp3");

    public static readonly MediaFormat Mp4 = new("mp4");

    public static readonly MediaFormat Wav = new("wav");

    public static readonly MediaFormat Flac = new("flac");

    public static readonly MediaFormat Ogg = new("ogg");

    public static readonly MediaFormat Amr = new("amr");

    public static readonly MediaFormat Webm = new("webm");

    public static readonly MediaFormat M4A = new("m4a");

    public TResult Match<TResult>(Func<TResult> onMp3,
        Func<TResult> onMp4,
        Func<TResult> onWav,
        Func<TResult> onFlac,
        Func<TResult> onOgg,
        Func<TResult> onAmr,
        Func<TResult> onWebm,
        Func<TResult> onM4A,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Mp3 => onMp3(),
            _ when this == Mp4 => onMp4(),
            _ when this == Wav => onWav(),
            _ when this == Flac => onFlac(),
            _ when this == Ogg => onOgg(),
            _ when this == Amr => onAmr(),
            _ when this == Webm => onWebm(),
            _ when this == M4A => onM4A(),
            _ => otherwise(Value)
        };

    public void Match(Action onMp3,
        Action onMp4,
        Action onWav,
        Action onFlac,
        Action onOgg,
        Action onAmr,
        Action onWebm,
        Action onM4A,
        Action<string> otherwise)
    {
        if (this == Mp3) onMp3();
        else if (this == Mp4) onMp4();
        else if (this == Wav) onWav();
        else if (this == Flac) onFlac();
        else if (this == Ogg) onOgg();
        else if (this == Amr) onAmr();
        else if (this == Webm) onWebm();
        else if (this == M4A) onM4A();
        else otherwise(Value);
    }
}
