using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AppCountries>))]
public sealed record AppCountries : OpenStringEnum<AppCountries>
{
    private AppCountries(string value) : base(value)
    {
    }

    public static readonly AppCountries Us = new("US");

    public static readonly AppCountries Ca = new("CA");

    public static readonly AppCountries At = new("AT");

    public static readonly AppCountries Be = new("BE");

    public static readonly AppCountries Cy = new("CY");

    public static readonly AppCountries Cz = new("CZ");

    public static readonly AppCountries Dk = new("DK");

    public static readonly AppCountries Fi = new("FI");

    public static readonly AppCountries Fr = new("FR");

    public static readonly AppCountries De = new("DE");

    public static readonly AppCountries Gr = new("GR");

    public static readonly AppCountries Hu = new("HU");

    public static readonly AppCountries Ie = new("IE");

    public static readonly AppCountries It = new("IT");

    public static readonly AppCountries Nl = new("NL");

    public static readonly AppCountries No = new("NO");

    public static readonly AppCountries Pl = new("PL");

    public static readonly AppCountries Pt = new("PT");

    public static readonly AppCountries Ru = new("RU");

    public static readonly AppCountries Es = new("ES");

    public static readonly AppCountries Se = new("SE");

    public static readonly AppCountries Ch = new("CH");

    public static readonly AppCountries Tr = new("TR");

    public static readonly AppCountries Ua = new("UA");

    public static readonly AppCountries Gb = new("GB");

    public static readonly AppCountries Eg = new("EG");

    public static readonly AppCountries In = new("IN");

    public static readonly AppCountries Il = new("IL");

    public static readonly AppCountries Ma = new("MA");

    public static readonly AppCountries Ng = new("NG");

    public static readonly AppCountries Sa = new("SA");

    public static readonly AppCountries Za = new("ZA");

    public static readonly AppCountries Ae = new("AE");

    public static readonly AppCountries Au = new("AU");

    public static readonly AppCountries Hk = new("HK");

    public static readonly AppCountries Id = new("ID");

    public static readonly AppCountries Jp = new("JP");

    public static readonly AppCountries Kz = new("KZ");

    public static readonly AppCountries Kr = new("KR");

    public static readonly AppCountries My = new("MY");

    public static readonly AppCountries Nz = new("NZ");

    public static readonly AppCountries Pk = new("PK");

    public static readonly AppCountries Ph = new("PH");

    public static readonly AppCountries Sg = new("SG");

    public static readonly AppCountries Tw = new("TW");

    public static readonly AppCountries Th = new("TH");

    public static readonly AppCountries Vn = new("VN");

    public static readonly AppCountries Ar = new("AR");

    public static readonly AppCountries Br = new("BR");

    public static readonly AppCountries Mx = new("MX");

    public TResult Match<TResult>(Func<TResult> onUs,
        Func<TResult> onCa,
        Func<TResult> onAt,
        Func<TResult> onBe,
        Func<TResult> onCy,
        Func<TResult> onCz,
        Func<TResult> onDk,
        Func<TResult> onFi,
        Func<TResult> onFr,
        Func<TResult> onDe,
        Func<TResult> onGr,
        Func<TResult> onHu,
        Func<TResult> onIe,
        Func<TResult> onIt,
        Func<TResult> onNl,
        Func<TResult> onNo,
        Func<TResult> onPl,
        Func<TResult> onPt,
        Func<TResult> onRu,
        Func<TResult> onEs,
        Func<TResult> onSe,
        Func<TResult> onCh,
        Func<TResult> onTr,
        Func<TResult> onUa,
        Func<TResult> onGb,
        Func<TResult> onEg,
        Func<TResult> onIn,
        Func<TResult> onIl,
        Func<TResult> onMa,
        Func<TResult> onNg,
        Func<TResult> onSa,
        Func<TResult> onZa,
        Func<TResult> onAe,
        Func<TResult> onAu,
        Func<TResult> onHk,
        Func<TResult> onId,
        Func<TResult> onJp,
        Func<TResult> onKz,
        Func<TResult> onKr,
        Func<TResult> onMy,
        Func<TResult> onNz,
        Func<TResult> onPk,
        Func<TResult> onPh,
        Func<TResult> onSg,
        Func<TResult> onTw,
        Func<TResult> onTh,
        Func<TResult> onVn,
        Func<TResult> onAr,
        Func<TResult> onBr,
        Func<TResult> onMx,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Us => onUs(),
            _ when this == Ca => onCa(),
            _ when this == At => onAt(),
            _ when this == Be => onBe(),
            _ when this == Cy => onCy(),
            _ when this == Cz => onCz(),
            _ when this == Dk => onDk(),
            _ when this == Fi => onFi(),
            _ when this == Fr => onFr(),
            _ when this == De => onDe(),
            _ when this == Gr => onGr(),
            _ when this == Hu => onHu(),
            _ when this == Ie => onIe(),
            _ when this == It => onIt(),
            _ when this == Nl => onNl(),
            _ when this == No => onNo(),
            _ when this == Pl => onPl(),
            _ when this == Pt => onPt(),
            _ when this == Ru => onRu(),
            _ when this == Es => onEs(),
            _ when this == Se => onSe(),
            _ when this == Ch => onCh(),
            _ when this == Tr => onTr(),
            _ when this == Ua => onUa(),
            _ when this == Gb => onGb(),
            _ when this == Eg => onEg(),
            _ when this == In => onIn(),
            _ when this == Il => onIl(),
            _ when this == Ma => onMa(),
            _ when this == Ng => onNg(),
            _ when this == Sa => onSa(),
            _ when this == Za => onZa(),
            _ when this == Ae => onAe(),
            _ when this == Au => onAu(),
            _ when this == Hk => onHk(),
            _ when this == Id => onId(),
            _ when this == Jp => onJp(),
            _ when this == Kz => onKz(),
            _ when this == Kr => onKr(),
            _ when this == My => onMy(),
            _ when this == Nz => onNz(),
            _ when this == Pk => onPk(),
            _ when this == Ph => onPh(),
            _ when this == Sg => onSg(),
            _ when this == Tw => onTw(),
            _ when this == Th => onTh(),
            _ when this == Vn => onVn(),
            _ when this == Ar => onAr(),
            _ when this == Br => onBr(),
            _ when this == Mx => onMx(),
            _ => otherwise(Value)
        };

