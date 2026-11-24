using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The language of the input documents. Currently, English is the only supported language.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode6AmazonComprehendOperationsApi>))]
public sealed record LanguageCode6AmazonComprehendOperationsApi : OpenStringEnum<LanguageCode6AmazonComprehendOperationsApi>
{
    private LanguageCode6AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly LanguageCode6AmazonComprehendOperationsApi En = new("en");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Es = new("es");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Fr = new("fr");

    public static readonly LanguageCode6AmazonComprehendOperationsApi De = new("de");

    public static readonly LanguageCode6AmazonComprehendOperationsApi It = new("it");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Pt = new("pt");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Ar = new("ar");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Hi = new("hi");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Ja = new("ja");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Ko = new("ko");

    public static readonly LanguageCode6AmazonComprehendOperationsApi Zh = new("zh");

    public static readonly LanguageCode6AmazonComprehendOperationsApi ZhTw = new("zh-TW");

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
