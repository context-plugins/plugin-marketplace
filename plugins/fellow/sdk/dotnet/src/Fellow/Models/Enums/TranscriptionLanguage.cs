using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TranscriptionLanguage>))]
public sealed record TranscriptionLanguage : OpenStringEnum<TranscriptionLanguage>
{
    private TranscriptionLanguage(string value) : base(value)
    {
    }

    public static readonly TranscriptionLanguage En = new("en");

    public static readonly TranscriptionLanguage EnAu = new("en_au");

    public static readonly TranscriptionLanguage EnUk = new("en_uk");

    public static readonly TranscriptionLanguage EnUs = new("en_us");

    public static readonly TranscriptionLanguage Es = new("es");

    public static readonly TranscriptionLanguage Fr = new("fr");

    public static readonly TranscriptionLanguage De = new("de");

    public static readonly TranscriptionLanguage It = new("it");

    public static readonly TranscriptionLanguage Pt = new("pt");

    public static readonly TranscriptionLanguage Nl = new("nl");

    public static readonly TranscriptionLanguage Hi = new("hi");

    public static readonly TranscriptionLanguage Ja = new("ja");

    public static readonly TranscriptionLanguage Zh = new("zh");

    public static readonly TranscriptionLanguage Fi = new("fi");

    public static readonly TranscriptionLanguage Ko = new("ko");

    public static readonly TranscriptionLanguage Pl = new("pl");

    public static readonly TranscriptionLanguage Ru = new("ru");

    public static readonly TranscriptionLanguage Tr = new("tr");

    public static readonly TranscriptionLanguage Uk = new("uk");

    public static readonly TranscriptionLanguage Vi = new("vi");

    public static readonly TranscriptionLanguage Af = new("af");

    public static readonly TranscriptionLanguage Sq = new("sq");

    public static readonly TranscriptionLanguage Am = new("am");

    public static readonly TranscriptionLanguage Ar = new("ar");

    public static readonly TranscriptionLanguage Hy = new("hy");

    public static readonly TranscriptionLanguage As = new("as");

    public static readonly TranscriptionLanguage Az = new("az");

    public static readonly TranscriptionLanguage Ba = new("ba");

    public static readonly TranscriptionLanguage Eu = new("eu");

    public static readonly TranscriptionLanguage Be = new("be");

    public static readonly TranscriptionLanguage Bn = new("bn");

    public static readonly TranscriptionLanguage Bs = new("bs");

    public static readonly TranscriptionLanguage Br = new("br");

    public static readonly TranscriptionLanguage Bg = new("bg");

    public static readonly TranscriptionLanguage My = new("my");

    public static readonly TranscriptionLanguage Ca = new("ca");

    public static readonly TranscriptionLanguage Hr = new("hr");

    public static readonly TranscriptionLanguage Cs = new("cs");

    public static readonly TranscriptionLanguage Da = new("da");

    public static readonly TranscriptionLanguage Et = new("et");

    public static readonly TranscriptionLanguage Fo = new("fo");

    public static readonly TranscriptionLanguage Gl = new("gl");

    public static readonly TranscriptionLanguage Ka = new("ka");

    public static readonly TranscriptionLanguage El = new("el");

    public static readonly TranscriptionLanguage Gu = new("gu");

    public static readonly TranscriptionLanguage Ht = new("ht");

    public static readonly TranscriptionLanguage Ha = new("ha");

    public static readonly TranscriptionLanguage Haw = new("haw");

    public static readonly TranscriptionLanguage He = new("he");

    public static readonly TranscriptionLanguage Hu = new("hu");

    public static readonly TranscriptionLanguage IsMember = new("is");

    public static readonly TranscriptionLanguage Id = new("id");

    public static readonly TranscriptionLanguage Jw = new("jw");

    public static readonly TranscriptionLanguage Kn = new("kn");

    public static readonly TranscriptionLanguage Kk = new("kk");

    public static readonly TranscriptionLanguage Km = new("km");

    public static readonly TranscriptionLanguage Lo = new("lo");

    public static readonly TranscriptionLanguage La = new("la");

    public static readonly TranscriptionLanguage Lv = new("lv");

