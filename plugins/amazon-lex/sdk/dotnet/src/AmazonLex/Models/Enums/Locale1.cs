using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// A list of locales that the slot type supports.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Locale1>))]
public sealed record Locale1 : OpenStringEnum<Locale1>
{
    private Locale1(string value) : base(value)
    {
    }

    public static readonly Locale1 DeDe = new("de-DE");

    public static readonly Locale1 EnAu = new("en-AU");

    public static readonly Locale1 EnGb = new("en-GB");

    public static readonly Locale1 EnIn = new("en-IN");

    public static readonly Locale1 EnUs = new("en-US");

    public static readonly Locale1 Es419 = new("es-419");

    public static readonly Locale1 EsEs = new("es-ES");

    public static readonly Locale1 EsUs = new("es-US");

    public static readonly Locale1 FrFr = new("fr-FR");

    public static readonly Locale1 FrCa = new("fr-CA");

    public static readonly Locale1 ItIt = new("it-IT");

    public static readonly Locale1 JaJp = new("ja-JP");

    public static readonly Locale1 KoKr = new("ko-KR");

    public TResult Match<TResult>(Func<TResult> onDeDe,
        Func<TResult> onEnAu,
        Func<TResult> onEnGb,
        Func<TResult> onEnIn,
        Func<TResult> onEnUs,
        Func<TResult> onEs419,
        Func<TResult> onEsEs,
        Func<TResult> onEsUs,
        Func<TResult> onFrFr,
        Func<TResult> onFrCa,
        Func<TResult> onItIt,
        Func<TResult> onJaJp,
        Func<TResult> onKoKr,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeDe => onDeDe(),
            _ when this == EnAu => onEnAu(),
            _ when this == EnGb => onEnGb(),
            _ when this == EnIn => onEnIn(),
            _ when this == EnUs => onEnUs(),
            _ when this == Es419 => onEs419(),
            _ when this == EsEs => onEsEs(),
            _ when this == EsUs => onEsUs(),
            _ when this == FrFr => onFrFr(),
            _ when this == FrCa => onFrCa(),
            _ when this == ItIt => onItIt(),
            _ when this == JaJp => onJaJp(),
            _ when this == KoKr => onKoKr(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeDe,
        Action onEnAu,
        Action onEnGb,
        Action onEnIn,
        Action onEnUs,
        Action onEs419,
        Action onEsEs,
        Action onEsUs,
        Action onFrFr,
        Action onFrCa,
        Action onItIt,
        Action onJaJp,
        Action onKoKr,
        Action<string> otherwise)
    {
        if (this == DeDe) onDeDe();
        else if (this == EnAu) onEnAu();
        else if (this == EnGb) onEnGb();
        else if (this == EnIn) onEnIn();
        else if (this == EnUs) onEnUs();
        else if (this == Es419) onEs419();
        else if (this == EsEs) onEsEs();
        else if (this == EsUs) onEsUs();
        else if (this == FrFr) onFrFr();
        else if (this == FrCa) onFrCa();
        else if (this == ItIt) onItIt();
        else if (this == JaJp) onJaJp();
        else if (this == KoKr) onKoKr();
        else otherwise(Value);
    }
}
