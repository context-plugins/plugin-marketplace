using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// ISO 3166-1 alpha-2 country code for localized news results. See <see href="/api-reference/endpoint/countries">List of countries</see> for the codes each provider supports.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CountryCode1>))]
public sealed record CountryCode1 : OpenStringEnum<CountryCode1>
{
    private CountryCode1(string value) : base(value)
    {
    }

    public static readonly CountryCode1 Ad = new("AD");

    public static readonly CountryCode1 Ae = new("AE");

    public static readonly CountryCode1 Af = new("AF");

    public static readonly CountryCode1 Ag = new("AG");

    public static readonly CountryCode1 Ai = new("AI");

    public static readonly CountryCode1 Al = new("AL");

    public static readonly CountryCode1 Am = new("AM");

    public static readonly CountryCode1 Ao = new("AO");

    public static readonly CountryCode1 Aq = new("AQ");

    public static readonly CountryCode1 Ar = new("AR");

    public static readonly CountryCode1 As = new("AS");

    public static readonly CountryCode1 At = new("AT");

    public static readonly CountryCode1 Au = new("AU");

    public static readonly CountryCode1 Aw = new("AW");

    public static readonly CountryCode1 Ax = new("AX");

    public static readonly CountryCode1 Az = new("AZ");

    public static readonly CountryCode1 Ba = new("BA");

    public static readonly CountryCode1 Bb = new("BB");

    public static readonly CountryCode1 Bd = new("BD");

    public static readonly CountryCode1 Be = new("BE");

    public static readonly CountryCode1 Bf = new("BF");

    public static readonly CountryCode1 Bg = new("BG");

    public static readonly CountryCode1 Bh = new("BH");

    public static readonly CountryCode1 Bi = new("BI");

    public static readonly CountryCode1 Bj = new("BJ");

    public static readonly CountryCode1 Bl = new("BL");

    public static readonly CountryCode1 Bm = new("BM");

    public static readonly CountryCode1 Bn = new("BN");

    public static readonly CountryCode1 Bo = new("BO");

    public static readonly CountryCode1 Bq = new("BQ");

    public static readonly CountryCode1 Br = new("BR");

    public static readonly CountryCode1 Bs = new("BS");

    public static readonly CountryCode1 Bt = new("BT");

    public static readonly CountryCode1 Bv = new("BV");

    public static readonly CountryCode1 Bw = new("BW");

    public static readonly CountryCode1 By = new("BY");

    public static readonly CountryCode1 Bz = new("BZ");

    public static readonly CountryCode1 Ca = new("CA");

    public static readonly CountryCode1 Cc = new("CC");

    public static readonly CountryCode1 Cd = new("CD");

    public static readonly CountryCode1 Cf = new("CF");

    public static readonly CountryCode1 Cg = new("CG");

    public static readonly CountryCode1 Ch = new("CH");

    public static readonly CountryCode1 Ci = new("CI");

    public static readonly CountryCode1 Ck = new("CK");

    public static readonly CountryCode1 Cl = new("CL");

    public static readonly CountryCode1 Cm = new("CM");

    public static readonly CountryCode1 Cn = new("CN");

    public static readonly CountryCode1 Co = new("CO");

    public static readonly CountryCode1 Cr = new("CR");

    public static readonly CountryCode1 Cu = new("CU");

    public static readonly CountryCode1 Cv = new("CV");

    public static readonly CountryCode1 Cw = new("CW");

    public static readonly CountryCode1 Cx = new("CX");

    public static readonly CountryCode1 Cy = new("CY");

    public static readonly CountryCode1 Cz = new("CZ");

    public static readonly CountryCode1 De = new("DE");

    public static readonly CountryCode1 Dj = new("DJ");

    public static readonly CountryCode1 Dk = new("DK");

    public static readonly CountryCode1 Dm = new("DM");

    public static readonly CountryCode1 Do = new("DO");

    public static readonly CountryCode1 Dz = new("DZ");

    public static readonly CountryCode1 Ec = new("EC");

    public static readonly CountryCode1 Ee = new("EE");

    public static readonly CountryCode1 Eg = new("EG");

    public static readonly CountryCode1 Eh = new("EH");

    public static readonly CountryCode1 Er = new("ER");

    public static readonly CountryCode1 Es = new("ES");

    public static readonly CountryCode1 Et = new("ET");

    public static readonly CountryCode1 Fi = new("FI");

    public static readonly CountryCode1 Fj = new("FJ");

    public static readonly CountryCode1 Fk = new("FK");

    public static readonly CountryCode1 Fm = new("FM");

    public static readonly CountryCode1 Fo = new("FO");

    public static readonly CountryCode1 Fr = new("FR");

    public static readonly CountryCode1 Ga = new("GA");

    public static readonly CountryCode1 Gb = new("GB");

    public static readonly CountryCode1 Gd = new("GD");

    public static readonly CountryCode1 Ge = new("GE");