    public static readonly TranscriptionLanguage Ln = new("ln");

    public static readonly TranscriptionLanguage Lt = new("lt");

    public static readonly TranscriptionLanguage Lb = new("lb");

    public static readonly TranscriptionLanguage Mk = new("mk");

    public static readonly TranscriptionLanguage Mg = new("mg");

    public static readonly TranscriptionLanguage Ms = new("ms");

    public static readonly TranscriptionLanguage Ml = new("ml");

    public static readonly TranscriptionLanguage Mt = new("mt");

    public static readonly TranscriptionLanguage Mi = new("mi");

    public static readonly TranscriptionLanguage Mr = new("mr");

    public static readonly TranscriptionLanguage Mn = new("mn");

    public static readonly TranscriptionLanguage Ne = new("ne");

    public static readonly TranscriptionLanguage No = new("no");

    public static readonly TranscriptionLanguage Nn = new("nn");

    public static readonly TranscriptionLanguage Oc = new("oc");

    public static readonly TranscriptionLanguage Pa = new("pa");

    public static readonly TranscriptionLanguage Ps = new("ps");

    public static readonly TranscriptionLanguage Fa = new("fa");

    public static readonly TranscriptionLanguage Ro = new("ro");

    public static readonly TranscriptionLanguage Sa = new("sa");

    public static readonly TranscriptionLanguage Sr = new("sr");

    public static readonly TranscriptionLanguage Sn = new("sn");

    public static readonly TranscriptionLanguage Sd = new("sd");

    public static readonly TranscriptionLanguage Si = new("si");

    public static readonly TranscriptionLanguage Sk = new("sk");

    public static readonly TranscriptionLanguage Sl = new("sl");

    public static readonly TranscriptionLanguage So = new("so");

    public static readonly TranscriptionLanguage Su = new("su");

    public static readonly TranscriptionLanguage Sw = new("sw");

    public static readonly TranscriptionLanguage Sv = new("sv");

    public static readonly TranscriptionLanguage DeCh = new("de_ch");

    public static readonly TranscriptionLanguage Tl = new("tl");

    public static readonly TranscriptionLanguage Tg = new("tg");

    public static readonly TranscriptionLanguage Ta = new("ta");

    public static readonly TranscriptionLanguage Tt = new("tt");

    public static readonly TranscriptionLanguage Te = new("te");

    public static readonly TranscriptionLanguage Th = new("th");

    public static readonly TranscriptionLanguage Bo = new("bo");

    public static readonly TranscriptionLanguage Tk = new("tk");

    public static readonly TranscriptionLanguage Ur = new("ur");

    public static readonly TranscriptionLanguage Uz = new("uz");

    public static readonly TranscriptionLanguage Cy = new("cy");

    public static readonly TranscriptionLanguage Yi = new("yi");

    public static readonly TranscriptionLanguage Yo = new("yo");

