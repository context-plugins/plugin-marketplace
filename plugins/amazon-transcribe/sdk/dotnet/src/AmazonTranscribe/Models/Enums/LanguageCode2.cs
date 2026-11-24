using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The language code used to create your custom language model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode2>))]
public sealed record LanguageCode2 : OpenStringEnum<LanguageCode2>
{
    private LanguageCode2(string value) : base(value)
    {
    }

    public static readonly LanguageCode2 EnUs = new("en-US");

    public static readonly LanguageCode2 HiIn = new("hi-IN");

    public static readonly LanguageCode2 EsUs = new("es-US");

    public static readonly LanguageCode2 EnGb = new("en-GB");

    public static readonly LanguageCode2 EnAu = new("en-AU");

    public static readonly LanguageCode2 DeDe = new("de-DE");

    public static readonly LanguageCode2 JaJp = new("ja-JP");

    public TResult Match<TResult>(Func<TResult> onEnUs,
        Func<TResult> onHiIn,
        Func<TResult> onEsUs,
        Func<TResult> onEnGb,
        Func<TResult> onEnAu,
        Func<TResult> onDeDe,
        Func<TResult> onJaJp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnUs => onEnUs(),
            _ when this == HiIn => onHiIn(),
            _ when this == EsUs => onEsUs(),
            _ when this == EnGb => onEnGb(),
            _ when this == EnAu => onEnAu(),
            _ when this == DeDe => onDeDe(),
            _ when this == JaJp => onJaJp(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnUs,
        Action onHiIn,
        Action onEsUs,
        Action onEnGb,
        Action onEnAu,
        Action onDeDe,
        Action onJaJp,
        Action<string> otherwise)
    {
        if (this == EnUs) onEnUs();
        else if (this == HiIn) onHiIn();
        else if (this == EsUs) onEsUs();
        else if (this == EnGb) onEnGb();
        else if (this == EnAu) onEnAu();
        else if (this == DeDe) onDeDe();
        else if (this == JaJp) onJaJp();
        else otherwise(Value);
    }
}
