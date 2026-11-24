using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeLanguageCode1>))]
public sealed record XAmznTranscribeLanguageCode1 : OpenStringEnum<XAmznTranscribeLanguageCode1>
{
    private XAmznTranscribeLanguageCode1(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeLanguageCode1 EnUs = new("en-US");

    public static readonly XAmznTranscribeLanguageCode1 EnGb = new("en-GB");

    public static readonly XAmznTranscribeLanguageCode1 EsUs = new("es-US");

    public static readonly XAmznTranscribeLanguageCode1 FrCa = new("fr-CA");

    public static readonly XAmznTranscribeLanguageCode1 FrFr = new("fr-FR");

    public static readonly XAmznTranscribeLanguageCode1 EnAu = new("en-AU");

    public static readonly XAmznTranscribeLanguageCode1 ItIt = new("it-IT");

    public static readonly XAmznTranscribeLanguageCode1 DeDe = new("de-DE");

    public static readonly XAmznTranscribeLanguageCode1 PtBr = new("pt-BR");

    public TResult Match<TResult>(Func<TResult> onEnUs,
        Func<TResult> onEnGb,
        Func<TResult> onEsUs,
        Func<TResult> onFrCa,
        Func<TResult> onFrFr,
        Func<TResult> onEnAu,
        Func<TResult> onItIt,
        Func<TResult> onDeDe,
        Func<TResult> onPtBr,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnUs => onEnUs(),
            _ when this == EnGb => onEnGb(),
            _ when this == EsUs => onEsUs(),
            _ when this == FrCa => onFrCa(),
            _ when this == FrFr => onFrFr(),
            _ when this == EnAu => onEnAu(),
            _ when this == ItIt => onItIt(),
            _ when this == DeDe => onDeDe(),
            _ when this == PtBr => onPtBr(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnUs,
        Action onEnGb,
        Action onEsUs,
        Action onFrCa,
        Action onFrFr,
        Action onEnAu,
        Action onItIt,
        Action onDeDe,
        Action onPtBr,
        Action<string> otherwise)
    {
        if (this == EnUs) onEnUs();
        else if (this == EnGb) onEnGb();
        else if (this == EsUs) onEsUs();
        else if (this == FrCa) onFrCa();
        else if (this == FrFr) onFrFr();
        else if (this == EnAu) onEnAu();
        else if (this == ItIt) onItIt();
        else if (this == DeDe) onDeDe();
        else if (this == PtBr) onPtBr();
        else otherwise(Value);
    }
}
