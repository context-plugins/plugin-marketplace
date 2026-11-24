using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on: +2 credits, on top of the base cost and any other add-on (<see href="/guides/providers#state-level-targeting">pricing</see>).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StateParameter>))]
public sealed record StateParameter : OpenStringEnum<StateParameter>
{
    private StateParameter(string value) : base(value)
    {
    }

    public static readonly StateParameter Al = new("AL");

    public static readonly StateParameter Ak = new("AK");

    public static readonly StateParameter Az = new("AZ");

    public static readonly StateParameter Ar = new("AR");

    public static readonly StateParameter Ca = new("CA");

    public static readonly StateParameter Co = new("CO");

    public static readonly StateParameter Ct = new("CT");

    public static readonly StateParameter De = new("DE");

    public static readonly StateParameter Dc = new("DC");

    public static readonly StateParameter Fl = new("FL");

    public static readonly StateParameter Ga = new("GA");

    public static readonly StateParameter Hi = new("HI");

    public static readonly StateParameter Id = new("ID");

    public static readonly StateParameter Il = new("IL");

    public static readonly StateParameter In = new("IN");

    public static readonly StateParameter Ia = new("IA");

    public static readonly StateParameter Ks = new("KS");

    public static readonly StateParameter Ky = new("KY");

    public static readonly StateParameter La = new("LA");

    public static readonly StateParameter Me = new("ME");

    public static readonly StateParameter Md = new("MD");

    public static readonly StateParameter Ma = new("MA");

    public static readonly StateParameter Mi = new("MI");

    public static readonly StateParameter Mn = new("MN");

    public static readonly StateParameter Ms = new("MS");

    public static readonly StateParameter Mo = new("MO");

    public static readonly StateParameter Mt = new("MT");

    public static readonly StateParameter Ne = new("NE");

    public static readonly StateParameter Nv = new("NV");

    public static readonly StateParameter Nh = new("NH");

    public static readonly StateParameter Nj = new("NJ");

    public static readonly StateParameter Nm = new("NM");

    public static readonly StateParameter Ny = new("NY");

    public static readonly StateParameter Nc = new("NC");

    public static readonly StateParameter Nd = new("ND");

    public static readonly StateParameter Oh = new("OH");

    public static readonly StateParameter Ok = new("OK");

    public static readonly StateParameter Or = new("OR");

    public static readonly StateParameter Pa = new("PA");

    public static readonly StateParameter Ri = new("RI");

    public static readonly StateParameter Sc = new("SC");

    public static readonly StateParameter Sd = new("SD");

    public static readonly StateParameter Tn = new("TN");

    public static readonly StateParameter Tx = new("TX");

    public static readonly StateParameter Ut = new("UT");

    public static readonly StateParameter Vt = new("VT");

    public static readonly StateParameter Va = new("VA");

    public static readonly StateParameter Wa = new("WA");

    public static readonly StateParameter Wv = new("WV");

    public static readonly StateParameter Wi = new("WI");

    public static readonly StateParameter Wy = new("WY");

