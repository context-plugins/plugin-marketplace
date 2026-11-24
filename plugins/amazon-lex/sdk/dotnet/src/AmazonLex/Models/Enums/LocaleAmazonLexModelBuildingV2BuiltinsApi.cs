using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// A list of locales that the intent supports.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LocaleAmazonLexModelBuildingV2BuiltinsApi>))]
public sealed record LocaleAmazonLexModelBuildingV2BuiltinsApi : OpenStringEnum<LocaleAmazonLexModelBuildingV2BuiltinsApi>
{
    private LocaleAmazonLexModelBuildingV2BuiltinsApi(string value) : base(value)
    {
    }

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi DeDe = new("de-DE");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi EnAu = new("en-AU");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi EnGb = new("en-GB");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi EnIn = new("en-IN");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi EnUs = new("en-US");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi Es419 = new("es-419");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi EsEs = new("es-ES");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi EsUs = new("es-US");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi FrFr = new("fr-FR");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi FrCa = new("fr-CA");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi ItIt = new("it-IT");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi JaJp = new("ja-JP");

    public static readonly LocaleAmazonLexModelBuildingV2BuiltinsApi KoKr = new("ko-KR");

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
