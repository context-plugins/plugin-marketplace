using System;
using System.Text.Json.Serialization;
using CodeQr.Core.Enum;

namespace CodeQr.Models.Enums;

/// <summary>
/// The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://codeqr.io/geo
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Country2>))]
public sealed record Country2 : OpenStringEnum<Country2>
{
    private Country2(string value) : base(value)
    {
    }

    public static readonly Country2 Af = new("AF");

    public static readonly Country2 Al = new("AL");

    public static readonly Country2 Dz = new("DZ");

    public static readonly Country2 As = new("AS");

    public static readonly Country2 Ad = new("AD");

    public static readonly Country2 Ao = new("AO");

    public static readonly Country2 Ai = new("AI");

    public static readonly Country2 Aq = new("AQ");

    public static readonly Country2 Ag = new("AG");

    public static readonly Country2 Ar = new("AR");

    public static readonly Country2 Am = new("AM");

    public static readonly Country2 Aw = new("AW");

    public static readonly Country2 Au = new("AU");

    public static readonly Country2 At = new("AT");

    public static readonly Country2 Az = new("AZ");

    public static readonly Country2 Bs = new("BS");

    public static readonly Country2 Bh = new("BH");

    public static readonly Country2 Bd = new("BD");

    public static readonly Country2 Bb = new("BB");

    public static readonly Country2 By = new("BY");

    public static readonly Country2 Be = new("BE");

    public static readonly Country2 Bz = new("BZ");

    public static readonly Country2 Bj = new("BJ");

    public static readonly Country2 Bm = new("BM");

    public static readonly Country2 Bt = new("BT");

    public static readonly Country2 Bo = new("BO");

    public static readonly Country2 Ba = new("BA");

    public static readonly Country2 Bw = new("BW");

    public static readonly Country2 Bv = new("BV");

    public static readonly Country2 Br = new("BR");

    public static readonly Country2 Io = new("IO");

    public static readonly Country2 Bn = new("BN");

    public static readonly Country2 Bg = new("BG");

    public static readonly Country2 Bf = new("BF");

    public static readonly Country2 Bi = new("BI");

    public static readonly Country2 Kh = new("KH");

    public static readonly Country2 Cm = new("CM");

    public static readonly Country2 Ca = new("CA");

    public static readonly Country2 Cv = new("CV");

    public static readonly Country2 Ky = new("KY");

    public static readonly Country2 Cf = new("CF");

    public static readonly Country2 Td = new("TD");

    public static readonly Country2 Cl = new("CL");

    public static readonly Country2 Cn = new("CN");

    public static readonly Country2 Cx = new("CX");

    public static readonly Country2 Cc = new("CC");

    public static readonly Country2 Co = new("CO");

    public static readonly Country2 Km = new("KM");

    public static readonly Country2 Cg = new("CG");

    public static readonly Country2 Cd = new("CD");

    public static readonly Country2 Ck = new("CK");

    public static readonly Country2 Cr = new("CR");

    public static readonly Country2 Ci = new("CI");

    public static readonly Country2 Hr = new("HR");

    public static readonly Country2 Cu = new("CU");

    public static readonly Country2 Cy = new("CY");

    public static readonly Country2 Cz = new("CZ");

    public static readonly Country2 Dk = new("DK");

    public static readonly Country2 Dj = new("DJ");

    public static readonly Country2 Dm = new("DM");

    public static readonly Country2 Do = new("DO");

    public static readonly Country2 Ec = new("EC");

    public static readonly Country2 Eg = new("EG");

    public static readonly Country2 Sv = new("SV");

    public static readonly Country2 Gq = new("GQ");

    public static readonly Country2 Er = new("ER");

    public static readonly Country2 Ee = new("EE");

    public static readonly Country2 Et = new("ET");

    public static readonly Country2 Fk = new("FK");

    public static readonly Country2 Fo = new("FO");

    public static readonly Country2 Fj = new("FJ");

    public static readonly Country2 Fi = new("FI");

    public static readonly Country2 Fr = new("FR");

    public static readonly Country2 Gf = new("GF");

    public static readonly Country2 Pf = new("PF");

    public static readonly Country2 Tf = new("TF");

    public static readonly Country2 Ga = new("GA");

    public static readonly Country2 Gm = new("GM");

    public static readonly Country2 Ge = new("GE");

    public static readonly Country2 De = new("DE");

    public static readonly Country2 Gh = new("GH");

    public static readonly Country2 Gi = new("GI");

    public static readonly Country2 Gr = new("GR");

    public static readonly Country2 Gl = new("GL");

    public static readonly Country2 Gd = new("GD");

    public static readonly Country2 Gp = new("GP");

    public static readonly Country2 Gu = new("GU");

    public static readonly Country2 Gt = new("GT");

    public static readonly Country2 Gn = new("GN");

    public static readonly Country2 Gw = new("GW");

    public static readonly Country2 Gy = new("GY");

    public static readonly Country2 Ht = new("HT");

    public static readonly Country2 Hm = new("HM");

    public static readonly Country2 Va = new("VA");

    public static readonly Country2 Hn = new("HN");

    public static readonly Country2 Hk = new("HK");

    public static readonly Country2 Hu = new("HU");

    public static readonly Country2 IsMember = new("IS");

    public static readonly Country2 In = new("IN");

    public static readonly Country2 Id = new("ID");

    public static readonly Country2 Ir = new("IR");

    public static readonly Country2 Iq = new("IQ");

    public static readonly Country2 Ie = new("IE");

    public static readonly Country2 Il = new("IL");

    public static readonly Country2 It = new("IT");

    public static readonly Country2 Jm = new("JM");

