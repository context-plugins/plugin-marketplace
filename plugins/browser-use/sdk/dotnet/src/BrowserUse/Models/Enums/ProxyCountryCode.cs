using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ProxyCountryCode>))]
public sealed record ProxyCountryCode : OpenStringEnum<ProxyCountryCode>
{
    private ProxyCountryCode(string value) : base(value)
    {
    }

    public static readonly ProxyCountryCode Ad = new("ad");

    public static readonly ProxyCountryCode Ae = new("ae");

    public static readonly ProxyCountryCode Af = new("af");

    public static readonly ProxyCountryCode Ag = new("ag");

    public static readonly ProxyCountryCode Ai = new("ai");

    public static readonly ProxyCountryCode Al = new("al");

    public static readonly ProxyCountryCode Am = new("am");

    public static readonly ProxyCountryCode An = new("an");

    public static readonly ProxyCountryCode Ao = new("ao");

    public static readonly ProxyCountryCode Aq = new("aq");

    public static readonly ProxyCountryCode Ar = new("ar");

    public static readonly ProxyCountryCode As = new("as");

    public static readonly ProxyCountryCode At = new("at");

    public static readonly ProxyCountryCode Au = new("au");

    public static readonly ProxyCountryCode Aw = new("aw");

    public static readonly ProxyCountryCode Az = new("az");

    public static readonly ProxyCountryCode Ba = new("ba");

    public static readonly ProxyCountryCode Bb = new("bb");

    public static readonly ProxyCountryCode Bd = new("bd");

    public static readonly ProxyCountryCode Be = new("be");

    public static readonly ProxyCountryCode Bf = new("bf");

    public static readonly ProxyCountryCode Bg = new("bg");

    public static readonly ProxyCountryCode Bh = new("bh");

    public static readonly ProxyCountryCode Bi = new("bi");

    public static readonly ProxyCountryCode Bj = new("bj");

    public static readonly ProxyCountryCode Bl = new("bl");

    public static readonly ProxyCountryCode Bm = new("bm");

    public static readonly ProxyCountryCode Bn = new("bn");

    public static readonly ProxyCountryCode Bo = new("bo");

    public static readonly ProxyCountryCode Bq = new("bq");

    public static readonly ProxyCountryCode Br = new("br");

    public static readonly ProxyCountryCode Bs = new("bs");

    public static readonly ProxyCountryCode Bt = new("bt");

    public static readonly ProxyCountryCode Bv = new("bv");

    public static readonly ProxyCountryCode Bw = new("bw");

    public static readonly ProxyCountryCode By = new("by");

    public static readonly ProxyCountryCode Bz = new("bz");

    public static readonly ProxyCountryCode Ca = new("ca");

    public static readonly ProxyCountryCode Cc = new("cc");

    public static readonly ProxyCountryCode Cd = new("cd");

    public static readonly ProxyCountryCode Cf = new("cf");

    public static readonly ProxyCountryCode Cg = new("cg");

    public static readonly ProxyCountryCode Ch = new("ch");

    public static readonly ProxyCountryCode Ci = new("ci");

    public static readonly ProxyCountryCode Ck = new("ck");

    public static readonly ProxyCountryCode Cl = new("cl");

    public static readonly ProxyCountryCode Cm = new("cm");

    public static readonly ProxyCountryCode Co = new("co");

    public static readonly ProxyCountryCode Cr = new("cr");

    public static readonly ProxyCountryCode Cs = new("cs");

    public static readonly ProxyCountryCode Cu = new("cu");

    public static readonly ProxyCountryCode Cv = new("cv");

    public static readonly ProxyCountryCode Cw = new("cw");

    public static readonly ProxyCountryCode Cx = new("cx");

    public static readonly ProxyCountryCode Cy = new("cy");

    public static readonly ProxyCountryCode Cz = new("cz");

    public static readonly ProxyCountryCode De = new("de");

    public static readonly ProxyCountryCode Dj = new("dj");

    public static readonly ProxyCountryCode Dk = new("dk");

    public static readonly ProxyCountryCode Dm = new("dm");

    public static readonly ProxyCountryCode Do = new("do");

    public static readonly ProxyCountryCode Dz = new("dz");

    public static readonly ProxyCountryCode Ec = new("ec");

    public static readonly ProxyCountryCode Ee = new("ee");

    public static readonly ProxyCountryCode Eg = new("eg");

    public static readonly ProxyCountryCode Eh = new("eh");

    public static readonly ProxyCountryCode Er = new("er");

    public static readonly ProxyCountryCode Es = new("es");

    public static readonly ProxyCountryCode Et = new("et");

    public static readonly ProxyCountryCode Fi = new("fi");

    public static readonly ProxyCountryCode Fj = new("fj");

    public static readonly ProxyCountryCode Fk = new("fk");

    public static readonly ProxyCountryCode Fm = new("fm");

    public static readonly ProxyCountryCode Fo = new("fo");

    public static readonly ProxyCountryCode Fr = new("fr");

    public static readonly ProxyCountryCode Ga = new("ga");

    public static readonly ProxyCountryCode Gd = new("gd");

    public static readonly ProxyCountryCode Ge = new("ge");

    public static readonly ProxyCountryCode Gf = new("gf");

    public static readonly ProxyCountryCode Gg = new("gg");

    public static readonly ProxyCountryCode Gh = new("gh");

    public static readonly ProxyCountryCode Gi = new("gi");

    public static readonly ProxyCountryCode Gl = new("gl");

    public static readonly ProxyCountryCode Gm = new("gm");

    public static readonly ProxyCountryCode Gn = new("gn");

    public static readonly ProxyCountryCode Gp = new("gp");

    public static readonly ProxyCountryCode Gq = new("gq");

    public static readonly ProxyCountryCode Gr = new("gr");

    public static readonly ProxyCountryCode Gs = new("gs");

    public static readonly ProxyCountryCode Gt = new("gt");

    public static readonly ProxyCountryCode Gu = new("gu");

