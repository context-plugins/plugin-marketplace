using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<MediaType1>))]
public sealed record MediaType1 : OpenStringEnum<MediaType1>
{
    private MediaType1(string value) : base(value)
    {
    }

    public static readonly MediaType1 AudioWav = new("audio/wav");

    public static readonly MediaType1 AudioMpeg = new("audio/mpeg");

    public static readonly MediaType1 AudioMp4 = new("audio/mp4");

    public static readonly MediaType1 AudioAac = new("audio/aac");

    public static readonly MediaType1 AudioOgg = new("audio/ogg");

    public static readonly MediaType1 AudioFlac = new("audio/flac");

    public static readonly MediaType1 AudioWebm = new("audio/webm");

    public static readonly MediaType1 AudioAiff = new("audio/aiff");

    public TResult Match<TResult>(Func<TResult> onAudioWav,
        Func<TResult> onAudioMpeg,
        Func<TResult> onAudioMp4,
        Func<TResult> onAudioAac,
        Func<TResult> onAudioOgg,
        Func<TResult> onAudioFlac,
        Func<TResult> onAudioWebm,
        Func<TResult> onAudioAiff,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AudioWav => onAudioWav(),
            _ when this == AudioMpeg => onAudioMpeg(),
            _ when this == AudioMp4 => onAudioMp4(),
            _ when this == AudioAac => onAudioAac(),
            _ when this == AudioOgg => onAudioOgg(),
            _ when this == AudioFlac => onAudioFlac(),
            _ when this == AudioWebm => onAudioWebm(),
            _ when this == AudioAiff => onAudioAiff(),
            _ => otherwise(Value)
        };

    public void Match(Action onAudioWav,
        Action onAudioMpeg,
        Action onAudioMp4,
        Action onAudioAac,
        Action onAudioOgg,
        Action onAudioFlac,
        Action onAudioWebm,
        Action onAudioAiff,
        Action<string> otherwise)
    {
        if (this == AudioWav) onAudioWav();
        else if (this == AudioMpeg) onAudioMpeg();
        else if (this == AudioMp4) onAudioMp4();
        else if (this == AudioAac) onAudioAac();
        else if (this == AudioOgg) onAudioOgg();
        else if (this == AudioFlac) onAudioFlac();
        else if (this == AudioWebm) onAudioWebm();
        else if (this == AudioAiff) onAudioAiff();
        else otherwise(Value);
    }
}