    public TResult Match<TResult>(Func<TResult> onAl,
        Func<TResult> onAk,
        Func<TResult> onAz,
        Func<TResult> onAr,
        Func<TResult> onCa,
        Func<TResult> onCo,
        Func<TResult> onCt,
        Func<TResult> onDe,
        Func<TResult> onDc,
        Func<TResult> onFl,
        Func<TResult> onGa,
        Func<TResult> onHi,
        Func<TResult> onId,
        Func<TResult> onIl,
        Func<TResult> onIn,
        Func<TResult> onIa,
        Func<TResult> onKs,
        Func<TResult> onKy,
        Func<TResult> onLa,
        Func<TResult> onMe,
        Func<TResult> onMd,
        Func<TResult> onMa,
        Func<TResult> onMi,
        Func<TResult> onMn,
        Func<TResult> onMs,
        Func<TResult> onMo,
        Func<TResult> onMt,
        Func<TResult> onNe,
        Func<TResult> onNv,
        Func<TResult> onNh,
        Func<TResult> onNj,
        Func<TResult> onNm,
        Func<TResult> onNy,
        Func<TResult> onNc,
        Func<TResult> onNd,
        Func<TResult> onOh,
        Func<TResult> onOk,
        Func<TResult> onOr,
        Func<TResult> onPa,
        Func<TResult> onRi,
        Func<TResult> onSc,
        Func<TResult> onSd,
        Func<TResult> onTn,
        Func<TResult> onTx,
        Func<TResult> onUt,
        Func<TResult> onVt,
        Func<TResult> onVa,
        Func<TResult> onWa,
        Func<TResult> onWv,
        Func<TResult> onWi,
        Func<TResult> onWy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Al => onAl(),
            _ when this == Ak => onAk(),
            _ when this == Az => onAz(),
            _ when this == Ar => onAr(),
            _ when this == Ca => onCa(),
            _ when this == Co => onCo(),
            _ when this == Ct => onCt(),
            _ when this == De => onDe(),
            _ when this == Dc => onDc(),
            _ when this == Fl => onFl(),
            _ when this == Ga => onGa(),
            _ when this == Hi => onHi(),
            _ when this == Id => onId(),
            _ when this == Il => onIl(),
            _ when this == In => onIn(),
            _ when this == Ia => onIa(),
            _ when this == Ks => onKs(),
            _ when this == Ky => onKy(),
            _ when this == La => onLa(),
            _ when this == Me => onMe(),
            _ when this == Md => onMd(),
            _ when this == Ma => onMa(),
            _ when this == Mi => onMi(),
            _ when this == Mn => onMn(),
            _ when this == Ms => onMs(),
            _ when this == Mo => onMo(),
            _ when this == Mt => onMt(),
            _ when this == Ne => onNe(),
            _ when this == Nv => onNv(),
            _ when this == Nh => onNh(),
            _ when this == Nj => onNj(),
            _ when this == Nm => onNm(),
            _ when this == Ny => onNy(),
            _ when this == Nc => onNc(),
            _ when this == Nd => onNd(),
            _ when this == Oh => onOh(),
            _ when this == Ok => onOk(),
            _ when this == Or => onOr(),
            _ when this == Pa => onPa(),
            _ when this == Ri => onRi(),
            _ when this == Sc => onSc(),
            _ when this == Sd => onSd(),
            _ when this == Tn => onTn(),
            _ when this == Tx => onTx(),
            _ when this == Ut => onUt(),
            _ when this == Vt => onVt(),
            _ when this == Va => onVa(),
            _ when this == Wa => onWa(),
            _ when this == Wv => onWv(),
            _ when this == Wi => onWi(),
            _ when this == Wy => onWy(),
            _ => otherwise(Value)
        };

    public void Match(Action onAl,
        Action onAk,
        Action onAz,
        Action onAr,
        Action onCa,
        Action onCo,
        Action onCt,
        Action onDe,
        Action onDc,
        Action onFl,
        Action onGa,
        Action onHi,
        Action onId,
        Action onIl,
        Action onIn,
        Action onIa,
        Action onKs,
        Action onKy,
        Action onLa,
        Action onMe,
        Action onMd,
        Action onMa,
        Action onMi,
        Action onMn,
        Action onMs,
        Action onMo,
        Action onMt,
        Action onNe,
        Action onNv,
        Action onNh,
        Action onNj,
        Action onNm,
        Action onNy,
        Action onNc,
        Action onNd,
        Action onOh,
        Action onOk,
        Action onOr,
        Action onPa,
        Action onRi,
        Action onSc,
        Action onSd,
        Action onTn,
        Action onTx,
        Action onUt,
        Action onVt,
        Action onVa,
        Action onWa,
        Action onWv,
        Action onWi,
        Action onWy,
        Action<string> otherwise)
    {
        if (this == Al) onAl();
        else if (this == Ak) onAk();
        else if (this == Az) onAz();
        else if (this == Ar) onAr();
        else if (this == Ca) onCa();
        else if (this == Co) onCo();
        else if (this == Ct) onCt();
        else if (this == De) onDe();
        else if (this == Dc) onDc();
        else if (this == Fl) onFl();
        else if (this == Ga) onGa();
        else if (this == Hi) onHi();
        else if (this == Id) onId();
        else if (this == Il) onIl();
        else if (this == In) onIn();
        else if (this == Ia) onIa();
        else if (this == Ks) onKs();
        else if (this == Ky) onKy();
        else if (this == La) onLa();
        else if (this == Me) onMe();
        else if (this == Md) onMd();
        else if (this == Ma) onMa();
        else if (this == Mi) onMi();
        else if (this == Mn) onMn();
        else if (this == Ms) onMs();
        else if (this == Mo) onMo();
        else if (this == Mt) onMt();
        else if (this == Ne) onNe();
        else if (this == Nv) onNv();
        else if (this == Nh) onNh();
        else if (this == Nj) onNj();
        else if (this == Nm) onNm();
        else if (this == Ny) onNy();
        else if (this == Nc) onNc();
        else if (this == Nd) onNd();
        else if (this == Oh) onOh();
        else if (this == Ok) onOk();
        else if (this == Or) onOr();
        else if (this == Pa) onPa();
        else if (this == Ri) onRi();
        else if (this == Sc) onSc();
        else if (this == Sd) onSd();
        else if (this == Tn) onTn();
        else if (this == Tx) onTx();
        else if (this == Ut) onUt();
        else if (this == Vt) onVt();
        else if (this == Va) onVa();
        else if (this == Wa) onWa();
        else if (this == Wv) onWv();
        else if (this == Wi) onWi();
        else if (this == Wy) onWy();
        else otherwise(Value);
    }
}