    public static readonly CountryCode1 Gf = new("GF");

    public static readonly CountryCode1 Gg = new("GG");

    public static readonly CountryCode1 Gh = new("GH");

    public static readonly CountryCode1 Gi = new("GI");

    public static readonly CountryCode1 Gl = new("GL");

    public static readonly CountryCode1 Gm = new("GM");

    public static readonly CountryCode1 Gn = new("GN");

    public static readonly CountryCode1 Gp = new("GP");

    public static readonly CountryCode1 Gq = new("GQ");

    public static readonly CountryCode1 Gr = new("GR");

    public static readonly CountryCode1 Gs = new("GS");

    public static readonly CountryCode1 Gt = new("GT");

    public static readonly CountryCode1 Gu = new("GU");

    public static readonly CountryCode1 Gw = new("GW");

    public static readonly CountryCode1 Gy = new("GY");

    public static readonly CountryCode1 Hk = new("HK");

    public static readonly CountryCode1 Hm = new("HM");

    public static readonly CountryCode1 Hn = new("HN");

    public static readonly CountryCode1 Hr = new("HR");

    public static readonly CountryCode1 Ht = new("HT");

    public static readonly CountryCode1 Hu = new("HU");

    public static readonly CountryCode1 Id = new("ID");

    public static readonly CountryCode1 Ie = new("IE");

    public static readonly CountryCode1 Il = new("IL");

    public static readonly CountryCode1 Im = new("IM");

    public static readonly CountryCode1 In = new("IN");

    public static readonly CountryCode1 Io = new("IO");

    public static readonly CountryCode1 Iq = new("IQ");

    public static readonly CountryCode1 Ir = new("IR");

    public static readonly CountryCode1 IsMember = new("IS");

    public static readonly CountryCode1 It = new("IT");

    public static readonly CountryCode1 Je = new("JE");

    public static readonly CountryCode1 Jm = new("JM");

    public static readonly CountryCode1 Jo = new("JO");

    public static readonly CountryCode1 Jp = new("JP");

    public static readonly CountryCode1 Ke = new("KE");

    public static readonly CountryCode1 Kg = new("KG");

    public static readonly CountryCode1 Kh = new("KH");

    public static readonly CountryCode1 Ki = new("KI");

    public static readonly CountryCode1 Km = new("KM");

    public static readonly CountryCode1 Kn = new("KN");

    public static readonly CountryCode1 Kp = new("KP");

    public static readonly CountryCode1 Kr = new("KR");

    public static readonly CountryCode1 Kw = new("KW");

    public static readonly CountryCode1 Ky = new("KY");

    public static readonly CountryCode1 Kz = new("KZ");

    public static readonly CountryCode1 La = new("LA");

    public static readonly CountryCode1 Lb = new("LB");

    public static readonly CountryCode1 Lc = new("LC");

    public static readonly CountryCode1 Li = new("LI");

    public static readonly CountryCode1 Lk = new("LK");

    public static readonly CountryCode1 Lr = new("LR");

    public static readonly CountryCode1 Ls = new("LS");

    public static readonly CountryCode1 Lt = new("LT");

    public static readonly CountryCode1 Lu = new("LU");

    public static readonly CountryCode1 Lv = new("LV");

    public static readonly CountryCode1 Ly = new("LY");

    public static readonly CountryCode1 Ma = new("MA");

    public static readonly CountryCode1 Mc = new("MC");

    public static readonly CountryCode1 Md = new("MD");

    public static readonly CountryCode1 Me = new("ME");

    public static readonly CountryCode1 Mf = new("MF");

    public static readonly CountryCode1 Mg = new("MG");

    public static readonly CountryCode1 Mh = new("MH");

    public static readonly CountryCode1 Mk = new("MK");

    public static readonly CountryCode1 Ml = new("ML");

    public static readonly CountryCode1 Mm = new("MM");

    public static readonly CountryCode1 Mn = new("MN");

    public static readonly CountryCode1 Mo = new("MO");

    public static readonly CountryCode1 Mp = new("MP");

    public static readonly CountryCode1 Mq = new("MQ");

    public static readonly CountryCode1 Mr = new("MR");

    public static readonly CountryCode1 Ms = new("MS");

    public static readonly CountryCode1 Mt = new("MT");

    public static readonly CountryCode1 Mu = new("MU");

    public static readonly CountryCode1 Mv = new("MV");

    public static readonly CountryCode1 Mw = new("MW");

    public static readonly CountryCode1 Mx = new("MX");

    public static readonly CountryCode1 My = new("MY");

    public static readonly CountryCode1 Mz = new("MZ");

    public static readonly CountryCode1 Na = new("NA");

    public static readonly CountryCode1 Nc = new("NC");

    public static readonly CountryCode1 Ne = new("NE");

    public static readonly CountryCode1 Nf = new("NF");

    public static readonly CountryCode1 Ng = new("NG");

    public static readonly CountryCode1 Ni = new("NI");

