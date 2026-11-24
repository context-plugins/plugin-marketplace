using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the preferred language that you specified in your Call Analytics request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PreferredLanguage>))]
public sealed record PreferredLanguage : OpenStringEnum<PreferredLanguage>
{
    private PreferredLanguage(string value) : base(value)
    {
    }

    public static readonly PreferredLanguage EnUs = new("en-US");

    public static readonly PreferredLanguage EnGb = new("en-GB");

    public static readonly PreferredLanguage EsUs = new("es-US");

    public static readonly PreferredLanguage FrCa = new("fr-CA");

    public static readonly PreferredLanguage FrFr = new("fr-FR");

    public static readonly PreferredLanguage EnAu = new("en-AU");

    public static readonly PreferredLanguage ItIt = new("it-IT");

    public static readonly PreferredLanguage DeDe = new("de-DE");

    public static readonly PreferredLanguage PtBr = new("pt-BR");

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
