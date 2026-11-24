using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The language of the input documents. Currently, English is the only supported language.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode4>))]
public sealed record LanguageCode4 : OpenStringEnum<LanguageCode4>
{
    private LanguageCode4(string value) : base(value)
    {
    }

    public static readonly LanguageCode4 En = new("en");

    public static readonly LanguageCode4 Es = new("es");

    public static readonly LanguageCode4 Fr = new("fr");

    public static readonly LanguageCode4 De = new("de");

    public static readonly LanguageCode4 It = new("it");

    public static readonly LanguageCode4 Pt = new("pt");

    public static readonly LanguageCode4 Ar = new("ar");

    public static readonly LanguageCode4 Hi = new("hi");

    public static readonly LanguageCode4 Ja = new("ja");

    public static readonly LanguageCode4 Ko = new("ko");

    public static readonly LanguageCode4 Zh = new("zh");

    public static readonly LanguageCode4 ZhTw = new("zh-TW");

    public TResult Match<TResult>(Func<TResult> onEn,
        Func<TResult> onEs,
        Func<TResult> onFr,
        Func<TResult> onDe,
        Func<TResult> onIt,
        Func<TResult> onPt,
        Func<TResult> onAr,
        Func<TResult> onHi,
        Func<TResult> onJa,
        Func<TResult> onKo,
        Func<TResult> onZh,
        Func<TResult> onZhTw,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == Es => onEs(),
            _ when this == Fr => onFr(),
            _ when this == De => onDe(),
            _ when this == It => onIt(),
            _ when this == Pt => onPt(),
            _ when this == Ar => onAr(),
            _ when this == Hi => onHi(),
            _ when this == Ja => onJa(),
            _ when this == Ko => onKo(),
            _ when this == Zh => onZh(),
            _ when this == ZhTw => onZhTw(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn,
        Action onEs,
        Action onFr,
        Action onDe,
        Action onIt,
        Action onPt,
        Action onAr,
        Action onHi,
        Action onJa,
        Action onKo,
        Action onZh,
        Action onZhTw,
        Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == Es) onEs();
        else if (this == Fr) onFr();
        else if (this == De) onDe();
        else if (this == It) onIt();
        else if (this == Pt) onPt();
        else if (this == Ar) onAr();
        else if (this == Hi) onHi();
        else if (this == Ja) onJa();
        else if (this == Ko) onKo();
        else if (this == Zh) onZh();
        else if (this == ZhTw) onZhTw();
        else otherwise(Value);
    }
}
