using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The language code that represents the language of your model. Each custom language model must contain terms in only one language, and the language you select for your custom language model must match the language of your training and tuning data. For a list of supported languages and their associated language codes, refer to the Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe Medical. A custom language model can only be used to transcribe files in the same language as the model. For example, if you create a custom language model usi
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCodeAmazonTranscribeServiceLanguageModelApi>))]
public sealed record LanguageCodeAmazonTranscribeServiceLanguageModelApi : OpenStringEnum<LanguageCodeAmazonTranscribeServiceLanguageModelApi>
{
    private LanguageCodeAmazonTranscribeServiceLanguageModelApi(string value) : base(value)
    {
    }

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi EnUs = new("en-US");

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi HiIn = new("hi-IN");

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi EsUs = new("es-US");

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi EnGb = new("en-GB");

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi EnAu = new("en-AU");

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi DeDe = new("de-DE");

    public static readonly LanguageCodeAmazonTranscribeServiceLanguageModelApi JaJp = new("ja-JP");

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