    public static readonly ProxyCountryCode Gw = new("gw");

    public static readonly ProxyCountryCode Gy = new("gy");

    public static readonly ProxyCountryCode Hk = new("hk");

    public static readonly ProxyCountryCode Hm = new("hm");

    public static readonly ProxyCountryCode Hn = new("hn");

    public static readonly ProxyCountryCode Hr = new("hr");

    public static readonly ProxyCountryCode Ht = new("ht");

    public static readonly ProxyCountryCode Hu = new("hu");

    public static readonly ProxyCountryCode Id = new("id");

    public static readonly ProxyCountryCode Ie = new("ie");

    public static readonly ProxyCountryCode Il = new("il");

    public static readonly ProxyCountryCode Im = new("im");

    public static readonly ProxyCountryCode In = new("in");

    public static readonly ProxyCountryCode Iq = new("iq");

    public static readonly ProxyCountryCode Ir = new("ir");

    public static readonly ProxyCountryCode IsMember = new("is");

    public static readonly ProxyCountryCode It = new("it");

    public static readonly ProxyCountryCode Je = new("je");

    public static readonly ProxyCountryCode Jm = new("jm");

    public static readonly ProxyCountryCode Jo = new("jo");

    public static readonly ProxyCountryCode Jp = new("jp");

    public static readonly ProxyCountryCode Ke = new("ke");

    public static readonly ProxyCountryCode Kg = new("kg");

    public static readonly ProxyCountryCode Kh = new("kh");

    public static readonly ProxyCountryCode Ki = new("ki");

    public static readonly ProxyCountryCode Km = new("km");

    public static readonly ProxyCountryCode Kn = new("kn");

    public static readonly ProxyCountryCode Kp = new("kp");

    public static readonly ProxyCountryCode Kr = new("kr");

    public static readonly ProxyCountryCode Kw = new("kw");

    public static readonly ProxyCountryCode Ky = new("ky");

    public static readonly ProxyCountryCode Kz = new("kz");

    public static readonly ProxyCountryCode La = new("la");

    public static readonly ProxyCountryCode Lb = new("lb");

    public static readonly ProxyCountryCode Lc = new("lc");

    public static readonly ProxyCountryCode Li = new("li");

    public static readonly ProxyCountryCode Lk = new("lk");

    public static readonly ProxyCountryCode Lr = new("lr");

    public static readonly ProxyCountryCode Ls = new("ls");

    public static readonly ProxyCountryCode Lt = new("lt");

    public static readonly ProxyCountryCode Lu = new("lu");

    public static readonly ProxyCountryCode Lv = new("lv");

    public static readonly ProxyCountryCode Ly = new("ly");

    public static readonly ProxyCountryCode Ma = new("ma");

    public static readonly ProxyCountryCode Mc = new("mc");

    public static readonly ProxyCountryCode Md = new("md");

    public static readonly ProxyCountryCode Me = new("me");

    public static readonly ProxyCountryCode Mf = new("mf");

    public static readonly ProxyCountryCode Mg = new("mg");

    public static readonly ProxyCountryCode Mh = new("mh");

    public static readonly ProxyCountryCode Mk = new("mk");

    public static readonly ProxyCountryCode Ml = new("ml");

    public static readonly ProxyCountryCode Mm = new("mm");

    public static readonly ProxyCountryCode Mn = new("mn");

    public static readonly ProxyCountryCode Mo = new("mo");

    public static readonly ProxyCountryCode Mp = new("mp");

    public static readonly ProxyCountryCode Mq = new("mq");

    public static readonly ProxyCountryCode Mr = new("mr");

    public static readonly ProxyCountryCode Ms = new("ms");

    public static readonly ProxyCountryCode Mt = new("mt");

    public static readonly ProxyCountryCode Mu = new("mu");

    public static readonly ProxyCountryCode Mv = new("mv");

    public static readonly ProxyCountryCode Mw = new("mw");

    public static readonly ProxyCountryCode Mx = new("mx");

    public static readonly ProxyCountryCode My = new("my");

    public static readonly ProxyCountryCode Mz = new("mz");

    public static readonly ProxyCountryCode Na = new("na");

    public static readonly ProxyCountryCode Nc = new("nc");

    public static readonly ProxyCountryCode Ne = new("ne");

    public static readonly ProxyCountryCode Nf = new("nf");

    public static readonly ProxyCountryCode Ng = new("ng");

    public static readonly ProxyCountryCode Ni = new("ni");

    public static readonly ProxyCountryCode Nl = new("nl");

    public static readonly ProxyCountryCode No = new("no");

    public static readonly ProxyCountryCode Np = new("np");

    public static readonly ProxyCountryCode Nr = new("nr");

    public static readonly ProxyCountryCode Nu = new("nu");

    public static readonly ProxyCountryCode Nz = new("nz");

    public static readonly ProxyCountryCode Om = new("om");

    public static readonly ProxyCountryCode Pa = new("pa");

    public static readonly ProxyCountryCode Pe = new("pe");

    public static readonly ProxyCountryCode Pf = new("pf");

    public static readonly ProxyCountryCode Pg = new("pg");

    public static readonly ProxyCountryCode Ph = new("ph");

    public static readonly ProxyCountryCode Pk = new("pk");

    public static readonly ProxyCountryCode Pl = new("pl");

    public static readonly ProxyCountryCode Pm = new("pm");

    public static readonly ProxyCountryCode Pn = new("pn");

    public static readonly ProxyCountryCode Pr = new("pr");

    public static readonly ProxyCountryCode Ps = new("ps");

    public static readonly ProxyCountryCode Pt = new("pt");

    public static readonly ProxyCountryCode Pw = new("pw");

    public static readonly ProxyCountryCode Py = new("py");

    public static readonly ProxyCountryCode Qa = new("qa");

    public static readonly ProxyCountryCode Re = new("re");

    public static readonly ProxyCountryCode Ro = new("ro");

    public static readonly ProxyCountryCode Rs = new("rs");

