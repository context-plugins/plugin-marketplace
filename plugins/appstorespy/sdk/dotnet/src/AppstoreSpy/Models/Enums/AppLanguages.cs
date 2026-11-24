using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AppLanguages>))]
public sealed record AppLanguages : OpenStringEnum<AppLanguages>
{
    private AppLanguages(string value) : base(value)
    {
    }

    public static readonly AppLanguages EnUs = new("en_US");

    public static readonly AppLanguages Ar = new("ar");

    public static readonly AppLanguages EnGb = new("en_GB");

    public static readonly AppLanguages FrFr = new("fr_FR");

    public static readonly AppLanguages Es419 = new("es_419");

    public static readonly AppLanguages DeDe = new("de_DE");

    public static readonly AppLanguages PtBr = new("pt_BR");

    public static readonly AppLanguages ItIt = new("it_IT");

    public static readonly AppLanguages JaJp = new("ja_JP");

    public static readonly AppLanguages KoKr = new("ko_KR");

    public static readonly AppLanguages TrTr = new("tr_TR");

    public static readonly AppLanguages RuRu = new("ru_RU");

    public static readonly AppLanguages Vi = new("vi");

    public TResult Match<TResult>(Func<TResult> onEnUs,
        Func<TResult> onAr,
        Func<TResult> onEnGb,
        Func<TResult> onFrFr,
        Func<TResult> onEs419,
        Func<TResult> onDeDe,
        Func<TResult> onPtBr,
        Func<TResult> onItIt,
        Func<TResult> onJaJp,
        Func<TResult> onKoKr,
        Func<TResult> onTrTr,
        Func<TResult> onRuRu,
        Func<TResult> onVi,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnUs => onEnUs(),
            _ when this == Ar => onAr(),
            _ when this == EnGb => onEnGb(),
            _ when this == FrFr => onFrFr(),
            _ when this == Es419 => onEs419(),
            _ when this == DeDe => onDeDe(),
            _ when this == PtBr => onPtBr(),
            _ when this == ItIt => onItIt(),
            _ when this == JaJp => onJaJp(),
            _ when this == KoKr => onKoKr(),
            _ when this == TrTr => onTrTr(),
            _ when this == RuRu => onRuRu(),
            _ when this == Vi => onVi(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnUs,
        Action onAr,
        Action onEnGb,
        Action onFrFr,
        Action onEs419,
        Action onDeDe,
        Action onPtBr,
        Action onItIt,
        Action onJaJp,
        Action onKoKr,
        Action onTrTr,
        Action onRuRu,
        Action onVi,
        Action<string> otherwise)
    {
        if (this == EnUs) onEnUs();
        else if (this == Ar) onAr();
        else if (this == EnGb) onEnGb();
        else if (this == FrFr) onFrFr();
        else if (this == Es419) onEs419();
        else if (this == DeDe) onDeDe();
        else if (this == PtBr) onPtBr();
        else if (this == ItIt) onItIt();
        else if (this == JaJp) onJaJp();
        else if (this == KoKr) onKoKr();
        else if (this == TrTr) onTrTr();
        else if (this == RuRu) onRuRu();
        else if (this == Vi) onVi();
        else otherwise(Value);
    }
}
