using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Country/region code for localized response, using ISO 3166-1 alpha-2 country codes.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CountryCode2>))]
public sealed record CountryCode2 : OpenStringEnum<CountryCode2>
{
    private CountryCode2(string value) : base(value)
    {
    }

    public static readonly CountryCode2 Ad = new("AD");

    public static readonly CountryCode2 Ae = new("AE");

    public static readonly CountryCode2 Af = new("AF");

    public static readonly CountryCode2 Ag = new("AG");

    public static readonly CountryCode2 Ai = new("AI");

    public static readonly CountryCode2 Al = new("AL");

    public static readonly CountryCode2 Am = new("AM");

    public static readonly CountryCode2 Ao = new("AO");

    public static readonly CountryCode2 Aq = new("AQ");

    public static readonly CountryCode2 Ar = new("AR");

    public static readonly CountryCode2 As = new("AS");

    public static readonly CountryCode2 At = new("AT");

    public static readonly CountryCode2 Au = new("AU");

    public static readonly CountryCode2 Aw = new("AW");

    public static readonly CountryCode2 Ax = new("AX");

    public static readonly CountryCode2 Az = new("AZ");

    public static readonly CountryCode2 Ba = new("BA");

    public static readonly CountryCode2 Bb = new("BB");

    public static readonly CountryCode2 Bd = new("BD");

    public static readonly CountryCode2 Be = new("BE");

    public static readonly CountryCode2 Bf = new("BF");

    public static readonly CountryCode2 Bg = new("BG");

    public static readonly CountryCode2 Bh = new("BH");

    public static readonly CountryCode2 Bi = new("BI");

    public static readonly CountryCode2 Bj = new("BJ");

    public static readonly CountryCode2 Bl = new("BL");

    public static readonly CountryCode2 Bm = new("BM");

    public static readonly CountryCode2 Bn = new("BN");

    public static readonly CountryCode2 Bo = new("BO");

    public static readonly CountryCode2 Bq = new("BQ");

    public static readonly CountryCode2 Br = new("BR");

    public static readonly CountryCode2 Bs = new("BS");

    public static readonly CountryCode2 Bt = new("BT");

    public static readonly CountryCode2 Bv = new("BV");

    public static readonly CountryCode2 Bw = new("BW");

    public static readonly CountryCode2 By = new("BY");

    public static readonly CountryCode2 Bz = new("BZ");

    public static readonly CountryCode2 Ca = new("CA");

    public static readonly CountryCode2 Cc = new("CC");

    public static readonly CountryCode2 Cd = new("CD");

    public static readonly CountryCode2 Cf = new("CF");

    public static readonly CountryCode2 Cg = new("CG");

    public static readonly CountryCode2 Ch = new("CH");

    public static readonly CountryCode2 Ci = new("CI");

    public static readonly CountryCode2 Ck = new("CK");

    public static readonly CountryCode2 Cl = new("CL");

    public static readonly CountryCode2 Cm = new("CM");

    public static readonly CountryCode2 Cn = new("CN");

    public static readonly CountryCode2 Co = new("CO");

    public static readonly CountryCode2 Cr = new("CR");

    public static readonly CountryCode2 Cu = new("CU");

    public static readonly CountryCode2 Cv = new("CV");

    public static readonly CountryCode2 Cw = new("CW");

    public static readonly CountryCode2 Cx = new("CX");

    public static readonly CountryCode2 Cy = new("CY");

    public static readonly CountryCode2 Cz = new("CZ");

    public static readonly CountryCode2 De = new("DE");

    public static readonly CountryCode2 Dj = new("DJ");

    public static readonly CountryCode2 Dk = new("DK");

    public static readonly CountryCode2 Dm = new("DM");

    public static readonly CountryCode2 Do = new("DO");

    public static readonly CountryCode2 Dz = new("DZ");

    public static readonly CountryCode2 Ec = new("EC");

    public static readonly CountryCode2 Ee = new("EE");

    public static readonly CountryCode2 Eg = new("EG");

    public static readonly CountryCode2 Eh = new("EH");

    public static readonly CountryCode2 Er = new("ER");

    public static readonly CountryCode2 Es = new("ES");

    public static readonly CountryCode2 Et = new("ET");