    public static readonly Country2 Jp = new("JP");

    public static readonly Country2 Jo = new("JO");

    public static readonly Country2 Kz = new("KZ");

    public static readonly Country2 Ke = new("KE");

    public static readonly Country2 Ki = new("KI");

    public static readonly Country2 Kp = new("KP");

    public static readonly Country2 Kr = new("KR");

    public static readonly Country2 Kw = new("KW");

    public static readonly Country2 Kg = new("KG");

    public static readonly Country2 La = new("LA");

    public static readonly Country2 Lv = new("LV");

    public static readonly Country2 Lb = new("LB");

    public static readonly Country2 Ls = new("LS");

    public static readonly Country2 Lr = new("LR");

    public static readonly Country2 Ly = new("LY");

    public static readonly Country2 Li = new("LI");

    public static readonly Country2 Lt = new("LT");

    public static readonly Country2 Lu = new("LU");

    public static readonly Country2 Mo = new("MO");

    public static readonly Country2 Mg = new("MG");

    public static readonly Country2 Mw = new("MW");

    public static readonly Country2 My = new("MY");

    public static readonly Country2 Mv = new("MV");

    public static readonly Country2 Ml = new("ML");

    public static readonly Country2 Mt = new("MT");

    public static readonly Country2 Mh = new("MH");

    public static readonly Country2 Mq = new("MQ");

    public static readonly Country2 Mr = new("MR");

    public static readonly Country2 Mu = new("MU");

    public static readonly Country2 Yt = new("YT");

    public static readonly Country2 Mx = new("MX");

    public static readonly Country2 Fm = new("FM");

    public static readonly Country2 Md = new("MD");

    public static readonly Country2 Mc = new("MC");

    public static readonly Country2 Mn = new("MN");

    public static readonly Country2 Ms = new("MS");

    public static readonly Country2 Ma = new("MA");

    public static readonly Country2 Mz = new("MZ");

    public static readonly Country2 Mm = new("MM");

    public static readonly Country2 Na = new("NA");

    public static readonly Country2 Nr = new("NR");

    public static readonly Country2 Np = new("NP");

    public static readonly Country2 Nl = new("NL");

    public static readonly Country2 Nc = new("NC");

    public static readonly Country2 Nz = new("NZ");

    public static readonly Country2 Ni = new("NI");

    public static readonly Country2 Ne = new("NE");

    public static readonly Country2 Ng = new("NG");

    public static readonly Country2 Nu = new("NU");

    public static readonly Country2 Nf = new("NF");

    public static readonly Country2 Mk = new("MK");

    public static readonly Country2 Mp = new("MP");

    public static readonly Country2 No = new("NO");

    public static readonly Country2 Om = new("OM");

    public static readonly Country2 Pk = new("PK");

    public static readonly Country2 Pw = new("PW");

    public static readonly Country2 Ps = new("PS");

    public static readonly Country2 Pa = new("PA");

    public static readonly Country2 Pg = new("PG");

    public static readonly Country2 Py = new("PY");

    public static readonly Country2 Pe = new("PE");

    public static readonly Country2 Ph = new("PH");

    public static readonly Country2 Pn = new("PN");

    public static readonly Country2 Pl = new("PL");

    public static readonly Country2 Pt = new("PT");

    public static readonly Country2 Pr = new("PR");

    public static readonly Country2 Qa = new("QA");

    public static readonly Country2 Re = new("RE");

    public static readonly Country2 Ro = new("RO");

    public static readonly Country2 Ru = new("RU");

    public static readonly Country2 Rw = new("RW");

    public static readonly Country2 Sh = new("SH");

    public static readonly Country2 Kn = new("KN");

    public static readonly Country2 Lc = new("LC");

    public static readonly Country2 Pm = new("PM");

    public static readonly Country2 Vc = new("VC");

    public static readonly Country2 Ws = new("WS");

    public static readonly Country2 Sm = new("SM");

    public static readonly Country2 St = new("ST");

    public static readonly Country2 Sa = new("SA");

    public static readonly Country2 Sn = new("SN");

    public static readonly Country2 Sc = new("SC");

    public static readonly Country2 Sl = new("SL");

    public static readonly Country2 Sg = new("SG");

    public static readonly Country2 Sk = new("SK");

    public static readonly Country2 Si = new("SI");

    public static readonly Country2 Sb = new("SB");

    public static readonly Country2 So = new("SO");

    public static readonly Country2 Za = new("ZA");

    public static readonly Country2 Gs = new("GS");

    public static readonly Country2 Es = new("ES");

    public static readonly Country2 Lk = new("LK");

    public static readonly Country2 Sd = new("SD");

    public static readonly Country2 Sr = new("SR");

    public static readonly Country2 Sj = new("SJ");

    public static readonly Country2 Sz = new("SZ");

    public static readonly Country2 Se = new("SE");

    public static readonly Country2 Ch = new("CH");

    public static readonly Country2 Sy = new("SY");

    public static readonly Country2 Tw = new("TW");

    public static readonly Country2 Tj = new("TJ");

    public static readonly Country2 Tz = new("TZ");

    public static readonly Country2 Th = new("TH");

    public static readonly Country2 Tl = new("TL");

    public static readonly Country2 Tg = new("TG");

    public static readonly Country2 Tk = new("TK");

    public static readonly Country2 To = new("TO");

    public static readonly Country2 Tt = new("TT");

    public static readonly Country2 Tn = new("TN");

    public static readonly Country2 Tr = new("TR");

    public static readonly Country2 Tm = new("TM");

    public static readonly Country2 Tc = new("TC");

    public static readonly Country2 Tv = new("TV");

    public static readonly Country2 Ug = new("UG");