    public void Match(Action onUs,
        Action onCa,
        Action onAt,
        Action onBe,
        Action onCy,
        Action onCz,
        Action onDk,
        Action onFi,
        Action onFr,
        Action onDe,
        Action onGr,
        Action onHu,
        Action onIe,
        Action onIt,
        Action onNl,
        Action onNo,
        Action onPl,
        Action onPt,
        Action onRu,
        Action onEs,
        Action onSe,
        Action onCh,
        Action onTr,
        Action onUa,
        Action onGb,
        Action onEg,
        Action onIn,
        Action onIl,
        Action onMa,
        Action onNg,
        Action onSa,
        Action onZa,
        Action onAe,
        Action onAu,
        Action onHk,
        Action onId,
        Action onJp,
        Action onKz,
        Action onKr,
        Action onMy,
        Action onNz,
        Action onPk,
        Action onPh,
        Action onSg,
        Action onTw,
        Action onTh,
        Action onVn,
        Action onAr,
        Action onBr,
        Action onMx,
        Action<string> otherwise)
    {
        if (this == Us) onUs();
        else if (this == Ca) onCa();
        else if (this == At) onAt();
        else if (this == Be) onBe();
        else if (this == Cy) onCy();
        else if (this == Cz) onCz();
        else if (this == Dk) onDk();
        else if (this == Fi) onFi();
        else if (this == Fr) onFr();
        else if (this == De) onDe();
        else if (this == Gr) onGr();
        else if (this == Hu) onHu();
        else if (this == Ie) onIe();
        else if (this == It) onIt();
        else if (this == Nl) onNl();
        else if (this == No) onNo();
        else if (this == Pl) onPl();
        else if (this == Pt) onPt();
        else if (this == Ru) onRu();
        else if (this == Es) onEs();
        else if (this == Se) onSe();
        else if (this == Ch) onCh();
        else if (this == Tr) onTr();
        else if (this == Ua) onUa();
        else if (this == Gb) onGb();
        else if (this == Eg) onEg();
        else if (this == In) onIn();
        else if (this == Il) onIl();
        else if (this == Ma) onMa();
        else if (this == Ng) onNg();
        else if (this == Sa) onSa();
        else if (this == Za) onZa();
        else if (this == Ae) onAe();
        else if (this == Au) onAu();
        else if (this == Hk) onHk();
        else if (this == Id) onId();
        else if (this == Jp) onJp();
        else if (this == Kz) onKz();
        else if (this == Kr) onKr();
        else if (this == My) onMy();
        else if (this == Nz) onNz();
        else if (this == Pk) onPk();
        else if (this == Ph) onPh();
        else if (this == Sg) onSg();
        else if (this == Tw) onTw();
        else if (this == Th) onTh();
        else if (this == Vn) onVn();
        else if (this == Ar) onAr();
        else if (this == Br) onBr();
        else if (this == Mx) onMx();
        else otherwise(Value);
    }
}