    public static readonly ProxyCountryCode Ru = new("ru");

    public static readonly ProxyCountryCode Rw = new("rw");

    public static readonly ProxyCountryCode Sa = new("sa");

    public static readonly ProxyCountryCode Sb = new("sb");

    public static readonly ProxyCountryCode Sc = new("sc");

    public static readonly ProxyCountryCode Sd = new("sd");

    public static readonly ProxyCountryCode Se = new("se");

    public static readonly ProxyCountryCode Sg = new("sg");

    public static readonly ProxyCountryCode Sh = new("sh");

    public static readonly ProxyCountryCode Si = new("si");

    public static readonly ProxyCountryCode Sj = new("sj");

    public static readonly ProxyCountryCode Sk = new("sk");

    public static readonly ProxyCountryCode Sl = new("sl");

    public static readonly ProxyCountryCode Sm = new("sm");

    public static readonly ProxyCountryCode Sn = new("sn");

    public static readonly ProxyCountryCode So = new("so");

    public static readonly ProxyCountryCode Sr = new("sr");

    public static readonly ProxyCountryCode Ss = new("ss");

    public static readonly ProxyCountryCode St = new("st");

    public static readonly ProxyCountryCode Sv = new("sv");

    public static readonly ProxyCountryCode Sx = new("sx");

    public static readonly ProxyCountryCode Sy = new("sy");

    public static readonly ProxyCountryCode Sz = new("sz");

    public static readonly ProxyCountryCode Tc = new("tc");

    public static readonly ProxyCountryCode Td = new("td");

    public static readonly ProxyCountryCode Tf = new("tf");

    public static readonly ProxyCountryCode Tg = new("tg");

    public static readonly ProxyCountryCode Th = new("th");

    public static readonly ProxyCountryCode Tj = new("tj");

    public static readonly ProxyCountryCode Tk = new("tk");

    public static readonly ProxyCountryCode Tl = new("tl");

    public static readonly ProxyCountryCode Tm = new("tm");

    public static readonly ProxyCountryCode Tn = new("tn");

    public static readonly ProxyCountryCode To = new("to");

    public static readonly ProxyCountryCode Tr = new("tr");

    public static readonly ProxyCountryCode Tt = new("tt");

    public static readonly ProxyCountryCode Tv = new("tv");

    public static readonly ProxyCountryCode Tw = new("tw");

    public static readonly ProxyCountryCode Tz = new("tz");

    public static readonly ProxyCountryCode Ua = new("ua");

    public static readonly ProxyCountryCode Ug = new("ug");

    public static readonly ProxyCountryCode Uk = new("uk");

    public static readonly ProxyCountryCode Us = new("us");

    public static readonly ProxyCountryCode Uy = new("uy");

    public static readonly ProxyCountryCode Uz = new("uz");

    public static readonly ProxyCountryCode Va = new("va");

    public static readonly ProxyCountryCode Vc = new("vc");

    public static readonly ProxyCountryCode Ve = new("ve");

    public static readonly ProxyCountryCode Vg = new("vg");

    public static readonly ProxyCountryCode Vi = new("vi");

    public static readonly ProxyCountryCode Vn = new("vn");

    public static readonly ProxyCountryCode Vu = new("vu");

    public static readonly ProxyCountryCode Wf = new("wf");

    public static readonly ProxyCountryCode Ws = new("ws");

    public static readonly ProxyCountryCode Xk = new("xk");

    public static readonly ProxyCountryCode Ye = new("ye");

    public static readonly ProxyCountryCode Yt = new("yt");

    public static readonly ProxyCountryCode Za = new("za");

    public static readonly ProxyCountryCode Zm = new("zm");

    public static readonly ProxyCountryCode Zw = new("zw");