    public static readonly Country2 Ua = new("UA");

    public static readonly Country2 Ae = new("AE");

    public static readonly Country2 Gb = new("GB");

    public static readonly Country2 Us = new("US");

    public static readonly Country2 Um = new("UM");

    public static readonly Country2 Uy = new("UY");

    public static readonly Country2 Uz = new("UZ");

    public static readonly Country2 Vu = new("VU");

    public static readonly Country2 Ve = new("VE");

    public static readonly Country2 Vn = new("VN");

    public static readonly Country2 Vg = new("VG");

    public static readonly Country2 Vi = new("VI");

    public static readonly Country2 Wf = new("WF");

    public static readonly Country2 Eh = new("EH");

    public static readonly Country2 Ye = new("YE");

    public static readonly Country2 Zm = new("ZM");

    public static readonly Country2 Zw = new("ZW");

    public static readonly Country2 Ax = new("AX");

    public static readonly Country2 Bq = new("BQ");

    public static readonly Country2 Cw = new("CW");

    public static readonly Country2 Gg = new("GG");

    public static readonly Country2 Im = new("IM");

    public static readonly Country2 Je = new("JE");

    public static readonly Country2 Me = new("ME");

    public static readonly Country2 Bl = new("BL");

    public static readonly Country2 Mf = new("MF");

    public static readonly Country2 Rs = new("RS");

    public static readonly Country2 Sx = new("SX");

    public static readonly Country2 Ss = new("SS");

    public static readonly Country2 Xk = new("XK");