    public static readonly CountryCode2 Fi = new("FI");

    public static readonly CountryCode2 Fj = new("FJ");

    public static readonly CountryCode2 Fk = new("FK");

    public static readonly CountryCode2 Fm = new("FM");

    public static readonly CountryCode2 Fo = new("FO");

    public static readonly CountryCode2 Fr = new("FR");

    public static readonly CountryCode2 Ga = new("GA");

    public static readonly CountryCode2 Gb = new("GB");

    public static readonly CountryCode2 Gd = new("GD");

    public static readonly CountryCode2 Ge = new("GE");

    public static readonly CountryCode2 Gf = new("GF");

    public static readonly CountryCode2 Gg = new("GG");

    public static readonly CountryCode2 Gh = new("GH");

    public static readonly CountryCode2 Gi = new("GI");

    public static readonly CountryCode2 Gl = new("GL");

    public static readonly CountryCode2 Gm = new("GM");

    public static readonly CountryCode2 Gn = new("GN");

    public static readonly CountryCode2 Gp = new("GP");

    public static readonly CountryCode2 Gq = new("GQ");

    public static readonly CountryCode2 Gr = new("GR");

    public static readonly CountryCode2 Gs = new("GS");

    public static readonly CountryCode2 Gt = new("GT");

    public static readonly CountryCode2 Gu = new("GU");

    public static readonly CountryCode2 Gw = new("GW");

    public static readonly CountryCode2 Gy = new("GY");

    public static readonly CountryCode2 Hk = new("HK");

    public static readonly CountryCode2 Hm = new("HM");

    public static readonly CountryCode2 Hn = new("HN");

    public static readonly CountryCode2 Hr = new("HR");

    public static readonly CountryCode2 Ht = new("HT");

    public static readonly CountryCode2 Hu = new("HU");

    public static readonly CountryCode2 Id = new("ID");

    public static readonly CountryCode2 Ie = new("IE");

    public static readonly CountryCode2 Il = new("IL");

    public static readonly CountryCode2 Im = new("IM");

    public static readonly CountryCode2 In = new("IN");

    public static readonly CountryCode2 Io = new("IO");

    public static readonly CountryCode2 Iq = new("IQ");

    public static readonly CountryCode2 Ir = new("IR");

    public static readonly CountryCode2 IsMember = new("IS");

    public static readonly CountryCode2 It = new("IT");

    public static readonly CountryCode2 Je = new("JE");

    public static readonly CountryCode2 Jm = new("JM");

    public static readonly CountryCode2 Jo = new("JO");

    public static readonly CountryCode2 Jp = new("JP");

    public static readonly CountryCode2 Ke = new("KE");

    public static readonly CountryCode2 Kg = new("KG");

    public static readonly CountryCode2 Kh = new("KH");

    public static readonly CountryCode2 Ki = new("KI");

    public static readonly CountryCode2 Km = new("KM");

    public static readonly CountryCode2 Kn = new("KN");

    public static readonly CountryCode2 Kp = new("KP");

    public static readonly CountryCode2 Kr = new("KR");

    public static readonly CountryCode2 Kw = new("KW");

    public static readonly CountryCode2 Ky = new("KY");

    public static readonly CountryCode2 Kz = new("KZ");

    public static readonly CountryCode2 La = new("LA");

    public static readonly CountryCode2 Lb = new("LB");

    public static readonly CountryCode2 Lc = new("LC");

    public static readonly CountryCode2 Li = new("LI");

    public static readonly CountryCode2 Lk = new("LK");

    public static readonly CountryCode2 Lr = new("LR");

    public static readonly CountryCode2 Ls = new("LS");

    public static readonly CountryCode2 Lt = new("LT");

    public static readonly CountryCode2 Lu = new("LU");

    public static readonly CountryCode2 Lv = new("LV");

    public static readonly CountryCode2 Ly = new("LY");

    public static readonly CountryCode2 Ma = new("MA");

    public static readonly CountryCode2 Mc = new("MC");

    public static readonly CountryCode2 Md = new("MD");

    public static readonly CountryCode2 Me = new("ME");

    public static readonly CountryCode2 Mf = new("MF");

    public static readonly CountryCode2 Mg = new("MG");