    public TResult Match<TResult>(Func<TResult> onEn,
        Func<TResult> onEnAu,
        Func<TResult> onEnUk,
        Func<TResult> onEnUs,
        Func<TResult> onEs,
        Func<TResult> onFr,
        Func<TResult> onDe,
        Func<TResult> onIt,
        Func<TResult> onPt,
        Func<TResult> onNl,
        Func<TResult> onHi,
        Func<TResult> onJa,
        Func<TResult> onZh,
        Func<TResult> onFi,
        Func<TResult> onKo,
        Func<TResult> onPl,
        Func<TResult> onRu,
        Func<TResult> onTr,
        Func<TResult> onUk,
        Func<TResult> onVi,
        Func<TResult> onAf,
        Func<TResult> onSq,
        Func<TResult> onAm,
        Func<TResult> onAr,
        Func<TResult> onHy,
        Func<TResult> onAs,
        Func<TResult> onAz,
        Func<TResult> onBa,
        Func<TResult> onEu,
        Func<TResult> onBe,
        Func<TResult> onBn,
        Func<TResult> onBs,
        Func<TResult> onBr,
        Func<TResult> onBg,
        Func<TResult> onMy,
        Func<TResult> onCa,
        Func<TResult> onHr,
        Func<TResult> onCs,
        Func<TResult> onDa,
        Func<TResult> onEt,
        Func<TResult> onFo,
        Func<TResult> onGl,
        Func<TResult> onKa,
        Func<TResult> onEl,
        Func<TResult> onGu,
        Func<TResult> onHt,
        Func<TResult> onHa,
        Func<TResult> onHaw,
        Func<TResult> onHe,
        Func<TResult> onHu,
        Func<TResult> onIsMember,
        Func<TResult> onId,
        Func<TResult> onJw,
        Func<TResult> onKn,
        Func<TResult> onKk,
        Func<TResult> onKm,
        Func<TResult> onLo,
        Func<TResult> onLa,
        Func<TResult> onLv,
        Func<TResult> onLn,
        Func<TResult> onLt,
        Func<TResult> onLb,
        Func<TResult> onMk,
        Func<TResult> onMg,
        Func<TResult> onMs,
        Func<TResult> onMl,
        Func<TResult> onMt,
        Func<TResult> onMi,
        Func<TResult> onMr,
        Func<TResult> onMn,
        Func<TResult> onNe,
        Func<TResult> onNo,
        Func<TResult> onNn,
        Func<TResult> onOc,
        Func<TResult> onPa,
        Func<TResult> onPs,
        Func<TResult> onFa,
        Func<TResult> onRo,
        Func<TResult> onSa,
        Func<TResult> onSr,
        Func<TResult> onSn,
        Func<TResult> onSd,
        Func<TResult> onSi,
        Func<TResult> onSk,
        Func<TResult> onSl,
        Func<TResult> onSo,
        Func<TResult> onSu,
        Func<TResult> onSw,
        Func<TResult> onSv,
        Func<TResult> onDeCh,
        Func<TResult> onTl,
        Func<TResult> onTg,
        Func<TResult> onTa,
        Func<TResult> onTt,
        Func<TResult> onTe,
        Func<TResult> onTh,
        Func<TResult> onBo,
        Func<TResult> onTk,
        Func<TResult> onUr,
        Func<TResult> onUz,
        Func<TResult> onCy,
        Func<TResult> onYi,
        Func<TResult> onYo,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == En => onEn(),
            _ when this == EnAu => onEnAu(),
            _ when this == EnUk => onEnUk(),
            _ when this == EnUs => onEnUs(),
            _ when this == Es => onEs(),
            _ when this == Fr => onFr(),
            _ when this == De => onDe(),
            _ when this == It => onIt(),
            _ when this == Pt => onPt(),
            _ when this == Nl => onNl(),
            _ when this == Hi => onHi(),
            _ when this == Ja => onJa(),
            _ when this == Zh => onZh(),
            _ when this == Fi => onFi(),
            _ when this == Ko => onKo(),
            _ when this == Pl => onPl(),
            _ when this == Ru => onRu(),
            _ when this == Tr => onTr(),
            _ when this == Uk => onUk(),
            _ when this == Vi => onVi(),
            _ when this == Af => onAf(),
            _ when this == Sq => onSq(),
            _ when this == Am => onAm(),
            _ when this == Ar => onAr(),
            _ when this == Hy => onHy(),
            _ when this == As => onAs(),
            _ when this == Az => onAz(),
            _ when this == Ba => onBa(),
            _ when this == Eu => onEu(),
            _ when this == Be => onBe(),
            _ when this == Bn => onBn(),
            _ when this == Bs => onBs(),
            _ when this == Br => onBr(),
            _ when this == Bg => onBg(),
            _ when this == My => onMy(),
            _ when this == Ca => onCa(),
            _ when this == Hr => onHr(),
            _ when this == Cs => onCs(),
            _ when this == Da => onDa(),
            _ when this == Et => onEt(),
            _ when this == Fo => onFo(),
            _ when this == Gl => onGl(),
            _ when this == Ka => onKa(),
            _ when this == El => onEl(),
            _ when this == Gu => onGu(),
            _ when this == Ht => onHt(),
            _ when this == Ha => onHa(),
            _ when this == Haw => onHaw(),
            _ when this == He => onHe(),
            _ when this == Hu => onHu(),
            _ when this == IsMember => onIsMember(),
            _ when this == Id => onId(),
            _ when this == Jw => onJw(),
            _ when this == Kn => onKn(),
            _ when this == Kk => onKk(),
            _ when this == Km => onKm(),
            _ when this == Lo => onLo(),
            _ when this == La => onLa(),
            _ when this == Lv => onLv(),
            _ when this == Ln => onLn(),
            _ when this == Lt => onLt(),
            _ when this == Lb => onLb(),
            _ when this == Mk => onMk(),
            _ when this == Mg => onMg(),
            _ when this == Ms => onMs(),
            _ when this == Ml => onMl(),
            _ when this == Mt => onMt(),
            _ when this == Mi => onMi(),
            _ when this == Mr => onMr(),
            _ when this == Mn => onMn(),
            _ when this == Ne => onNe(),
            _ when this == No => onNo(),
            _ when this == Nn => onNn(),
            _ when this == Oc => onOc(),
            _ when this == Pa => onPa(),
            _ when this == Ps => onPs(),
            _ when this == Fa => onFa(),
            _ when this == Ro => onRo(),
            _ when this == Sa => onSa(),
            _ when this == Sr => onSr(),
            _ when this == Sn => onSn(),
            _ when this == Sd => onSd(),
            _ when this == Si => onSi(),
            _ when this == Sk => onSk(),
            _ when this == Sl => onSl(),
            _ when this == So => onSo(),
            _ when this == Su => onSu(),
            _ when this == Sw => onSw(),
            _ when this == Sv => onSv(),
            _ when this == DeCh => onDeCh(),
            _ when this == Tl => onTl(),
            _ when this == Tg => onTg(),
            _ when this == Ta => onTa(),
            _ when this == Tt => onTt(),
            _ when this == Te => onTe(),
            _ when this == Th => onTh(),
            _ when this == Bo => onBo(),
            _ when this == Tk => onTk(),
            _ when this == Ur => onUr(),
            _ when this == Uz => onUz(),
            _ when this == Cy => onCy(),
            _ when this == Yi => onYi(),
            _ when this == Yo => onYo(),
            _ => otherwise(Value)
        };