    public TResult Match<TResult>(Func<TResult> onAd,
        Func<TResult> onAe,
        Func<TResult> onAf,
        Func<TResult> onAg,
        Func<TResult> onAi,
        Func<TResult> onAl,
        Func<TResult> onAm,
        Func<TResult> onAn,
        Func<TResult> onAo,
        Func<TResult> onAq,
        Func<TResult> onAr,
        Func<TResult> onAs,
        Func<TResult> onAt,
        Func<TResult> onAu,
        Func<TResult> onAw,
        Func<TResult> onAz,
        Func<TResult> onBa,
        Func<TResult> onBb,
        Func<TResult> onBd,
        Func<TResult> onBe,
        Func<TResult> onBf,
        Func<TResult> onBg,
        Func<TResult> onBh,
        Func<TResult> onBi,
        Func<TResult> onBj,
        Func<TResult> onBl,
        Func<TResult> onBm,
        Func<TResult> onBn,
        Func<TResult> onBo,
        Func<TResult> onBq,
        Func<TResult> onBr,
        Func<TResult> onBs,
        Func<TResult> onBt,
        Func<TResult> onBv,
        Func<TResult> onBw,
        Func<TResult> onBy,
        Func<TResult> onBz,
        Func<TResult> onCa,
        Func<TResult> onCc,
        Func<TResult> onCd,
        Func<TResult> onCf,
        Func<TResult> onCg,
        Func<TResult> onCh,
        Func<TResult> onCi,
        Func<TResult> onCk,
        Func<TResult> onCl,
        Func<TResult> onCm,
        Func<TResult> onCo,
        Func<TResult> onCr,
        Func<TResult> onCs,
        Func<TResult> onCu,
        Func<TResult> onCv,
        Func<TResult> onCw,
        Func<TResult> onCx,
        Func<TResult> onCy,
        Func<TResult> onCz,
        Func<TResult> onDe,
        Func<TResult> onDj,
        Func<TResult> onDk,
        Func<TResult> onDm,
        Func<TResult> onDo,
        Func<TResult> onDz,
        Func<TResult> onEc,
        Func<TResult> onEe,
        Func<TResult> onEg,
        Func<TResult> onEh,
        Func<TResult> onEr,
        Func<TResult> onEs,
        Func<TResult> onEt,
        Func<TResult> onFi,
        Func<TResult> onFj,
        Func<TResult> onFk,
        Func<TResult> onFm,
        Func<TResult> onFo,
        Func<TResult> onFr,
        Func<TResult> onGa,
        Func<TResult> onGd,
        Func<TResult> onGe,
        Func<TResult> onGf,
        Func<TResult> onGg,
        Func<TResult> onGh,
        Func<TResult> onGi,
        Func<TResult> onGl,
        Func<TResult> onGm,
        Func<TResult> onGn,
        Func<TResult> onGp,
        Func<TResult> onGq,
        Func<TResult> onGr,
        Func<TResult> onGs,
        Func<TResult> onGt,
        Func<TResult> onGu,
        Func<TResult> onGw,
        Func<TResult> onGy,
        Func<TResult> onHk,
        Func<TResult> onHm,
        Func<TResult> onHn,
        Func<TResult> onHr,
        Func<TResult> onHt,
        Func<TResult> onHu,
        Func<TResult> onId,
        Func<TResult> onIe,
        Func<TResult> onIl,
        Func<TResult> onIm,
        Func<TResult> onIn,
        Func<TResult> onIq,
        Func<TResult> onIr,
        Func<TResult> onIsMember,
        Func<TResult> onIt,
        Func<TResult> onJe,
        Func<TResult> onJm,
        Func<TResult> onJo,
        Func<TResult> onJp,
        Func<TResult> onKe,
        Func<TResult> onKg,
        Func<TResult> onKh,
        Func<TResult> onKi,
        Func<TResult> onKm,
        Func<TResult> onKn,
        Func<TResult> onKp,
        Func<TResult> onKr,
        Func<TResult> onKw,
        Func<TResult> onKy,
        Func<TResult> onKz,
        Func<TResult> onLa,
        Func<TResult> onLb,
        Func<TResult> onLc,
        Func<TResult> onLi,
        Func<TResult> onLk,
        Func<TResult> onLr,
        Func<TResult> onLs,
        Func<TResult> onLt,
        Func<TResult> onLu,
        Func<TResult> onLv,
        Func<TResult> onLy,
        Func<TResult> onMa,
        Func<TResult> onMc,
        Func<TResult> onMd,
        Func<TResult> onMe,
        Func<TResult> onMf,
        Func<TResult> onMg,
        Func<TResult> onMh,
        Func<TResult> onMk,
        Func<TResult> onMl,
        Func<TResult> onMm,
        Func<TResult> onMn,
        Func<TResult> onMo,
        Func<TResult> onMp,
        Func<TResult> onMq,
        Func<TResult> onMr,
        Func<TResult> onMs,
        Func<TResult> onMt,
        Func<TResult> onMu,
        Func<TResult> onMv,
        Func<TResult> onMw,
        Func<TResult> onMx,
        Func<TResult> onMy,
        Func<TResult> onMz,
        Func<TResult> onNa,
        Func<TResult> onNc,
        Func<TResult> onNe,
        Func<TResult> onNf,
        Func<TResult> onNg,
        Func<TResult> onNi,
        Func<TResult> onNl,
        Func<TResult> onNo,
        Func<TResult> onNp,
        Func<TResult> onNr,
        Func<TResult> onNu,
        Func<TResult> onNz,
        Func<TResult> onOm,
        Func<TResult> onPa,
        Func<TResult> onPe,
        Func<TResult> onPf,
        Func<TResult> onPg,
        Func<TResult> onPh,
        Func<TResult> onPk,
        Func<TResult> onPl,
        Func<TResult> onPm,
        Func<TResult> onPn,
        Func<TResult> onPr,
        Func<TResult> onPs,
        Func<TResult> onPt,
        Func<TResult> onPw,
        Func<TResult> onPy,
        Func<TResult> onQa,
        Func<TResult> onRe,
        Func<TResult> onRo,
        Func<TResult> onRs,
        Func<TResult> onRu,
        Func<TResult> onRw,
        Func<TResult> onSa,
        Func<TResult> onSb,
        Func<TResult> onSc,
        Func<TResult> onSd,
        Func<TResult> onSe,
        Func<TResult> onSg,
        Func<TResult> onSh,
        Func<TResult> onSi,
        Func<TResult> onSj,
        Func<TResult> onSk,
        Func<TResult> onSl,
        Func<TResult> onSm,
        Func<TResult> onSn,
        Func<TResult> onSo,
        Func<TResult> onSr,
        Func<TResult> onSs,
        Func<TResult> onSt,
        Func<TResult> onSv,
        Func<TResult> onSx,
        Func<TResult> onSy,
        Func<TResult> onSz,
        Func<TResult> onTc,
        Func<TResult> onTd,
        Func<TResult> onTf,
        Func<TResult> onTg,
        Func<TResult> onTh,
        Func<TResult> onTj,
        Func<TResult> onTk,
        Func<TResult> onTl,
        Func<TResult> onTm,
        Func<TResult> onTn,
        Func<TResult> onTo,
        Func<TResult> onTr,
        Func<TResult> onTt,
        Func<TResult> onTv,
        Func<TResult> onTw,
        Func<TResult> onTz,
        Func<TResult> onUa,
        Func<TResult> onUg,
        Func<TResult> onUk,
        Func<TResult> onUs,
        Func<TResult> onUy,
        Func<TResult> onUz,
        Func<TResult> onVa,
        Func<TResult> onVc,
        Func<TResult> onVe,
        Func<TResult> onVg,
        Func<TResult> onVi,
        Func<TResult> onVn,
        Func<TResult> onVu,
        Func<TResult> onWf,
        Func<TResult> onWs,
        Func<TResult> onXk,
        Func<TResult> onYe,
        Func<TResult> onYt,
        Func<TResult> onZa,
        Func<TResult> onZm,
        Func<TResult> onZw,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ad => onAd(),
            _ when this == Ae => onAe(),
            _ when this == Af => onAf(),
            _ when this == Ag => onAg(),
            _ when this == Ai => onAi(),
            _ when this == Al => onAl(),
            _ when this == Am => onAm(),
            _ when this == An => onAn(),
            _ when this == Ao => onAo(),
            _ when this == Aq => onAq(),
            _ when this == Ar => onAr(),
            _ when this == As => onAs(),
            _ when this == At => onAt(),
            _ when this == Au => onAu(),
            _ when this == Aw => onAw(),
            _ when this == Az => onAz(),
            _ when this == Ba => onBa(),
            _ when this == Bb => onBb(),
            _ when this == Bd => onBd(),
            _ when this == Be => onBe(),
            _ when this == Bf => onBf(),
            _ when this == Bg => onBg(),
            _ when this == Bh => onBh(),
            _ when this == Bi => onBi(),
            _ when this == Bj => onBj(),
            _ when this == Bl => onBl(),
            _ when this == Bm => onBm(),
            _ when this == Bn => onBn(),
            _ when this == Bo => onBo(),
            _ when this == Bq => onBq(),
            _ when this == Br => onBr(),
            _ when this == Bs => onBs(),
            _ when this == Bt => onBt(),
            _ when this == Bv => onBv(),
            _ when this == Bw => onBw(),
            _ when this == By => onBy(),
            _ when this == Bz => onBz(),
            _ when this == Ca => onCa(),
            _ when this == Cc => onCc(),
            _ when this == Cd => onCd(),
            _ when this == Cf => onCf(),
            _ when this == Cg => onCg(),
            _ when this == Ch => onCh(),
            _ when this == Ci => onCi(),
            _ when this == Ck => onCk(),
            _ when this == Cl => onCl(),
            _ when this == Cm => onCm(),
            _ when this == Co => onCo(),
            _ when this == Cr => onCr(),
            _ when this == Cs => onCs(),
            _ when this == Cu => onCu(),
            _ when this == Cv => onCv(),
            _ when this == Cw => onCw(),
            _ when this == Cx => onCx(),
            _ when this == Cy => onCy(),
            _ when this == Cz => onCz(),
            _ when this == De => onDe(),
            _ when this == Dj => onDj(),
            _ when this == Dk => onDk(),
            _ when this == Dm => onDm(),
            _ when this == Do => onDo(),
            _ when this == Dz => onDz(),
            _ when this == Ec => onEc(),
            _ when this == Ee => onEe(),
            _ when this == Eg => onEg(),
            _ when this == Eh => onEh(),
            _ when this == Er => onEr(),
            _ when this == Es => onEs(),
            _ when this == Et => onEt(),
            _ when this == Fi => onFi(),
            _ when this == Fj => onFj(),
            _ when this == Fk => onFk(),
            _ when this == Fm => onFm(),
            _ when this == Fo => onFo(),
            _ when this == Fr => onFr(),
            _ when this == Ga => onGa(),
            _ when this == Gd => onGd(),
            _ when this == Ge => onGe(),
            _ when this == Gf => onGf(),
            _ when this == Gg => onGg(),
            _ when this == Gh => onGh(),
            _ when this == Gi => onGi(),
            _ when this == Gl => onGl(),
            _ when this == Gm => onGm(),
            _ when this == Gn => onGn(),
            _ when this == Gp => onGp(),
            _ when this == Gq => onGq(),
            _ when this == Gr => onGr(),
            _ when this == Gs => onGs(),
            _ when this == Gt => onGt(),
            _ when this == Gu => onGu(),
            _ when this == Gw => onGw(),
            _ when this == Gy => onGy(),
            _ when this == Hk => onHk(),
            _ when this == Hm => onHm(),
            _ when this == Hn => onHn(),
            _ when this == Hr => onHr(),
            _ when this == Ht => onHt(),
            _ when this == Hu => onHu(),
            _ when this == Id => onId(),
            _ when this == Ie => onIe(),
            _ when this == Il => onIl(),
            _ when this == Im => onIm(),
            _ when this == In => onIn(),
            _ when this == Iq => onIq(),
            _ when this == Ir => onIr(),
            _ when this == IsMember => onIsMember(),
            _ when this == It => onIt(),
            _ when this == Je => onJe(),
            _ when this == Jm => onJm(),
            _ when this == Jo => onJo(),
            _ when this == Jp => onJp(),
            _ when this == Ke => onKe(),
            _ when this == Kg => onKg(),
            _ when this == Kh => onKh(),
            _ when this == Ki => onKi(),
            _ when this == Km => onKm(),
            _ when this == Kn => onKn(),
            _ when this == Kp => onKp(),
            _ when this == Kr => onKr(),
            _ when this == Kw => onKw(),
            _ when this == Ky => onKy(),
            _ when this == Kz => onKz(),
            _ when this == La => onLa(),
            _ when this == Lb => onLb(),
            _ when this == Lc => onLc(),
            _ when this == Li => onLi(),
            _ when this == Lk => onLk(),
            _ when this == Lr => onLr(),
            _ when this == Ls => onLs(),
            _ when this == Lt => onLt(),
            _ when this == Lu => onLu(),
            _ when this == Lv => onLv(),
            _ when this == Ly => onLy(),
            _ when this == Ma => onMa(),
            _ when this == Mc => onMc(),
            _ when this == Md => onMd(),
            _ when this == Me => onMe(),
            _ when this == Mf => onMf(),
            _ when this == Mg => onMg(),
            _ when this == Mh => onMh(),
            _ when this == Mk => onMk(),
            _ when this == Ml => onMl(),
            _ when this == Mm => onMm(),
            _ when this == Mn => onMn(),
            _ when this == Mo => onMo(),
            _ when this == Mp => onMp(),
            _ when this == Mq => onMq(),
            _ when this == Mr => onMr(),
            _ when this == Ms => onMs(),
            _ when this == Mt => onMt(),
            _ when this == Mu => onMu(),
            _ when this == Mv => onMv(),
            _ when this == Mw => onMw(),
            _ when this == Mx => onMx(),
            _ when this == My => onMy(),
            _ when this == Mz => onMz(),
            _ when this == Na => onNa(),
            _ when this == Nc => onNc(),
            _ when this == Ne => onNe(),
            _ when this == Nf => onNf(),
            _ when this == Ng => onNg(),
            _ when this == Ni => onNi(),
            _ when this == Nl => onNl(),
            _ when this == No => onNo(),
            _ when this == Np => onNp(),
            _ when this == Nr => onNr(),
            _ when this == Nu => onNu(),
            _ when this == Nz => onNz(),
            _ when this == Om => onOm(),
            _ when this == Pa => onPa(),
            _ when this == Pe => onPe(),
            _ when this == Pf => onPf(),
            _ when this == Pg => onPg(),
            _ when this == Ph => onPh(),
            _ when this == Pk => onPk(),
            _ when this == Pl => onPl(),
            _ when this == Pm => onPm(),
            _ when this == Pn => onPn(),
            _ when this == Pr => onPr(),
            _ when this == Ps => onPs(),
            _ when this == Pt => onPt(),
            _ when this == Pw => onPw(),
            _ when this == Py => onPy(),
            _ when this == Qa => onQa(),
            _ when this == Re => onRe(),
            _ when this == Ro => onRo(),
            _ when this == Rs => onRs(),
            _ when this == Ru => onRu(),
            _ when this == Rw => onRw(),
            _ when this == Sa => onSa(),
            _ when this == Sb => onSb(),
            _ when this == Sc => onSc(),
            _ when this == Sd => onSd(),
            _ when this == Se => onSe(),
            _ when this == Sg => onSg(),
            _ when this == Sh => onSh(),
            _ when this == Si => onSi(),
            _ when this == Sj => onSj(),
            _ when this == Sk => onSk(),
            _ when this == Sl => onSl(),
            _ when this == Sm => onSm(),
            _ when this == Sn => onSn(),
            _ when this == So => onSo(),
            _ when this == Sr => onSr(),
            _ when this == Ss => onSs(),
            _ when this == St => onSt(),
            _ when this == Sv => onSv(),
            _ when this == Sx => onSx(),
            _ when this == Sy => onSy(),
            _ when this == Sz => onSz(),
            _ when this == Tc => onTc(),
            _ when this == Td => onTd(),
            _ when this == Tf => onTf(),
            _ when this == Tg => onTg(),
            _ when this == Th => onTh(),
            _ when this == Tj => onTj(),
            _ when this == Tk => onTk(),
            _ when this == Tl => onTl(),
            _ when this == Tm => onTm(),
            _ when this == Tn => onTn(),
            _ when this == To => onTo(),
            _ when this == Tr => onTr(),
            _ when this == Tt => onTt(),
            _ when this == Tv => onTv(),
            _ when this == Tw => onTw(),
            _ when this == Tz => onTz(),
            _ when this == Ua => onUa(),
            _ when this == Ug => onUg(),
            _ when this == Uk => onUk(),
            _ when this == Us => onUs(),
            _ when this == Uy => onUy(),
            _ when this == Uz => onUz(),
            _ when this == Va => onVa(),
            _ when this == Vc => onVc(),
            _ when this == Ve => onVe(),
            _ when this == Vg => onVg(),
            _ when this == Vi => onVi(),
            _ when this == Vn => onVn(),
            _ when this == Vu => onVu(),
            _ when this == Wf => onWf(),
            _ when this == Ws => onWs(),
            _ when this == Xk => onXk(),
            _ when this == Ye => onYe(),
            _ when this == Yt => onYt(),
            _ when this == Za => onZa(),
            _ when this == Zm => onZm(),
            _ when this == Zw => onZw(),
            _ => otherwise(Value)
        };