    public static readonly CountryCode2 Mh = new("MH");

    public static readonly CountryCode2 Mk = new("MK");

    public static readonly CountryCode2 Ml = new("ML");

    public static readonly CountryCode2 Mm = new("MM");

    public static readonly CountryCode2 Mn = new("MN");

    public static readonly CountryCode2 Mo = new("MO");

    public static readonly CountryCode2 Mp = new("MP");

    public static readonly CountryCode2 Mq = new("MQ");

    public static readonly CountryCode2 Mr = new("MR");

    public static readonly CountryCode2 Ms = new("MS");

    public static readonly CountryCode2 Mt = new("MT");

    public static readonly CountryCode2 Mu = new("MU");

    public static readonly CountryCode2 Mv = new("MV");

    public static readonly CountryCode2 Mw = new("MW");

    public static readonly CountryCode2 Mx = new("MX");

    public static readonly CountryCode2 My = new("MY");

    public static readonly CountryCode2 Mz = new("MZ");

    public static readonly CountryCode2 Na = new("NA");

    public static readonly CountryCode2 Nc = new("NC");

    public static readonly CountryCode2 Ne = new("NE");

    public static readonly CountryCode2 Nf = new("NF");

    public static readonly CountryCode2 Ng = new("NG");

    public static readonly CountryCode2 Ni = new("NI");

    public static readonly CountryCode2 Nl = new("NL");

    public static readonly CountryCode2 No = new("NO");

    public static readonly CountryCode2 Np = new("NP");

    public static readonly CountryCode2 Nr = new("NR");

    public static readonly CountryCode2 Nu = new("NU");

    public static readonly CountryCode2 Nz = new("NZ");

    public static readonly CountryCode2 Om = new("OM");

    public static readonly CountryCode2 Pa = new("PA");

    public static readonly CountryCode2 Pe = new("PE");

    public static readonly CountryCode2 Pf = new("PF");

    public static readonly CountryCode2 Pg = new("PG");

    public static readonly CountryCode2 Ph = new("PH");

    public static readonly CountryCode2 Pk = new("PK");

    public static readonly CountryCode2 Pl = new("PL");

    public static readonly CountryCode2 Pm = new("PM");

    public static readonly CountryCode2 Pn = new("PN");

    public static readonly CountryCode2 Pr = new("PR");

    public static readonly CountryCode2 Ps = new("PS");

    public static readonly CountryCode2 Pt = new("PT");

    public static readonly CountryCode2 Pw = new("PW");

    public static readonly CountryCode2 Py = new("PY");

    public static readonly CountryCode2 Qa = new("QA");

    public static readonly CountryCode2 Re = new("RE");

    public static readonly CountryCode2 Ro = new("RO");

    public static readonly CountryCode2 Rs = new("RS");

    public static readonly CountryCode2 Ru = new("RU");

    public static readonly CountryCode2 Rw = new("RW");

    public static readonly CountryCode2 Sa = new("SA");

    public static readonly CountryCode2 Sb = new("SB");

    public static readonly CountryCode2 Sc = new("SC");

    public static readonly CountryCode2 Sd = new("SD");

    public static readonly CountryCode2 Se = new("SE");

    public static readonly CountryCode2 Sg = new("SG");

    public static readonly CountryCode2 Sh = new("SH");

    public static readonly CountryCode2 Si = new("SI");

    public static readonly CountryCode2 Sj = new("SJ");

    public static readonly CountryCode2 Sk = new("SK");

    public static readonly CountryCode2 Sl = new("SL");

    public static readonly CountryCode2 Sm = new("SM");

    public static readonly CountryCode2 Sn = new("SN");

    public static readonly CountryCode2 So = new("SO");

    public static readonly CountryCode2 Sr = new("SR");

    public static readonly CountryCode2 Ss = new("SS");

    public static readonly CountryCode2 St = new("ST");

    public static readonly CountryCode2 Sv = new("SV");

    public static readonly CountryCode2 Sx = new("SX");

    public static readonly CountryCode2 Sy = new("SY");

    public static readonly CountryCode2 Sz = new("SZ");

    public static readonly CountryCode2 Tc = new("TC");

    public static readonly CountryCode2 Td = new("TD");

