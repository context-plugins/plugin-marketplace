using System;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Enum;

namespace GoogleCloudSpeechToText.Models.Enums;

/// <summary>
/// Encoding of audio data sent in all <c>RecognitionAudio</c> messages. This field is optional for <c>FLAC</c> and <c>WAV</c> audio files and required for all other audio formats. For details, see AudioEncoding.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Encoding>))]
public sealed record Encoding : OpenStringEnum<Encoding>
{
    private Encoding(string value) : base(value)
    {
    }

    public static readonly Encoding EncodingUnspecified = new("ENCODING_UNSPECIFIED");

    public static readonly Encoding Linear16 = new("LINEAR16");

    public static readonly Encoding Flac = new("FLAC");

    public static readonly Encoding Mulaw = new("MULAW");

    public static readonly Encoding Amr = new("AMR");

    public static readonly Encoding AmrWb = new("AMR_WB");

    public static readonly Encoding OggOpus = new("OGG_OPUS");

    public static readonly Encoding SpeexWithHeaderByte = new("SPEEX_WITH_HEADER_BYTE");

    public static readonly Encoding Mp3 = new("MP3");

    public static readonly Encoding WebmOpus = new("WEBM_OPUS");

    public static readonly Encoding Alaw = new("ALAW");

    public TResult Match<TResult>(Func<TResult> onEncodingUnspecified,
        Func<TResult> onLinear16,
        Func<TResult> onFlac,
        Func<TResult> onMulaw,
        Func<TResult> onAmr,
        Func<TResult> onAmrWb,
        Func<TResult> onOggOpus,
        Func<TResult> onSpeexWithHeaderByte,
        Func<TResult> onMp3,
        Func<TResult> onWebmOpus,
        Func<TResult> onAlaw,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EncodingUnspecified => onEncodingUnspecified(),
            _ when this == Linear16 => onLinear16(),
            _ when this == Flac => onFlac(),
            _ when this == Mulaw => onMulaw(),
            _ when this == Amr => onAmr(),
            _ when this == AmrWb => onAmrWb(),
            _ when this == OggOpus => onOggOpus(),
            _ when this == SpeexWithHeaderByte => onSpeexWithHeaderByte(),
            _ when this == Mp3 => onMp3(),
            _ when this == WebmOpus => onWebmOpus(),
            _ when this == Alaw => onAlaw(),
            _ => otherwise(Value)
        };

    public void Match(Action onEncodingUnspecified,
        Action onLinear16,
        Action onFlac,
        Action onMulaw,
        Action onAmr,
        Action onAmrWb,
        Action onOggOpus,
        Action onSpeexWithHeaderByte,
        Action onMp3,
        Action onWebmOpus,
        Action onAlaw,
        Action<string> otherwise)
    {
        if (this == EncodingUnspecified) onEncodingUnspecified();
        else if (this == Linear16) onLinear16();
        else if (this == Flac) onFlac();
        else if (this == Mulaw) onMulaw();
        else if (this == Amr) onAmr();
        else if (this == AmrWb) onAmrWb();
        else if (this == OggOpus) onOggOpus();
        else if (this == SpeexWithHeaderByte) onSpeexWithHeaderByte();
        else if (this == Mp3) onMp3();
        else if (this == WebmOpus) onWebmOpus();
        else if (this == Alaw) onAlaw();
        else otherwise(Value);
    }
}