    public void Match(Action onAd,
        Action onAe,
        Action onAf,
        Action onAg,
        Action onAi,
        Action onAl,
        Action onAm,
        Action onAn,
        Action onAo,
        Action onAq,
        Action onAr,
        Action onAs,
        Action onAt,
        Action onAu,
        Action onAw,
        Action onAz,
        Action onBa,
        Action onBb,
        Action onBd,
        Action onBe,
        Action onBf,
        Action onBg,
        Action onBh,
        Action onBi,
        Action onBj,
        Action onBl,
        Action onBm,
        Action onBn,
        Action onBo,
        Action onBq,
        Action onBr,
        Action onBs,
        Action onBt,
        Action onBv,
        Action onBw,
        Action onBy,
        Action onBz,
        Action onCa,
        Action onCc,
        Action onCd,
        Action onCf,
        Action onCg,
        Action onCh,
        Action onCi,
        Action onCk,
        Action onCl,
        Action onCm,
        Action onCo,
        Action onCr,
        Action onCs,
        Action onCu,
        Action onCv,
        Action onCw,
        Action onCx,
        Action onCy,
        Action onCz,
        Action onDe,
        Action onDj,
        Action onDk,
        Action onDm,
        Action onDo,
        Action onDz,
        Action onEc,
        Action onEe,
        Action onEg,
        Action onEh,
        Action onEr,
        Action onEs,
        Action onEt,
        Action onFi,
        Action onFj,
        Action onFk,
        Action onFm,
        Action onFo,
        Action onFr,
        Action onGa,
        Action onGd,
        Action onGe,
        Action onGf,
        Action onGg,
        Action onGh,
        Action onGi,
        Action onGl,
        Action onGm,
        Action onGn,
        Action onGp,
        Action onGq,
        Action onGr,
        Action onGs,
        Action onGt,
        Action onGu,
        Action onGw,
        Action onGy,
        Action onHk,
        Action onHm,
        Action onHn,
        Action onHr,
        Action onHt,
        Action onHu,
        Action onId,
        Action onIe,
        Action onIl,
        Action onIm,
        Action onIn,
        Action onIq,
        Action onIr,
        Action onIsMember,
        Action onIt,
        Action onJe,
        Action onJm,
        Action onJo,
        Action onJp,
        Action onKe,
        Action onKg,
        Action onKh,
        Action onKi,
        Action onKm,
        Action onKn,
        Action onKp,
        Action onKr,
        Action onKw,
        Action onKy,
        Action onKz,
        Action onLa,
        Action onLb,
        Action onLc,
        Action onLi,
        Action onLk,
        Action onLr,
        Action onLs,
        Action onLt,
        Action onLu,
        Action onLv,
        Action onLy,
        Action onMa,
        Action onMc,
        Action onMd,
        Action onMe,
        Action onMf,
        Action onMg,
        Action onMh,
        Action onMk,
        Action onMl,
        Action onMm,
        Action onMn,
        Action onMo,
        Action onMp,
        Action onMq,
        Action onMr,
        Action onMs,
        Action onMt,
        Action onMu,
        Action onMv,
        Action onMw,
        Action onMx,
        Action onMy,
        Action onMz,
        Action onNa,
        Action onNc,
        Action onNe,
        Action onNf,
        Action onNg,
        Action onNi,
        Action onNl,
        Action onNo,
        Action onNp,
        Action onNr,
        Action onNu,
        Action onNz,
        Action onOm,
        Action onPa,
        Action onPe,
        Action onPf,
        Action onPg,
        Action onPh,
        Action onPk,
        Action onPl,
        Action onPm,
        Action onPn,
        Action onPr,
        Action onPs,
        Action onPt,
        Action onPw,
        Action onPy,
        Action onQa,
        Action onRe,
        Action onRo,
        Action onRs,
        Action onRu,
        Action onRw,
        Action onSa,
        Action onSb,
        Action onSc,
        Action onSd,
        Action onSe,
        Action onSg,
        Action onSh,
        Action onSi,
        Action onSj,
        Action onSk,
        Action onSl,
        Action onSm,
        Action onSn,
        Action onSo,
        Action onSr,
        Action onSs,
        Action onSt,
        Action onSv,
        Action onSx,
        Action onSy,
        Action onSz,
        Action onTc,
        Action onTd,
        Action onTf,
        Action onTg,
        Action onTh,
        Action onTj,
        Action onTk,
        Action onTl,
        Action onTm,
        Action onTn,
        Action onTo,
        Action onTr,
        Action onTt,
        Action onTv,
        Action onTw,
        Action onTz,
        Action onUa,
        Action onUg,
        Action onUk,
        Action onUs,
        Action onUy,
        Action onUz,
        Action onVa,
        Action onVc,
        Action onVe,
        Action onVg,
        Action onVi,
        Action onVn,
        Action onVu,
        Action onWf,
        Action onWs,
        Action onXk,
        Action onYe,
        Action onYt,
        Action onZa,
        Action onZm,
        Action onZw,
        Action<string> otherwise)
    {
        if (this == Ad) onAd();
        else if (this == Ae) onAe();
        else if (this == Af) onAf();
        else if (this == Ag) onAg();
        else if (this == Ai) onAi();
        else if (this == Al) onAl();
        else if (this == Am) onAm();
        else if (this == An) onAn();
        else if (this == Ao) onAo();
        else if (this == Aq) onAq();
        else if (this == Ar) onAr();
        else if (this == As) onAs();
        else if (this == At) onAt();
        else if (this == Au) onAu();
        else if (this == Aw) onAw();
        else if (this == Az) onAz();
        else if (this == Ba) onBa();
        else if (this == Bb) onBb();
        else if (this == Bd) onBd();
        else if (this == Be) onBe();
        else if (this == Bf) onBf();
        else if (this == Bg) onBg();
        else if (this == Bh) onBh();
        else if (this == Bi) onBi();
        else if (this == Bj) onBj();
        else if (this == Bl) onBl();
        else if (this == Bm) onBm();
        else if (this == Bn) onBn();
        else if (this == Bo) onBo();
        else if (this == Bq) onBq();
        else if (this == Br) onBr();
        else if (this == Bs) onBs();
        else if (this == Bt) onBt();
        else if (this == Bv) onBv();
        else if (this == Bw) onBw();
        else if (this == By) onBy();
        else if (this == Bz) onBz();
        else if (this == Ca) onCa();
        else if (this == Cc) onCc();
        else if (this == Cd) onCd();
        else if (this == Cf) onCf();
        else if (this == Cg) onCg();
        else if (this == Ch) onCh();
        else if (this == Ci) onCi();
        else if (this == Ck) onCk();
        else if (this == Cl) onCl();
        else if (this == Cm) onCm();
        else if (this == Co) onCo();
        else if (this == Cr) onCr();
        else if (this == Cs) onCs();
        else if (this == Cu) onCu();
        else if (this == Cv) onCv();
        else if (this == Cw) onCw();
        else if (this == Cx) onCx();
        else if (this == Cy) onCy();
        else if (this == Cz) onCz();
        else if (this == De) onDe();
        else if (this == Dj) onDj();
        else if (this == Dk) onDk();
        else if (this == Dm) onDm();
        else if (this == Do) onDo();
        else if (this == Dz) onDz();
        else if (this == Ec) onEc();
        else if (this == Ee) onEe();
        else if (this == Eg) onEg();
        else if (this == Eh) onEh();
        else if (this == Er) onEr();
        else if (this == Es) onEs();
        else if (this == Et) onEt();
        else if (this == Fi) onFi();
        else if (this == Fj) onFj();
        else if (this == Fk) onFk();
        else if (this == Fm) onFm();
        else if (this == Fo) onFo();
        else if (this == Fr) onFr();
        else if (this == Ga) onGa();
        else if (this == Gd) onGd();
        else if (this == Ge) onGe();
        else if (this == Gf) onGf();
        else if (this == Gg) onGg();
        else if (this == Gh) onGh();
        else if (this == Gi) onGi();
        else if (this == Gl) onGl();
        else if (this == Gm) onGm();
        else if (this == Gn) onGn();
        else if (this == Gp) onGp();
        else if (this == Gq) onGq();
        else if (this == Gr) onGr();
        else if (this == Gs) onGs();
        else if (this == Gt) onGt();
        else if (this == Gu) onGu();
        else if (this == Gw) onGw();
        else if (this == Gy) onGy();
        else if (this == Hk) onHk();
        else if (this == Hm) onHm();
        else if (this == Hn) onHn();
        else if (this == Hr) onHr();
        else if (this == Ht) onHt();
        else if (this == Hu) onHu();
        else if (this == Id) onId();
        else if (this == Ie) onIe();
        else if (this == Il) onIl();
        else if (this == Im) onIm();
        else if (this == In) onIn();
        else if (this == Iq) onIq();
        else if (this == Ir) onIr();
        else if (this == IsMember) onIsMember();
        else if (this == It) onIt();
        else if (this == Je) onJe();
        else if (this == Jm) onJm();
        else if (this == Jo) onJo();
        else if (this == Jp) onJp();
        else if (this == Ke) onKe();
        else if (this == Kg) onKg();
        else if (this == Kh) onKh();
        else if (this == Ki) onKi();
        else if (this == Km) onKm();
        else if (this == Kn) onKn();
        else if (this == Kp) onKp();
        else if (this == Kr) onKr();
        else if (this == Kw) onKw();
        else if (this == Ky) onKy();
        else if (this == Kz) onKz();
        else if (this == La) onLa();
        else if (this == Lb) onLb();
        else if (this == Lc) onLc();
        else if (this == Li) onLi();
        else if (this == Lk) onLk();
        else if (this == Lr) onLr();
        else if (this == Ls) onLs();
        else if (this == Lt) onLt();
        else if (this == Lu) onLu();
        else if (this == Lv) onLv();
        else if (this == Ly) onLy();
        else if (this == Ma) onMa();
        else if (this == Mc) onMc();
        else if (this == Md) onMd();
        else if (this == Me) onMe();
        else if (this == Mf) onMf();
        else if (this == Mg) onMg();
        else if (this == Mh) onMh();
        else if (this == Mk) onMk();
        else if (this == Ml) onMl();
        else if (this == Mm) onMm();
        else if (this == Mn) onMn();
        else if (this == Mo) onMo();
        else if (this == Mp) onMp();
        else if (this == Mq) onMq();
        else if (this == Mr) onMr();
        else if (this == Ms) onMs();
        else if (this == Mt) onMt();
        else if (this == Mu) onMu();
        else if (this == Mv) onMv();
        else if (this == Mw) onMw();
        else if (this == Mx) onMx();
        else if (this == My) onMy();
        else if (this == Mz) onMz();
        else if (this == Na) onNa();
        else if (this == Nc) onNc();
        else if (this == Ne) onNe();
        else if (this == Nf) onNf();
        else if (this == Ng) onNg();
        else if (this == Ni) onNi();
        else if (this == Nl) onNl();
        else if (this == No) onNo();
        else if (this == Np) onNp();
        else if (this == Nr) onNr();
        else if (this == Nu) onNu();
        else if (this == Nz) onNz();
        else if (this == Om) onOm();
        else if (this == Pa) onPa();
        else if (this == Pe) onPe();
        else if (this == Pf) onPf();
        else if (this == Pg) onPg();
        else if (this == Ph) onPh();
        else if (this == Pk) onPk();
        else if (this == Pl) onPl();
        else if (this == Pm) onPm();
        else if (this == Pn) onPn();
        else if (this == Pr) onPr();
        else if (this == Ps) onPs();
        else if (this == Pt) onPt();
        else if (this == Pw) onPw();
        else if (this == Py) onPy();
        else if (this == Qa) onQa();
        else if (this == Re) onRe();
        else if (this == Ro) onRo();
        else if (this == Rs) onRs();
        else if (this == Ru) onRu();
        else if (this == Rw) onRw();
        else if (this == Sa) onSa();
        else if (this == Sb) onSb();
        else if (this == Sc) onSc();
        else if (this == Sd) onSd();
        else if (this == Se) onSe();
        else if (this == Sg) onSg();
        else if (this == Sh) onSh();
        else if (this == Si) onSi();
        else if (this == Sj) onSj();
        else if (this == Sk) onSk();
        else if (this == Sl) onSl();
        else if (this == Sm) onSm();
        else if (this == Sn) onSn();
        else if (this == So) onSo();
        else if (this == Sr) onSr();
        else if (this == Ss) onSs();
        else if (this == St) onSt();
        else if (this == Sv) onSv();
        else if (this == Sx) onSx();
        else if (this == Sy) onSy();
        else if (this == Sz) onSz();
        else if (this == Tc) onTc();
        else if (this == Td) onTd();
        else if (this == Tf) onTf();
        else if (this == Tg) onTg();
        else if (this == Th) onTh();
        else if (this == Tj) onTj();
        else if (this == Tk) onTk();
        else if (this == Tl) onTl();
        else if (this == Tm) onTm();
        else if (this == Tn) onTn();
        else if (this == To) onTo();
        else if (this == Tr) onTr();
        else if (this == Tt) onTt();
        else if (this == Tv) onTv();
        else if (this == Tw) onTw();
        else if (this == Tz) onTz();
        else if (this == Ua) onUa();
        else if (this == Ug) onUg();
        else if (this == Uk) onUk();
        else if (this == Us) onUs();
        else if (this == Uy) onUy();
        else if (this == Uz) onUz();
        else if (this == Va) onVa();
        else if (this == Vc) onVc();
        else if (this == Ve) onVe();
        else if (this == Vg) onVg();
        else if (this == Vi) onVi();
        else if (this == Vn) onVn();
        else if (this == Vu) onVu();
        else if (this == Wf) onWf();
        else if (this == Ws) onWs();
        else if (this == Xk) onXk();
        else if (this == Ye) onYe();
        else if (this == Yt) onYt();
        else if (this == Za) onZa();
        else if (this == Zm) onZm();
        else if (this == Zw) onZw();
        else otherwise(Value);
    }
}