    public void Match(Action onEn,
        Action onEnAu,
        Action onEnUk,
        Action onEnUs,
        Action onEs,
        Action onFr,
        Action onDe,
        Action onIt,
        Action onPt,
        Action onNl,
        Action onHi,
        Action onJa,
        Action onZh,
        Action onFi,
        Action onKo,
        Action onPl,
        Action onRu,
        Action onTr,
        Action onUk,
        Action onVi,
        Action onAf,
        Action onSq,
        Action onAm,
        Action onAr,
        Action onHy,
        Action onAs,
        Action onAz,
        Action onBa,
        Action onEu,
        Action onBe,
        Action onBn,
        Action onBs,
        Action onBr,
        Action onBg,
        Action onMy,
        Action onCa,
        Action onHr,
        Action onCs,
        Action onDa,
        Action onEt,
        Action onFo,
        Action onGl,
        Action onKa,
        Action onEl,
        Action onGu,
        Action onHt,
        Action onHa,
        Action onHaw,
        Action onHe,
        Action onHu,
        Action onIsMember,
        Action onId,
        Action onJw,
        Action onKn,
        Action onKk,
        Action onKm,
        Action onLo,
        Action onLa,
        Action onLv,
        Action onLn,
        Action onLt,
        Action onLb,
        Action onMk,
        Action onMg,
        Action onMs,
        Action onMl,
        Action onMt,
        Action onMi,
        Action onMr,
        Action onMn,
        Action onNe,
        Action onNo,
        Action onNn,
        Action onOc,
        Action onPa,
        Action onPs,
        Action onFa,
        Action onRo,
        Action onSa,
        Action onSr,
        Action onSn,
        Action onSd,
        Action onSi,
        Action onSk,
        Action onSl,
        Action onSo,
        Action onSu,
        Action onSw,
        Action onSv,
        Action onDeCh,
        Action onTl,
        Action onTg,
        Action onTa,
        Action onTt,
        Action onTe,
        Action onTh,
        Action onBo,
        Action onTk,
        Action onUr,
        Action onUz,
        Action onCy,
        Action onYi,
        Action onYo,
        Action<string> otherwise)
    {
        if (this == En) onEn();
        else if (this == EnAu) onEnAu();
        else if (this == EnUk) onEnUk();
        else if (this == EnUs) onEnUs();
        else if (this == Es) onEs();
        else if (this == Fr) onFr();
        else if (this == De) onDe();
        else if (this == It) onIt();
        else if (this == Pt) onPt();
        else if (this == Nl) onNl();
        else if (this == Hi) onHi();
        else if (this == Ja) onJa();
        else if (this == Zh) onZh();
        else if (this == Fi) onFi();
        else if (this == Ko) onKo();
        else if (this == Pl) onPl();
        else if (this == Ru) onRu();
        else if (this == Tr) onTr();
        else if (this == Uk) onUk();
        else if (this == Vi) onVi();
        else if (this == Af) onAf();
        else if (this == Sq) onSq();
        else if (this == Am) onAm();
        else if (this == Ar) onAr();
        else if (this == Hy) onHy();
        else if (this == As) onAs();
        else if (this == Az) onAz();
        else if (this == Ba) onBa();
        else if (this == Eu) onEu();
        else if (this == Be) onBe();
        else if (this == Bn) onBn();
        else if (this == Bs) onBs();
        else if (this == Br) onBr();
        else if (this == Bg) onBg();
        else if (this == My) onMy();
        else if (this == Ca) onCa();
        else if (this == Hr) onHr();
        else if (this == Cs) onCs();
        else if (this == Da) onDa();
        else if (this == Et) onEt();
        else if (this == Fo) onFo();
        else if (this == Gl) onGl();
        else if (this == Ka) onKa();
        else if (this == El) onEl();
        else if (this == Gu) onGu();
        else if (this == Ht) onHt();
        else if (this == Ha) onHa();
        else if (this == Haw) onHaw();
        else if (this == He) onHe();
        else if (this == Hu) onHu();
        else if (this == IsMember) onIsMember();
        else if (this == Id) onId();
        else if (this == Jw) onJw();
        else if (this == Kn) onKn();
        else if (this == Kk) onKk();
        else if (this == Km) onKm();
        else if (this == Lo) onLo();
        else if (this == La) onLa();
        else if (this == Lv) onLv();
        else if (this == Ln) onLn();
        else if (this == Lt) onLt();
        else if (this == Lb) onLb();
        else if (this == Mk) onMk();
        else if (this == Mg) onMg();
        else if (this == Ms) onMs();
        else if (this == Ml) onMl();
        else if (this == Mt) onMt();
        else if (this == Mi) onMi();
        else if (this == Mr) onMr();
        else if (this == Mn) onMn();
        else if (this == Ne) onNe();
        else if (this == No) onNo();
        else if (this == Nn) onNn();
        else if (this == Oc) onOc();
        else if (this == Pa) onPa();
        else if (this == Ps) onPs();
        else if (this == Fa) onFa();
        else if (this == Ro) onRo();
        else if (this == Sa) onSa();
        else if (this == Sr) onSr();
        else if (this == Sn) onSn();
        else if (this == Sd) onSd();
        else if (this == Si) onSi();
        else if (this == Sk) onSk();
        else if (this == Sl) onSl();
        else if (this == So) onSo();
        else if (this == Su) onSu();
        else if (this == Sw) onSw();
        else if (this == Sv) onSv();
        else if (this == DeCh) onDeCh();
        else if (this == Tl) onTl();
        else if (this == Tg) onTg();
        else if (this == Ta) onTa();
        else if (this == Tt) onTt();
        else if (this == Te) onTe();
        else if (this == Th) onTh();
        else if (this == Bo) onBo();
        else if (this == Tk) onTk();
        else if (this == Ur) onUr();
        else if (this == Uz) onUz();
        else if (this == Cy) onCy();
        else if (this == Yi) onYi();
        else if (this == Yo) onYo();
        else otherwise(Value);
    }
}