    public static readonly CountryCode1 Nl = new("NL");

    public static readonly CountryCode1 No = new("NO");

    public static readonly CountryCode1 Np = new("NP");

    public static readonly CountryCode1 Nr = new("NR");

    public static readonly CountryCode1 Nu = new("NU");

    public static readonly CountryCode1 Nz = new("NZ");

    public static readonly CountryCode1 Om = new("OM");

    public static readonly CountryCode1 Pa = new("PA");

    public static readonly CountryCode1 Pe = new("PE");

    public static readonly CountryCode1 Pf = new("PF");

    public static readonly CountryCode1 Pg = new("PG");

    public static readonly CountryCode1 Ph = new("PH");

    public static readonly CountryCode1 Pk = new("PK");

    public static readonly CountryCode1 Pl = new("PL");

    public static readonly CountryCode1 Pm = new("PM");

    public static readonly CountryCode1 Pn = new("PN");

    public static readonly CountryCode1 Pr = new("PR");

    public static readonly CountryCode1 Ps = new("PS");

    public static readonly CountryCode1 Pt = new("PT");

    public static readonly CountryCode1 Pw = new("PW");

    public static readonly CountryCode1 Py = new("PY");

    public static readonly CountryCode1 Qa = new("QA");

    public static readonly CountryCode1 Re = new("RE");

    public static readonly CountryCode1 Ro = new("RO");

    public static readonly CountryCode1 Rs = new("RS");

    public static readonly CountryCode1 Ru = new("RU");

    public static readonly CountryCode1 Rw = new("RW");

    public static readonly CountryCode1 Sa = new("SA");

    public static readonly CountryCode1 Sb = new("SB");

    public static readonly CountryCode1 Sc = new("SC");

    public static readonly CountryCode1 Sd = new("SD");

    public static readonly CountryCode1 Se = new("SE");

    public static readonly CountryCode1 Sg = new("SG");

    public static readonly CountryCode1 Sh = new("SH");

    public static readonly CountryCode1 Si = new("SI");

    public static readonly CountryCode1 Sj = new("SJ");

    public static readonly CountryCode1 Sk = new("SK");

    public static readonly CountryCode1 Sl = new("SL");

    public static readonly CountryCode1 Sm = new("SM");

    public static readonly CountryCode1 Sn = new("SN");

    public static readonly CountryCode1 So = new("SO");

    public static readonly CountryCode1 Sr = new("SR");

    public static readonly CountryCode1 Ss = new("SS");

    public static readonly CountryCode1 St = new("ST");

    public static readonly CountryCode1 Sv = new("SV");

    public static readonly CountryCode1 Sx = new("SX");

    public static readonly CountryCode1 Sy = new("SY");

    public static readonly CountryCode1 Sz = new("SZ");

    public static readonly CountryCode1 Tc = new("TC");

    public static readonly CountryCode1 Td = new("TD");

    public static readonly CountryCode1 Tf = new("TF");

    public static readonly CountryCode1 Tg = new("TG");

    public static readonly CountryCode1 Th = new("TH");

    public static readonly CountryCode1 Tj = new("TJ");

    public static readonly CountryCode1 Tk = new("TK");

    public static readonly CountryCode1 Tl = new("TL");

    public static readonly CountryCode1 Tm = new("TM");

    public static readonly CountryCode1 Tn = new("TN");

    public static readonly CountryCode1 To = new("TO");

    public static readonly CountryCode1 Tr = new("TR");

    public static readonly CountryCode1 Tt = new("TT");

    public static readonly CountryCode1 Tv = new("TV");

    public static readonly CountryCode1 Tw = new("TW");

    public static readonly CountryCode1 Tz = new("TZ");

    public static readonly CountryCode1 Ua = new("UA");

    public static readonly CountryCode1 Ug = new("UG");

    public static readonly CountryCode1 Um = new("UM");

    public static readonly CountryCode1 Us = new("US");

    public static readonly CountryCode1 Uy = new("UY");

    public static readonly CountryCode1 Uz = new("UZ");

    public static readonly CountryCode1 Va = new("VA");

    public static readonly CountryCode1 Vc = new("VC");

    public static readonly CountryCode1 Ve = new("VE");

    public static readonly CountryCode1 Vg = new("VG");

    public static readonly CountryCode1 Vi = new("VI");

    public static readonly CountryCode1 Vn = new("VN");

    public static readonly CountryCode1 Vu = new("VU");

    public static readonly CountryCode1 Wf = new("WF");

    public static readonly CountryCode1 Ws = new("WS");

    public static readonly CountryCode1 Xk = new("XK");

    public static readonly CountryCode1 Ye = new("YE");

    public static readonly CountryCode1 Yt = new("YT");

    public static readonly CountryCode1 Za = new("ZA");

    public static readonly CountryCode1 Zm = new("ZM");

    public static readonly CountryCode1 Zw = new("ZW");

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
