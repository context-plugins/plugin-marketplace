using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Language>))]
public sealed record Language : OpenStringEnum<Language>
{
    private Language(string value) : base(value)
    {
    }

    public static readonly Language En = new("en");

    public static readonly Language Pl = new("pl");

    public static readonly Language Fr = new("fr");

    public static readonly Language Hi = new("hi");

    public static readonly Language Sv = new("sv");

    public static readonly Language De = new("de");

    public static readonly Language Es = new("es");

    public static readonly Language It = new("it");

    public static readonly Language Nl = new("nl");

    public static readonly Language Pt = new("pt");

    public static readonly Language Ru = new("ru");

    public static readonly Language Tr = new("tr");

    public static readonly Language Zh = new("zh");

    public static readonly Language Da = new("da");

    public static readonly Language Th = new("th");

    public static readonly Language Ko = new("ko");

    public static readonly Language He = new("he");

    public static readonly Language Ar = new("ar");

    public TResult Match<TResult>(Func<TResult> onEn,
        Func<TResult> onPl,
        Func<TResult> onFr,
        Func<TResult> onHi,
        Func<TResult> onSv,
        Func<TResult> onDe,
        Func<TResult> onEs,
        Func<TResult> onIt,
        Func<TResult> onNl,
        Func<TResult> onPt,
        Func<TResult> onRu,
        Func<TResult> onTr,
        Func<TResult> onZh,
        Func<TResult> onDa,
        Func<TResult> onTh,
        Func<TResult> onKo,
        Func<TResult> onHe,
        Func<TResult> onAr,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == Pl => onPl(),
            _ when this == Fr => onFr(),
            _ when this == Hi => onHi(),
            _ when this == Sv => onSv(),
            _ when this == De => onDe(),
            _ when this == Es => onEs(),
            _ when this == It => onIt(),
            _ when this == Nl => onNl(),
            _ when this == Pt => onPt(),
            _ when this == Ru => onRu(),
            _ when this == Tr => onTr(),
            _ when this == Zh => onZh(),
            _ when this == Da => onDa(),
            _ when this == Th => onTh(),
            _ when this == Ko => onKo(),
            _ when this == He => onHe(),
            _ when this == Ar => onAr(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn,
        Action onPl,
        Action onFr,
        Action onHi,
        Action onSv,
        Action onDe,
        Action onEs,
        Action onIt,
        Action onNl,
        Action onPt,
        Action onRu,
        Action onTr,
        Action onZh,
        Action onDa,
        Action onTh,
        Action onKo,
        Action onHe,
        Action onAr,
        Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == Pl) onPl();
        else if (this == Fr) onFr();
        else if (this == Hi) onHi();
        else if (this == Sv) onSv();
        else if (this == De) onDe();
        else if (this == Es) onEs();
        else if (this == It) onIt();
        else if (this == Nl) onNl();
        else if (this == Pt) onPt();
        else if (this == Ru) onRu();
        else if (this == Tr) onTr();
        else if (this == Zh) onZh();
        else if (this == Da) onDa();
        else if (this == Th) onTh();
        else if (this == Ko) onKo();
        else if (this == He) onHe();
        else if (this == Ar) onAr();
        else otherwise(Value);
    }
}
