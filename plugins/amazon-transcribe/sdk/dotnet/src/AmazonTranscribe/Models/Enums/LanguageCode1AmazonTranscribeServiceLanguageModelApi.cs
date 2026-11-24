using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The language code you selected for your custom language model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode1AmazonTranscribeServiceLanguageModelApi>))]
public sealed record LanguageCode1AmazonTranscribeServiceLanguageModelApi : OpenStringEnum<LanguageCode1AmazonTranscribeServiceLanguageModelApi>
{
    private LanguageCode1AmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi EnUs = new("en-US");

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi HiIn = new("hi-IN");

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi EsUs = new("es-US");

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi EnGb = new("en-GB");

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi EnAu = new("en-AU");

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi DeDe = new("de-DE");

    public static readonly LanguageCode1AmazonTranscribeServiceLanguageModelApi JaJp = new("ja-JP");

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