    public TResult Match<TResult>(Func<TResult> onAf,
        Func<TResult> onAl,
        Func<TResult> onDz,
        Func<TResult> onAs,
        Func<TResult> onAd,
        Func<TResult> onAo,
        Func<TResult> onAi,
        Func<TResult> onAq,
        Func<TResult> onAg,
        Func<TResult> onAr,
        Func<TResult> onAm,
        Func<TResult> onAw,
        Func<TResult> onAu,
        Func<TResult> onAt,
        Func<TResult> onAz,
        Func<TResult> onBs,
        Func<TResult> onBh,
        Func<TResult> onBd,
        Func<TResult> onBb,
        Func<TResult> onBy,
        Func<TResult> onBe,
        Func<TResult> onBz,
        Func<TResult> onBj,
        Func<TResult> onBm,
        Func<TResult> onBt,
        Func<TResult> onBo,
        Func<TResult> onBa,
        Func<TResult> onBw,
        Func<TResult> onBv,
        Func<TResult> onBr,
        Func<TResult> onIo,
        Func<TResult> onBn,
        Func<TResult> onBg,
        Func<TResult> onBf,
        Func<TResult> onBi,
        Func<TResult> onKh,
        Func<TResult> onCm,
        Func<TResult> onCa,
        Func<TResult> onCv,
        Func<TResult> onKy,
        Func<TResult> onCf,
        Func<TResult> onTd,
        Func<TResult> onCl,
        Func<TResult> onCn,
        Func<TResult> onCx,
        Func<TResult> onCc,
        Func<TResult> onCo,
        Func<TResult> onKm,
        Func<TResult> onCg,
        Func<TResult> onCd,
        Func<TResult> onCk,
        Func<TResult> onCr,
        Func<TResult> onCi,
        Func<TResult> onHr,
        Func<TResult> onCu,
        Func<TResult> onCy,
        Func<TResult> onCz,
        Func<TResult> onDk,
        Func<TResult> onDj,
        Func<TResult> onDm,
        Func<TResult> onDo,
        Func<TResult> onEc,
        Func<TResult> onEg,
        Func<TResult> onSv,
        Func<TResult> onGq,
        Func<TResult> onEr,
        Func<TResult> onEe,
        Func<TResult> onEt,
        Func<TResult> onFk,
        Func<TResult> onFo,
        Func<TResult> onFj,
        Func<TResult> onFi,
        Func<TResult> onFr,
        Func<TResult> onGf,
        Func<TResult> onPf,
        Func<TResult> onTf,
        Func<TResult> onGa,
        Func<TResult> onGm,
        Func<TResult> onGe,
        Func<TResult> onDe,
        Func<TResult> onGh,
        Func<TResult> onGi,
        Func<TResult> onGr,
        Func<TResult> onGl,
        Func<TResult> onGd,
        Func<TResult> onGp,
        Func<TResult> onGu,
        Func<TResult> onGt,
        Func<TResult> onGn,
        Func<TResult> onGw,
        Func<TResult> onGy,
        Func<TResult> onHt,
        Func<TResult> onHm,
        Func<TResult> onVa,
        Func<TResult> onHn,
        Func<TResult> onHk,
        Func<TResult> onHu,
        Func<TResult> onIsMember,
        Func<TResult> onIn,
        Func<TResult> onId,
        Func<TResult> onIr,
        Func<TResult> onIq,
        Func<TResult> onIe,
        Func<TResult> onIl,
        Func<TResult> onIt,
        Func<TResult> onJm,
        Func<TResult> onJp,
        Func<TResult> onJo,
        Func<TResult> onKz,
        Func<TResult> onKe,
        Func<TResult> onKi,
        Func<TResult> onKp,
        Func<TResult> onKr,
        Func<TResult> onKw,
        Func<TResult> onKg,
        Func<TResult> onLa,
        Func<TResult> onLv,
        Func<TResult> onLb,
        Func<TResult> onLs,
        Func<TResult> onLr,
        Func<TResult> onLy,
        Func<TResult> onLi,
        Func<TResult> onLt,
        Func<TResult> onLu,
        Func<TResult> onMo,
        Func<TResult> onMg,
        Func<TResult> onMw,
        Func<TResult> onMy,
        Func<TResult> onMv,
        Func<TResult> onMl,
        Func<TResult> onMt,
        Func<TResult> onMh,
        Func<TResult> onMq,
        Func<TResult> onMr,
        Func<TResult> onMu,
        Func<TResult> onYt,
        Func<TResult> onMx,
        Func<TResult> onFm,
        Func<TResult> onMd,
        Func<TResult> onMc,
        Func<TResult> onMn,
        Func<TResult> onMs,
        Func<TResult> onMa,
        Func<TResult> onMz,
        Func<TResult> onMm,
        Func<TResult> onNa,
        Func<TResult> onNr,
        Func<TResult> onNp,
        Func<TResult> onNl,
        Func<TResult> onNc,
        Func<TResult> onNz,
        Func<TResult> onNi,
        Func<TResult> onNe,
        Func<TResult> onNg,
        Func<TResult> onNu,
        Func<TResult> onNf,
        Func<TResult> onMk,
        Func<TResult> onMp,
        Func<TResult> onNo,
        Func<TResult> onOm,
        Func<TResult> onPk,
        Func<TResult> onPw,
        Func<TResult> onPs,
        Func<TResult> onPa,
        Func<TResult> onPg,
        Func<TResult> onPy,
        Func<TResult> onPe,
        Func<TResult> onPh,
        Func<TResult> onPn,
        Func<TResult> onPl,
        Func<TResult> onPt,
        Func<TResult> onPr,
        Func<TResult> onQa,
        Func<TResult> onRe,
        Func<TResult> onRo,
        Func<TResult> onRu,
        Func<TResult> onRw,
        Func<TResult> onSh,
        Func<TResult> onKn,
        Func<TResult> onLc,
        Func<TResult> onPm,
        Func<TResult> onVc,
        Func<TResult> onWs,
        Func<TResult> onSm,
        Func<TResult> onSt,
        Func<TResult> onSa,
        Func<TResult> onSn,
        Func<TResult> onSc,
        Func<TResult> onSl,
        Func<TResult> onSg,
        Func<TResult> onSk,
        Func<TResult> onSi,
        Func<TResult> onSb,
        Func<TResult> onSo,
        Func<TResult> onZa,
        Func<TResult> onGs,
        Func<TResult> onEs,
        Func<TResult> onLk,
        Func<TResult> onSd,
        Func<TResult> onSr,
        Func<TResult> onSj,
        Func<TResult> onSz,
        Func<TResult> onSe,
        Func<TResult> onCh,
        Func<TResult> onSy,
        Func<TResult> onTw,
        Func<TResult> onTj,
        Func<TResult> onTz,
        Func<TResult> onTh,
        Func<TResult> onTl,
        Func<TResult> onTg,
        Func<TResult> onTk,
        Func<TResult> onTo,
        Func<TResult> onTt,
        Func<TResult> onTn,
        Func<TResult> onTr,
        Func<TResult> onTm,
        Func<TResult> onTc,
        Func<TResult> onTv,
        Func<TResult> onUg,
        Func<TResult> onUa,
        Func<TResult> onAe,
        Func<TResult> onGb,
        Func<TResult> onUs,
        Func<TResult> onUm,
        Func<TResult> onUy,
        Func<TResult> onUz,
        Func<TResult> onVu,
        Func<TResult> onVe,
        Func<TResult> onVn,
        Func<TResult> onVg,
        Func<TResult> onVi,
        Func<TResult> onWf,
        Func<TResult> onEh,
        Func<TResult> onYe,
        Func<TResult> onZm,
        Func<TResult> onZw,
        Func<TResult> onAx,
        Func<TResult> onBq,
        Func<TResult> onCw,
        Func<TResult> onGg,
        Func<TResult> onIm,
        Func<TResult> onJe,
        Func<TResult> onMe,
        Func<TResult> onBl,
        Func<TResult> onMf,
        Func<TResult> onRs,
        Func<TResult> onSx,
        Func<TResult> onSs,
        Func<TResult> onXk,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Af => onAf(),
            _ when this == Al => onAl(),
            _ when this == Dz => onDz(),
            _ when this == As => onAs(),
            _ when this == Ad => onAd(),
            _ when this == Ao => onAo(),
            _ when this == Ai => onAi(),
            _ when this == Aq => onAq(),
            _ when this == Ag => onAg(),
            _ when this == Ar => onAr(),
            _ when this == Am => onAm(),
            _ when this == Aw => onAw(),
            _ when this == Au => onAu(),
            _ when this == At => onAt(),
            _ when this == Az => onAz(),
            _ when this == Bs => onBs(),
            _ when this == Bh => onBh(),
            _ when this == Bd => onBd(),
            _ when this == Bb => onBb(),
            _ when this == By => onBy(),
            _ when this == Be => onBe(),
            _ when this == Bz => onBz(),
            _ when this == Bj => onBj(),
            _ when this == Bm => onBm(),
            _ when this == Bt => onBt(),
            _ when this == Bo => onBo(),
            _ when this == Ba => onBa(),
            _ when this == Bw => onBw(),
            _ when this == Bv => onBv(),
            _ when this == Br => onBr(),
            _ when this == Io => onIo(),
            _ when this == Bn => onBn(),
            _ when this == Bg => onBg(),
            _ when this == Bf => onBf(),
            _ when this == Bi => onBi(),
            _ when this == Kh => onKh(),
            _ when this == Cm => onCm(),
            _ when this == Ca => onCa(),
            _ when this == Cv => onCv(),
            _ when this == Ky => onKy(),
            _ when this == Cf => onCf(),
            _ when this == Td => onTd(),
            _ when this == Cl => onCl(),
            _ when this == Cn => onCn(),
            _ when this == Cx => onCx(),
            _ when this == Cc => onCc(),
            _ when this == Co => onCo(),
            _ when this == Km => onKm(),
            _ when this == Cg => onCg(),
            _ when this == Cd => onCd(),
            _ when this == Ck => onCk(),
            _ when this == Cr => onCr(),
            _ when this == Ci => onCi(),
            _ when this == Hr => onHr(),
            _ when this == Cu => onCu(),
            _ when this == Cy => onCy(),
            _ when this == Cz => onCz(),
            _ when this == Dk => onDk(),
            _ when this == Dj => onDj(),
            _ when this == Dm => onDm(),
            _ when this == Do => onDo(),
            _ when this == Ec => onEc(),
            _ when this == Eg => onEg(),
            _ when this == Sv => onSv(),
            _ when this == Gq => onGq(),
            _ when this == Er => onEr(),
            _ when this == Ee => onEe(),
            _ when this == Et => onEt(),
            _ when this == Fk => onFk(),
            _ when this == Fo => onFo(),
            _ when this == Fj => onFj(),
            _ when this == Fi => onFi(),
            _ when this == Fr => onFr(),
            _ when this == Gf => onGf(),
            _ when this == Pf => onPf(),
            _ when this == Tf => onTf(),
            _ when this == Ga => onGa(),
            _ when this == Gm => onGm(),
            _ when this == Ge => onGe(),
            _ when this == De => onDe(),
            _ when this == Gh => onGh(),
            _ when this == Gi => onGi(),
            _ when this == Gr => onGr(),
            _ when this == Gl => onGl(),
            _ when this == Gd => onGd(),
            _ when this == Gp => onGp(),
            _ when this == Gu => onGu(),
            _ when this == Gt => onGt(),
            _ when this == Gn => onGn(),
            _ when this == Gw => onGw(),
            _ when this == Gy => onGy(),
            _ when this == Ht => onHt(),
            _ when this == Hm => onHm(),
            _ when this == Va => onVa(),
            _ when this == Hn => onHn(),
            _ when this == Hk => onHk(),
            _ when this == Hu => onHu(),
            _ when this == IsMember => onIsMember(),
            _ when this == In => onIn(),
            _ when this == Id => onId(),
            _ when this == Ir => onIr(),
            _ when this == Iq => onIq(),
            _ when this == Ie => onIe(),
            _ when this == Il => onIl(),
            _ when this == It => onIt(),
            _ when this == Jm => onJm(),
            _ when this == Jp => onJp(),
            _ when this == Jo => onJo(),
            _ when this == Kz => onKz(),
            _ when this == Ke => onKe(),
            _ when this == Ki => onKi(),
            _ when this == Kp => onKp(),
            _ when this == Kr => onKr(),
            _ when this == Kw => onKw(),
            _ when this == Kg => onKg(),
            _ when this == La => onLa(),
            _ when this == Lv => onLv(),
            _ when this == Lb => onLb(),
            _ when this == Ls => onLs(),
            _ when this == Lr => onLr(),
            _ when this == Ly => onLy(),
            _ when this == Li => onLi(),
            _ when this == Lt => onLt(),
            _ when this == Lu => onLu(),
            _ when this == Mo => onMo(),
            _ when this == Mg => onMg(),
            _ when this == Mw => onMw(),
            _ when this == My => onMy(),
            _ when this == Mv => onMv(),
            _ when this == Ml => onMl(),
            _ when this == Mt => onMt(),
            _ when this == Mh => onMh(),
            _ when this == Mq => onMq(),
            _ when this == Mr => onMr(),
            _ when this == Mu => onMu(),
            _ when this == Yt => onYt(),
            _ when this == Mx => onMx(),
            _ when this == Fm => onFm(),
            _ when this == Md => onMd(),
            _ when this == Mc => onMc(),
            _ when this == Mn => onMn(),
            _ when this == Ms => onMs(),
            _ when this == Ma => onMa(),
            _ when this == Mz => onMz(),
            _ when this == Mm => onMm(),
            _ when this == Na => onNa(),
            _ when this == Nr => onNr(),
            _ when this == Np => onNp(),
            _ when this == Nl => onNl(),
            _ when this == Nc => onNc(),
            _ when this == Nz => onNz(),
            _ when this == Ni => onNi(),
            _ when this == Ne => onNe(),
            _ when this == Ng => onNg(),
            _ when this == Nu => onNu(),
            _ when this == Nf => onNf(),
            _ when this == Mk => onMk(),
            _ when this == Mp => onMp(),
            _ when this == No => onNo(),
            _ when this == Om => onOm(),
            _ when this == Pk => onPk(),
            _ when this == Pw => onPw(),
            _ when this == Ps => onPs(),
            _ when this == Pa => onPa(),
            _ when this == Pg => onPg(),
            _ when this == Py => onPy(),
            _ when this == Pe => onPe(),
            _ when this == Ph => onPh(),
            _ when this == Pn => onPn(),
            _ when this == Pl => onPl(),
            _ when this == Pt => onPt(),
            _ when this == Pr => onPr(),
            _ when this == Qa => onQa(),
            _ when this == Re => onRe(),
            _ when this == Ro => onRo(),
            _ when this == Ru => onRu(),
            _ when this == Rw => onRw(),
            _ when this == Sh => onSh(),
            _ when this == Kn => onKn(),
            _ when this == Lc => onLc(),
            _ when this == Pm => onPm(),
            _ when this == Vc => onVc(),
            _ when this == Ws => onWs(),
            _ when this == Sm => onSm(),
            _ when this == St => onSt(),
            _ when this == Sa => onSa(),
            _ when this == Sn => onSn(),
            _ when this == Sc => onSc(),
            _ when this == Sl => onSl(),
            _ when this == Sg => onSg(),
            _ when this == Sk => onSk(),
            _ when this == Si => onSi(),
            _ when this == Sb => onSb(),
            _ when this == So => onSo(),
            _ when this == Za => onZa(),
            _ when this == Gs => onGs(),
            _ when this == Es => onEs(),
            _ when this == Lk => onLk(),
            _ when this == Sd => onSd(),
            _ when this == Sr => onSr(),
            _ when this == Sj => onSj(),
            _ when this == Sz => onSz(),
            _ when this == Se => onSe(),
            _ when this == Ch => onCh(),
            _ when this == Sy => onSy(),
            _ when this == Tw => onTw(),
            _ when this == Tj => onTj(),
            _ when this == Tz => onTz(),
            _ when this == Th => onTh(),
            _ when this == Tl => onTl(),
            _ when this == Tg => onTg(),
            _ when this == Tk => onTk(),
            _ when this == To => onTo(),
            _ when this == Tt => onTt(),
            _ when this == Tn => onTn(),
            _ when this == Tr => onTr(),
            _ when this == Tm => onTm(),
            _ when this == Tc => onTc(),
            _ when this == Tv => onTv(),
            _ when this == Ug => onUg(),
            _ when this == Ua => onUa(),
            _ when this == Ae => onAe(),
            _ when this == Gb => onGb(),
            _ when this == Us => onUs(),
            _ when this == Um => onUm(),
            _ when this == Uy => onUy(),
            _ when this == Uz => onUz(),
            _ when this == Vu => onVu(),
            _ when this == Ve => onVe(),
            _ when this == Vn => onVn(),
            _ when this == Vg => onVg(),
            _ when this == Vi => onVi(),
            _ when this == Wf => onWf(),
            _ when this == Eh => onEh(),
            _ when this == Ye => onYe(),
            _ when this == Zm => onZm(),
            _ when this == Zw => onZw(),
            _ when this == Ax => onAx(),
            _ when this == Bq => onBq(),
            _ when this == Cw => onCw(),
            _ when this == Gg => onGg(),
            _ when this == Im => onIm(),
            _ when this == Je => onJe(),
            _ when this == Me => onMe(),
            _ when this == Bl => onBl(),
            _ when this == Mf => onMf(),
            _ when this == Rs => onRs(),
            _ when this == Sx => onSx(),
            _ when this == Ss => onSs(),
            _ when this == Xk => onXk(),
            _ => otherwise(Value)
        };