    public static readonly CountryCode2 Tf = new("TF");

    public static readonly CountryCode2 Tg = new("TG");

    public static readonly CountryCode2 Th = new("TH");

    public static readonly CountryCode2 Tj = new("TJ");

    public static readonly CountryCode2 Tk = new("TK");

    public static readonly CountryCode2 Tl = new("TL");

    public static readonly CountryCode2 Tm = new("TM");

    public static readonly CountryCode2 Tn = new("TN");

    public static readonly CountryCode2 To = new("TO");

    public static readonly CountryCode2 Tr = new("TR");

    public static readonly CountryCode2 Tt = new("TT");

    public static readonly CountryCode2 Tv = new("TV");

    public static readonly CountryCode2 Tw = new("TW");

    public static readonly CountryCode2 Tz = new("TZ");

    public static readonly CountryCode2 Ua = new("UA");

    public static readonly CountryCode2 Ug = new("UG");

    public static readonly CountryCode2 Um = new("UM");

    public static readonly CountryCode2 Us = new("US");

    public static readonly CountryCode2 Uy = new("UY");

    public static readonly CountryCode2 Uz = new("UZ");

    public static readonly CountryCode2 Va = new("VA");

    public static readonly CountryCode2 Vc = new("VC");

    public static readonly CountryCode2 Ve = new("VE");

    public static readonly CountryCode2 Vg = new("VG");

    public static readonly CountryCode2 Vi = new("VI");

    public static readonly CountryCode2 Vn = new("VN");

    public static readonly CountryCode2 Vu = new("VU");

    public static readonly CountryCode2 Wf = new("WF");

    public static readonly CountryCode2 Ws = new("WS");

    public static readonly CountryCode2 Xk = new("XK");

    public static readonly CountryCode2 Ye = new("YE");

    public static readonly CountryCode2 Yt = new("YT");

    public static readonly CountryCode2 Za = new("ZA");

    public static readonly CountryCode2 Zm = new("ZM");

    public static readonly CountryCode2 Zw = new("ZW");

    public TResult Match<TResult>(Func<TResult> onAd,
        Func<TResult> onAe,
        Func<TResult> onAf,
        Func<TResult> onAg,
        Func<TResult> onAi,
        Func<TResult> onAl,
        Func<TResult> onAm,
        Func<TResult> onAo,
        Func<TResult> onAq,
        Func<TResult> onAr,
        Func<TResult> onAs,
        Func<TResult> onAt,
        Func<TResult> onAu,
        Func<TResult> onAw,
        Func<TResult> onAx,
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
        Func<TResult> onCn,
        Func<TResult> onCo,
        Func<TResult> onCr,
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
        Func<TResult> onGb,
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
        Func<TResult> onIo,
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
        Func<TResult> onUm,
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
            _ when this == Ao => onAo(),
            _ when this == Aq => onAq(),
            _ when this == Ar => onAr(),
            _ when this == As => onAs(),
            _ when this == At => onAt(),
            _ when this == Au => onAu(),
            _ when this == Aw => onAw(),
            _ when this == Ax => onAx(),
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
            _ when this == Cn => onCn(),
            _ when this == Co => onCo(),
            _ when this == Cr => onCr(),
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
            _ when this == Gb => onGb(),
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
            _ when this == Io => onIo(),
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
            _ when this == Um => onUm(),
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
        Action onAo,
        Action onAq,
        Action onAr,
        Action onAs,
        Action onAt,
        Action onAu,
        Action onAw,
        Action onAx,
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
        Action onCn,
        Action onCo,
        Action onCr,
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
        Action onGb,
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
        Action onIo,
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
        Action onUm,
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
        else if (this == Ao) onAo();
        else if (this == Aq) onAq();
        else if (this == Ar) onAr();
        else if (this == As) onAs();
        else if (this == At) onAt();
        else if (this == Au) onAu();
        else if (this == Aw) onAw();
        else if (this == Ax) onAx();
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
        else if (this == Cn) onCn();
        else if (this == Co) onCo();
        else if (this == Cr) onCr();
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
        else if (this == Gb) onGb();
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
        else if (this == Io) onIo();
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
        else if (this == Um) onUm();
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
