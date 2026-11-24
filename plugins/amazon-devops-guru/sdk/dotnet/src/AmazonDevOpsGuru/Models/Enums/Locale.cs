using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// A locale that specifies the language to use for recommendations.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Locale>))]
public sealed record Locale : OpenStringEnum<Locale>
{
    private Locale(string value) : base(value)
    {
    }

    public static readonly Locale DeDe = new("DE_DE");

    public static readonly Locale EnUs = new("EN_US");

    public static readonly Locale EnGb = new("EN_GB");

    public static readonly Locale EsEs = new("ES_ES");

    public static readonly Locale FrFr = new("FR_FR");

    public static readonly Locale ItIt = new("IT_IT");

    public static readonly Locale JaJp = new("JA_JP");

    public static readonly Locale KoKr = new("KO_KR");

    public static readonly Locale PtBr = new("PT_BR");

    public static readonly Locale ZhCn = new("ZH_CN");

    public static readonly Locale ZhTw = new("ZH_TW");

    public TResult Match<TResult>(Func<TResult> onDeDe,
        Func<TResult> onEnUs,
        Func<TResult> onEnGb,
        Func<TResult> onEsEs,
        Func<TResult> onFrFr,
        Func<TResult> onItIt,
        Func<TResult> onJaJp,
        Func<TResult> onKoKr,
        Func<TResult> onPtBr,
        Func<TResult> onZhCn,
        Func<TResult> onZhTw,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DeDe => onDeDe(),
            _ when this == EnUs => onEnUs(),
            _ when this == EnGb => onEnGb(),
            _ when this == EsEs => onEsEs(),
            _ when this == FrFr => onFrFr(),
            _ when this == ItIt => onItIt(),
            _ when this == JaJp => onJaJp(),
            _ when this == KoKr => onKoKr(),
            _ when this == PtBr => onPtBr(),
            _ when this == ZhCn => onZhCn(),
            _ when this == ZhTw => onZhTw(),
            _ => otherwise(Value)
        };

    public void Match(Action onDeDe,
        Action onEnUs,
        Action onEnGb,
        Action onEsEs,
        Action onFrFr,
        Action onItIt,
        Action onJaJp,
        Action onKoKr,
        Action onPtBr,
        Action onZhCn,
        Action onZhTw,
        Action<string> otherwise)
    {
        if (this == DeDe) onDeDe();
        else if (this == EnUs) onEnUs();
        else if (this == EnGb) onEnGb();
        else if (this == EsEs) onEsEs();
        else if (this == FrFr) onFrFr();
        else if (this == ItIt) onItIt();
        else if (this == JaJp) onJaJp();
        else if (this == KoKr) onKoKr();
        else if (this == PtBr) onPtBr();
        else if (this == ZhCn) onZhCn();
        else if (this == ZhTw) onZhTw();
        else otherwise(Value);
    }
}