    public void Match(Action onAf,
        Action onAl,
        Action onDz,
        Action onAs,
        Action onAd,
        Action onAo,
        Action onAi,
        Action onAq,
        Action onAg,
        Action onAr,
        Action onAm,
        Action onAw,
        Action onAu,
        Action onAt,
        Action onAz,
        Action onBs,
        Action onBh,
        Action onBd,
        Action onBb,
        Action onBy,
        Action onBe,
        Action onBz,
        Action onBj,
        Action onBm,
        Action onBt,
        Action onBo,
        Action onBa,
        Action onBw,
        Action onBv,
        Action onBr,
        Action onIo,
        Action onBn,
        Action onBg,
        Action onBf,
        Action onBi,
        Action onKh,
        Action onCm,
        Action onCa,
        Action onCv,
        Action onKy,
        Action onCf,
        Action onTd,
        Action onCl,
        Action onCn,
        Action onCx,
        Action onCc,
        Action onCo,
        Action onKm,
        Action onCg,
        Action onCd,
        Action onCk,
        Action onCr,
        Action onCi,
        Action onHr,
        Action onCu,
        Action onCy,
        Action onCz,
        Action onDk,
        Action onDj,
        Action onDm,
        Action onDo,
        Action onEc,
        Action onEg,
        Action onSv,
        Action onGq,
        Action onEr,
        Action onEe,
        Action onEt,
        Action onFk,
        Action onFo,
        Action onFj,
        Action onFi,
        Action onFr,
        Action onGf,
        Action onPf,
        Action onTf,
        Action onGa,
        Action onGm,
        Action onGe,
        Action onDe,
        Action onGh,
        Action onGi,
        Action onGr,
        Action onGl,
        Action onGd,
        Action onGp,
        Action onGu,
        Action onGt,
        Action onGn,
        Action onGw,
        Action onGy,
        Action onHt,
        Action onHm,
        Action onVa,
        Action onHn,
        Action onHk,
        Action onHu,
        Action onIsMember,
        Action onIn,
        Action onId,
        Action onIr,
        Action onIq,
        Action onIe,
        Action onIl,
        Action onIt,
        Action onJm,
        Action onJp,
        Action onJo,
        Action onKz,
        Action onKe,
        Action onKi,
        Action onKp,
        Action onKr,
        Action onKw,
        Action onKg,
        Action onLa,
        Action onLv,
        Action onLb,
        Action onLs,
        Action onLr,
        Action onLy,
        Action onLi,
        Action onLt,
        Action onLu,
        Action onMo,
        Action onMg,
        Action onMw,
        Action onMy,
        Action onMv,
        Action onMl,
        Action onMt,
        Action onMh,
        Action onMq,
        Action onMr,
        Action onMu,
        Action onYt,
        Action onMx,
        Action onFm,
        Action onMd,
        Action onMc,
        Action onMn,
        Action onMs,
        Action onMa,
        Action onMz,
        Action onMm,
        Action onNa,
        Action onNr,
        Action onNp,
        Action onNl,
        Action onNc,
        Action onNz,
        Action onNi,
        Action onNe,
        Action onNg,
        Action onNu,
        Action onNf,
        Action onMk,
        Action onMp,
        Action onNo,
        Action onOm,
        Action onPk,
        Action onPw,
        Action onPs,
        Action onPa,
        Action onPg,
        Action onPy,
        Action onPe,
        Action onPh,
        Action onPn,
        Action onPl,
        Action onPt,
        Action onPr,
        Action onQa,
        Action onRe,
        Action onRo,
        Action onRu,
        Action onRw,
        Action onSh,
        Action onKn,
        Action onLc,
        Action onPm,
        Action onVc,
        Action onWs,
        Action onSm,
        Action onSt,
        Action onSa,
        Action onSn,
        Action onSc,
        Action onSl,
        Action onSg,
        Action onSk,
        Action onSi,
        Action onSb,
        Action onSo,
        Action onZa,
        Action onGs,
        Action onEs,
        Action onLk,
        Action onSd,
        Action onSr,
        Action onSj,
        Action onSz,
        Action onSe,
        Action onCh,
        Action onSy,
        Action onTw,
        Action onTj,
        Action onTz,
        Action onTh,
        Action onTl,
        Action onTg,
        Action onTk,
        Action onTo,
        Action onTt,
        Action onTn,
        Action onTr,
        Action onTm,
        Action onTc,
        Action onTv,
        Action onUg,
        Action onUa,
        Action onAe,
        Action onGb,
        Action onUs,
        Action onUm,
        Action onUy,
        Action onUz,
        Action onVu,
        Action onVe,
        Action onVn,
        Action onVg,
        Action onVi,
        Action onWf,
        Action onEh,
        Action onYe,
        Action onZm,
        Action onZw,
        Action onAx,
        Action onBq,
        Action onCw,
        Action onGg,
        Action onIm,
        Action onJe,
        Action onMe,
        Action onBl,
        Action onMf,
        Action onRs,
        Action onSx,
        Action onSs,
        Action onXk,
        Action<string> otherwise)
    {
        if (this == Af) onAf();
        else if (this == Al) onAl();
        else if (this == Dz) onDz();
        else if (this == As) onAs();
        else if (this == Ad) onAd();
        else if (this == Ao) onAo();
        else if (this == Ai) onAi();
        else if (this == Aq) onAq();
        else if (this == Ag) onAg();
        else if (this == Ar) onAr();
        else if (this == Am) onAm();
        else if (this == Aw) onAw();
        else if (this == Au) onAu();
        else if (this == At) onAt();
        else if (this == Az) onAz();
        else if (this == Bs) onBs();
        else if (this == Bh) onBh();
        else if (this == Bd) onBd();
        else if (this == Bb) onBb();
        else if (this == By) onBy();
        else if (this == Be) onBe();
        else if (this == Bz) onBz();
        else if (this == Bj) onBj();
        else if (this == Bm) onBm();
        else if (this == Bt) onBt();
        else if (this == Bo) onBo();
        else if (this == Ba) onBa();
        else if (this == Bw) onBw();
        else if (this == Bv) onBv();
        else if (this == Br) onBr();
        else if (this == Io) onIo();
        else if (this == Bn) onBn();
        else if (this == Bg) onBg();
        else if (this == Bf) onBf();
        else if (this == Bi) onBi();
        else if (this == Kh) onKh();
        else if (this == Cm) onCm();
        else if (this == Ca) onCa();
        else if (this == Cv) onCv();
        else if (this == Ky) onKy();
        else if (this == Cf) onCf();
        else if (this == Td) onTd();
        else if (this == Cl) onCl();
        else if (this == Cn) onCn();
        else if (this == Cx) onCx();
        else if (this == Cc) onCc();
        else if (this == Co) onCo();
        else if (this == Km) onKm();
        else if (this == Cg) onCg();
        else if (this == Cd) onCd();
        else if (this == Ck) onCk();
        else if (this == Cr) onCr();
        else if (this == Ci) onCi();
        else if (this == Hr) onHr();
        else if (this == Cu) onCu();
        else if (this == Cy) onCy();
        else if (this == Cz) onCz();
        else if (this == Dk) onDk();
        else if (this == Dj) onDj();
        else if (this == Dm) onDm();
        else if (this == Do) onDo();
        else if (this == Ec) onEc();
        else if (this == Eg) onEg();
        else if (this == Sv) onSv();
        else if (this == Gq) onGq();
        else if (this == Er) onEr();
        else if (this == Ee) onEe();
        else if (this == Et) onEt();
        else if (this == Fk) onFk();
        else if (this == Fo) onFo();
        else if (this == Fj) onFj();
        else if (this == Fi) onFi();
        else if (this == Fr) onFr();
        else if (this == Gf) onGf();
        else if (this == Pf) onPf();
        else if (this == Tf) onTf();
        else if (this == Ga) onGa();
        else if (this == Gm) onGm();
        else if (this == Ge) onGe();
        else if (this == De) onDe();
        else if (this == Gh) onGh();
        else if (this == Gi) onGi();
        else if (this == Gr) onGr();
        else if (this == Gl) onGl();
        else if (this == Gd) onGd();
        else if (this == Gp) onGp();
        else if (this == Gu) onGu();
        else if (this == Gt) onGt();
        else if (this == Gn) onGn();
        else if (this == Gw) onGw();
        else if (this == Gy) onGy();
        else if (this == Ht) onHt();
        else if (this == Hm) onHm();
        else if (this == Va) onVa();
        else if (this == Hn) onHn();
        else if (this == Hk) onHk();
        else if (this == Hu) onHu();
        else if (this == IsMember) onIsMember();
        else if (this == In) onIn();
        else if (this == Id) onId();
        else if (this == Ir) onIr();
        else if (this == Iq) onIq();
        else if (this == Ie) onIe();
        else if (this == Il) onIl();
        else if (this == It) onIt();
        else if (this == Jm) onJm();
        else if (this == Jp) onJp();
        else if (this == Jo) onJo();
        else if (this == Kz) onKz();
        else if (this == Ke) onKe();
        else if (this == Ki) onKi();
        else if (this == Kp) onKp();
        else if (this == Kr) onKr();
        else if (this == Kw) onKw();
        else if (this == Kg) onKg();
        else if (this == La) onLa();
        else if (this == Lv) onLv();
        else if (this == Lb) onLb();
        else if (this == Ls) onLs();
        else if (this == Lr) onLr();
        else if (this == Ly) onLy();
        else if (this == Li) onLi();
        else if (this == Lt) onLt();
        else if (this == Lu) onLu();
        else if (this == Mo) onMo();
        else if (this == Mg) onMg();
        else if (this == Mw) onMw();
        else if (this == My) onMy();
        else if (this == Mv) onMv();
        else if (this == Ml) onMl();
        else if (this == Mt) onMt();
        else if (this == Mh) onMh();
        else if (this == Mq) onMq();
        else if (this == Mr) onMr();
        else if (this == Mu) onMu();
        else if (this == Yt) onYt();
        else if (this == Mx) onMx();
        else if (this == Fm) onFm();
        else if (this == Md) onMd();
        else if (this == Mc) onMc();
        else if (this == Mn) onMn();
        else if (this == Ms) onMs();
        else if (this == Ma) onMa();
        else if (this == Mz) onMz();
        else if (this == Mm) onMm();
        else if (this == Na) onNa();
        else if (this == Nr) onNr();
        else if (this == Np) onNp();
        else if (this == Nl) onNl();
        else if (this == Nc) onNc();
        else if (this == Nz) onNz();
        else if (this == Ni) onNi();
        else if (this == Ne) onNe();
        else if (this == Ng) onNg();
        else if (this == Nu) onNu();
        else if (this == Nf) onNf();
        else if (this == Mk) onMk();
        else if (this == Mp) onMp();
        else if (this == No) onNo();
        else if (this == Om) onOm();
        else if (this == Pk) onPk();
        else if (this == Pw) onPw();
        else if (this == Ps) onPs();
        else if (this == Pa) onPa();
        else if (this == Pg) onPg();
        else if (this == Py) onPy();
        else if (this == Pe) onPe();
        else if (this == Ph) onPh();
        else if (this == Pn) onPn();
        else if (this == Pl) onPl();
        else if (this == Pt) onPt();
        else if (this == Pr) onPr();
        else if (this == Qa) onQa();
        else if (this == Re) onRe();
        else if (this == Ro) onRo();
        else if (this == Ru) onRu();
        else if (this == Rw) onRw();
        else if (this == Sh) onSh();
        else if (this == Kn) onKn();
        else if (this == Lc) onLc();
        else if (this == Pm) onPm();
        else if (this == Vc) onVc();
        else if (this == Ws) onWs();
        else if (this == Sm) onSm();
        else if (this == St) onSt();
        else if (this == Sa) onSa();
        else if (this == Sn) onSn();
        else if (this == Sc) onSc();
        else if (this == Sl) onSl();
        else if (this == Sg) onSg();
        else if (this == Sk) onSk();
        else if (this == Si) onSi();
        else if (this == Sb) onSb();
        else if (this == So) onSo();
        else if (this == Za) onZa();
        else if (this == Gs) onGs();
        else if (this == Es) onEs();
        else if (this == Lk) onLk();
        else if (this == Sd) onSd();
        else if (this == Sr) onSr();
        else if (this == Sj) onSj();
        else if (this == Sz) onSz();
        else if (this == Se) onSe();
        else if (this == Ch) onCh();
        else if (this == Sy) onSy();
        else if (this == Tw) onTw();
        else if (this == Tj) onTj();
        else if (this == Tz) onTz();
        else if (this == Th) onTh();
        else if (this == Tl) onTl();
        else if (this == Tg) onTg();
        else if (this == Tk) onTk();
        else if (this == To) onTo();
        else if (this == Tt) onTt();
        else if (this == Tn) onTn();
        else if (this == Tr) onTr();
        else if (this == Tm) onTm();
        else if (this == Tc) onTc();
        else if (this == Tv) onTv();
        else if (this == Ug) onUg();
        else if (this == Ua) onUa();
        else if (this == Ae) onAe();
        else if (this == Gb) onGb();
        else if (this == Us) onUs();
        else if (this == Um) onUm();
        else if (this == Uy) onUy();
        else if (this == Uz) onUz();
        else if (this == Vu) onVu();
        else if (this == Ve) onVe();
        else if (this == Vn) onVn();
        else if (this == Vg) onVg();
        else if (this == Vi) onVi();
        else if (this == Wf) onWf();
        else if (this == Eh) onEh();
        else if (this == Ye) onYe();
        else if (this == Zm) onZm();
        else if (this == Zw) onZw();
        else if (this == Ax) onAx();
        else if (this == Bq) onBq();
        else if (this == Cw) onCw();
        else if (this == Gg) onGg();
        else if (this == Im) onIm();
        else if (this == Je) onJe();
        else if (this == Me) onMe();
        else if (this == Bl) onBl();
        else if (this == Mf) onMf();
        else if (this == Rs) onRs();
        else if (this == Sx) onSx();
        else if (this == Ss) onSs();
        else if (this == Xk) onXk();
        else otherwise(Value);
    }
}
