using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// You can specify any of the following languages: English ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt"). If you plan to use this entity recognizer with PDF, Word, or image input files, you must specify English as the language. All training documents must be in the same language.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode7>))]
public sealed record LanguageCode7 : OpenStringEnum<LanguageCode7>
{
    private LanguageCode7(string value) : base(value)
    {
    }

    public static readonly LanguageCode7 En = new("en");

    public static readonly LanguageCode7 Es = new("es");

    public static readonly LanguageCode7 Fr = new("fr");

    public static readonly LanguageCode7 De = new("de");

    public static readonly LanguageCode7 It = new("it");

    public static readonly LanguageCode7 Pt = new("pt");

    public static readonly LanguageCode7 Ar = new("ar");

    public static readonly LanguageCode7 Hi = new("hi");

    public static readonly LanguageCode7 Ja = new("ja");

    public static readonly LanguageCode7 Ko = new("ko");

    public static readonly LanguageCode7 Zh = new("zh");

    public static readonly LanguageCode7 ZhTw = new("zh-TW");

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
