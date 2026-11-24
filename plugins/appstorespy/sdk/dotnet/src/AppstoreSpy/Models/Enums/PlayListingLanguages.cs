using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// Every locale Google Play Console accepts for a store listing. Used by the live
/// listing endpoint, which crawls Google Play directly and is not limited by the
/// languages stored in Elasticsearch (see AppLanguages).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlayListingLanguages>))]
public sealed record PlayListingLanguages : OpenStringEnum<PlayListingLanguages>
{
    private PlayListingLanguages(string value) : base(value)
    {
    }

    public static readonly PlayListingLanguages Af = new("af");

    public static readonly PlayListingLanguages Sq = new("sq");

    public static readonly PlayListingLanguages Am = new("am");

    public static readonly PlayListingLanguages Ar = new("ar");

    public static readonly PlayListingLanguages HyAm = new("hy_AM");

    public static readonly PlayListingLanguages AzAz = new("az_AZ");

    public static readonly PlayListingLanguages BnBd = new("bn_BD");

    public static readonly PlayListingLanguages EuEs = new("eu_ES");

    public static readonly PlayListingLanguages Be = new("be");

    public static readonly PlayListingLanguages Bg = new("bg");

    public static readonly PlayListingLanguages MyMm = new("my_MM");

    public static readonly PlayListingLanguages Ca = new("ca");

    public static readonly PlayListingLanguages ZhHk = new("zh_HK");

    public static readonly PlayListingLanguages ZhCn = new("zh_CN");

    public static readonly PlayListingLanguages ZhTw = new("zh_TW");

    public static readonly PlayListingLanguages Hr = new("hr");

    public static readonly PlayListingLanguages CsCz = new("cs_CZ");

    public static readonly PlayListingLanguages DaDk = new("da_DK");

    public static readonly PlayListingLanguages NlNl = new("nl_NL");

    public static readonly PlayListingLanguages EnIn = new("en_IN");

    public static readonly PlayListingLanguages EnSg = new("en_SG");

    public static readonly PlayListingLanguages EnZa = new("en_ZA");

    public static readonly PlayListingLanguages EnAu = new("en_AU");

    public static readonly PlayListingLanguages EnCa = new("en_CA");

    public static readonly PlayListingLanguages EnGb = new("en_GB");

    public static readonly PlayListingLanguages EnUs = new("en_US");

    public static readonly PlayListingLanguages Et = new("et");

    public static readonly PlayListingLanguages Fil = new("fil");

    public static readonly PlayListingLanguages FiFi = new("fi_FI");

    public static readonly PlayListingLanguages FrCa = new("fr_CA");

    public static readonly PlayListingLanguages FrFr = new("fr_FR");

    public static readonly PlayListingLanguages GlEs = new("gl_ES");

    public static readonly PlayListingLanguages KaGe = new("ka_GE");

    public static readonly PlayListingLanguages DeDe = new("de_DE");

    public static readonly PlayListingLanguages ElGr = new("el_GR");

    public static readonly PlayListingLanguages Gu = new("gu");

    public static readonly PlayListingLanguages IwIl = new("iw_IL");

    public static readonly PlayListingLanguages HiIn = new("hi_IN");

    public static readonly PlayListingLanguages HuHu = new("hu_HU");

    public static readonly PlayListingLanguages IsIs = new("is_IS");

    public static readonly PlayListingLanguages Id = new("id");

    public static readonly PlayListingLanguages ItIt = new("it_IT");

    public static readonly PlayListingLanguages JaJp = new("ja_JP");

    public static readonly PlayListingLanguages KnIn = new("kn_IN");

    public static readonly PlayListingLanguages Kk = new("kk");

    public static readonly PlayListingLanguages KmKh = new("km_KH");

    public static readonly PlayListingLanguages KoKr = new("ko_KR");

    public static readonly PlayListingLanguages KyKg = new("ky_KG");

    public static readonly PlayListingLanguages LoLa = new("lo_LA");

    public static readonly PlayListingLanguages Lv = new("lv");

    public static readonly PlayListingLanguages Lt = new("lt");

    public static readonly PlayListingLanguages MkMk = new("mk_MK");

    public static readonly PlayListingLanguages Ms = new("ms");

    public static readonly PlayListingLanguages MsMy = new("ms_MY");

    public static readonly PlayListingLanguages MlIn = new("ml_IN");

    public static readonly PlayListingLanguages MrIn = new("mr_IN");

    public static readonly PlayListingLanguages MnMn = new("mn_MN");

    public static readonly PlayListingLanguages NeNp = new("ne_NP");

    public static readonly PlayListingLanguages NoNo = new("no_NO");

    public static readonly PlayListingLanguages Fa = new("fa");

    public static readonly PlayListingLanguages FaAe = new("fa_AE");

    public static readonly PlayListingLanguages FaAf = new("fa_AF");

    public static readonly PlayListingLanguages FaIr = new("fa_IR");

    public static readonly PlayListingLanguages PlPl = new("pl_PL");

    public static readonly PlayListingLanguages PtBr = new("pt_BR");

    public static readonly PlayListingLanguages PtPt = new("pt_PT");

    public static readonly PlayListingLanguages Pa = new("pa");

    public static readonly PlayListingLanguages Ro = new("ro");

    public static readonly PlayListingLanguages Rm = new("rm");

    public static readonly PlayListingLanguages RuRu = new("ru_RU");

    public static readonly PlayListingLanguages Sr = new("sr");

    public static readonly PlayListingLanguages SiLk = new("si_LK");

    public static readonly PlayListingLanguages Sk = new("sk");

    public static readonly PlayListingLanguages Sl = new("sl");

    public static readonly PlayListingLanguages Es419 = new("es_419");

    public static readonly PlayListingLanguages EsEs = new("es_ES");

    public static readonly PlayListingLanguages EsUs = new("es_US");

    public static readonly PlayListingLanguages Sw = new("sw");

    public static readonly PlayListingLanguages SvSe = new("sv_SE");

    public static readonly PlayListingLanguages TaIn = new("ta_IN");

    public static readonly PlayListingLanguages TeIn = new("te_IN");

    public static readonly PlayListingLanguages Th = new("th");

    public static readonly PlayListingLanguages TrTr = new("tr_TR");

    public static readonly PlayListingLanguages Uk = new("uk");

    public static readonly PlayListingLanguages Ur = new("ur");

    public static readonly PlayListingLanguages Vi = new("vi");

    public static readonly PlayListingLanguages Zu = new("zu");

    public TResult Match<TResult>(Func<TResult> onAf,
        Func<TResult> onSq,
        Func<TResult> onAm,
        Func<TResult> onAr,
        Func<TResult> onHyAm,
        Func<TResult> onAzAz,
        Func<TResult> onBnBd,
        Func<TResult> onEuEs,
        Func<TResult> onBe,
        Func<TResult> onBg,
        Func<TResult> onMyMm,
        Func<TResult> onCa,
        Func<TResult> onZhHk,
        Func<TResult> onZhCn,
        Func<TResult> onZhTw,
        Func<TResult> onHr,
        Func<TResult> onCsCz,
        Func<TResult> onDaDk,
        Func<TResult> onNlNl,
        Func<TResult> onEnIn,
        Func<TResult> onEnSg,
        Func<TResult> onEnZa,
        Func<TResult> onEnAu,
        Func<TResult> onEnCa,
        Func<TResult> onEnGb,
        Func<TResult> onEnUs,
        Func<TResult> onEt,
        Func<TResult> onFil,
        Func<TResult> onFiFi,
        Func<TResult> onFrCa,
        Func<TResult> onFrFr,
        Func<TResult> onGlEs,
        Func<TResult> onKaGe,
        Func<TResult> onDeDe,
        Func<TResult> onElGr,
        Func<TResult> onGu,
        Func<TResult> onIwIl,
        Func<TResult> onHiIn,
        Func<TResult> onHuHu,
        Func<TResult> onIsIs,
        Func<TResult> onId,
        Func<TResult> onItIt,
        Func<TResult> onJaJp,
        Func<TResult> onKnIn,
        Func<TResult> onKk,
        Func<TResult> onKmKh,
        Func<TResult> onKoKr,
        Func<TResult> onKyKg,
        Func<TResult> onLoLa,
        Func<TResult> onLv,
        Func<TResult> onLt,
        Func<TResult> onMkMk,
        Func<TResult> onMs,
        Func<TResult> onMsMy,
        Func<TResult> onMlIn,
        Func<TResult> onMrIn,
        Func<TResult> onMnMn,
        Func<TResult> onNeNp,
        Func<TResult> onNoNo,
        Func<TResult> onFa,
        Func<TResult> onFaAe,
        Func<TResult> onFaAf,
        Func<TResult> onFaIr,
        Func<TResult> onPlPl,
        Func<TResult> onPtBr,
        Func<TResult> onPtPt,
        Func<TResult> onPa,
        Func<TResult> onRo,
        Func<TResult> onRm,
        Func<TResult> onRuRu,
        Func<TResult> onSr,
        Func<TResult> onSiLk,
        Func<TResult> onSk,
        Func<TResult> onSl,
        Func<TResult> onEs419,
        Func<TResult> onEsEs,
        Func<TResult> onEsUs,
        Func<TResult> onSw,
        Func<TResult> onSvSe,
        Func<TResult> onTaIn,
        Func<TResult> onTeIn,
        Func<TResult> onTh,
        Func<TResult> onTrTr,
        Func<TResult> onUk,
        Func<TResult> onUr,
        Func<TResult> onVi,
        Func<TResult> onZu,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Af => onAf(),
            _ when this == Sq => onSq(),
            _ when this == Am => onAm(),
            _ when this == Ar => onAr(),
            _ when this == HyAm => onHyAm(),
            _ when this == AzAz => onAzAz(),
            _ when this == BnBd => onBnBd(),
            _ when this == EuEs => onEuEs(),
            _ when this == Be => onBe(),
            _ when this == Bg => onBg(),
            _ when this == MyMm => onMyMm(),
            _ when this == Ca => onCa(),
            _ when this == ZhHk => onZhHk(),
            _ when this == ZhCn => onZhCn(),
            _ when this == ZhTw => onZhTw(),
            _ when this == Hr => onHr(),
            _ when this == CsCz => onCsCz(),
            _ when this == DaDk => onDaDk(),
            _ when this == NlNl => onNlNl(),
            _ when this == EnIn => onEnIn(),
            _ when this == EnSg => onEnSg(),
            _ when this == EnZa => onEnZa(),
            _ when this == EnAu => onEnAu(),
            _ when this == EnCa => onEnCa(),
            _ when this == EnGb => onEnGb(),
            _ when this == EnUs => onEnUs(),
            _ when this == Et => onEt(),
            _ when this == Fil => onFil(),
            _ when this == FiFi => onFiFi(),
            _ when this == FrCa => onFrCa(),
            _ when this == FrFr => onFrFr(),
            _ when this == GlEs => onGlEs(),
            _ when this == KaGe => onKaGe(),
            _ when this == DeDe => onDeDe(),
            _ when this == ElGr => onElGr(),
            _ when this == Gu => onGu(),
            _ when this == IwIl => onIwIl(),
            _ when this == HiIn => onHiIn(),
            _ when this == HuHu => onHuHu(),
            _ when this == IsIs => onIsIs(),
            _ when this == Id => onId(),
            _ when this == ItIt => onItIt(),
            _ when this == JaJp => onJaJp(),
            _ when this == KnIn => onKnIn(),
            _ when this == Kk => onKk(),
            _ when this == KmKh => onKmKh(),
            _ when this == KoKr => onKoKr(),
            _ when this == KyKg => onKyKg(),
            _ when this == LoLa => onLoLa(),
            _ when this == Lv => onLv(),
            _ when this == Lt => onLt(),
            _ when this == MkMk => onMkMk(),
            _ when this == Ms => onMs(),
            _ when this == MsMy => onMsMy(),
            _ when this == MlIn => onMlIn(),
            _ when this == MrIn => onMrIn(),
            _ when this == MnMn => onMnMn(),
            _ when this == NeNp => onNeNp(),
            _ when this == NoNo => onNoNo(),
            _ when this == Fa => onFa(),
            _ when this == FaAe => onFaAe(),
            _ when this == FaAf => onFaAf(),
            _ when this == FaIr => onFaIr(),
            _ when this == PlPl => onPlPl(),
            _ when this == PtBr => onPtBr(),
            _ when this == PtPt => onPtPt(),
            _ when this == Pa => onPa(),
            _ when this == Ro => onRo(),
            _ when this == Rm => onRm(),
            _ when this == RuRu => onRuRu(),
            _ when this == Sr => onSr(),
            _ when this == SiLk => onSiLk(),
            _ when this == Sk => onSk(),
            _ when this == Sl => onSl(),
            _ when this == Es419 => onEs419(),
            _ when this == EsEs => onEsEs(),
            _ when this == EsUs => onEsUs(),
            _ when this == Sw => onSw(),
            _ when this == SvSe => onSvSe(),
            _ when this == TaIn => onTaIn(),
            _ when this == TeIn => onTeIn(),
            _ when this == Th => onTh(),
            _ when this == TrTr => onTrTr(),
            _ when this == Uk => onUk(),
            _ when this == Ur => onUr(),
            _ when this == Vi => onVi(),
            _ when this == Zu => onZu(),
            _ => otherwise(Value)
        };

    public void Match(Action onAf,
        Action onSq,
        Action onAm,
        Action onAr,
        Action onHyAm,
        Action onAzAz,
        Action onBnBd,
        Action onEuEs,
        Action onBe,
        Action onBg,
        Action onMyMm,
        Action onCa,
        Action onZhHk,
        Action onZhCn,
        Action onZhTw,
        Action onHr,
        Action onCsCz,
        Action onDaDk,
        Action onNlNl,
        Action onEnIn,
        Action onEnSg,
        Action onEnZa,
        Action onEnAu,
        Action onEnCa,
        Action onEnGb,
        Action onEnUs,
        Action onEt,
        Action onFil,
        Action onFiFi,
        Action onFrCa,
        Action onFrFr,
        Action onGlEs,
        Action onKaGe,
        Action onDeDe,
        Action onElGr,
        Action onGu,
        Action onIwIl,
        Action onHiIn,
        Action onHuHu,
        Action onIsIs,
        Action onId,
        Action onItIt,
        Action onJaJp,
        Action onKnIn,
        Action onKk,
        Action onKmKh,
        Action onKoKr,
        Action onKyKg,
        Action onLoLa,
        Action onLv,
        Action onLt,
        Action onMkMk,
        Action onMs,
        Action onMsMy,
        Action onMlIn,
        Action onMrIn,
        Action onMnMn,
        Action onNeNp,
        Action onNoNo,
        Action onFa,
        Action onFaAe,
        Action onFaAf,
        Action onFaIr,
        Action onPlPl,
        Action onPtBr,
        Action onPtPt,
        Action onPa,
        Action onRo,
        Action onRm,
        Action onRuRu,
        Action onSr,
        Action onSiLk,
        Action onSk,
        Action onSl,
        Action onEs419,
        Action onEsEs,
        Action onEsUs,
        Action onSw,
        Action onSvSe,
        Action onTaIn,
        Action onTeIn,
        Action onTh,
        Action onTrTr,
        Action onUk,
        Action onUr,
        Action onVi,
        Action onZu,
        Action<string> otherwise)
    {
        if (this == Af) onAf();
        else if (this == Sq) onSq();
        else if (this == Am) onAm();
        else if (this == Ar) onAr();
        else if (this == HyAm) onHyAm();
        else if (this == AzAz) onAzAz();
        else if (this == BnBd) onBnBd();
        else if (this == EuEs) onEuEs();
        else if (this == Be) onBe();
        else if (this == Bg) onBg();
        else if (this == MyMm) onMyMm();
        else if (this == Ca) onCa();
        else if (this == ZhHk) onZhHk();
        else if (this == ZhCn) onZhCn();
        else if (this == ZhTw) onZhTw();
        else if (this == Hr) onHr();
        else if (this == CsCz) onCsCz();
        else if (this == DaDk) onDaDk();
        else if (this == NlNl) onNlNl();
        else if (this == EnIn) onEnIn();
        else if (this == EnSg) onEnSg();
        else if (this == EnZa) onEnZa();
        else if (this == EnAu) onEnAu();
        else if (this == EnCa) onEnCa();
        else if (this == EnGb) onEnGb();
        else if (this == EnUs) onEnUs();
        else if (this == Et) onEt();
        else if (this == Fil) onFil();
        else if (this == FiFi) onFiFi();
        else if (this == FrCa) onFrCa();
        else if (this == FrFr) onFrFr();
        else if (this == GlEs) onGlEs();
        else if (this == KaGe) onKaGe();
        else if (this == DeDe) onDeDe();
        else if (this == ElGr) onElGr();
        else if (this == Gu) onGu();
        else if (this == IwIl) onIwIl();
        else if (this == HiIn) onHiIn();
        else if (this == HuHu) onHuHu();
        else if (this == IsIs) onIsIs();
        else if (this == Id) onId();
        else if (this == ItIt) onItIt();
        else if (this == JaJp) onJaJp();
        else if (this == KnIn) onKnIn();
        else if (this == Kk) onKk();
        else if (this == KmKh) onKmKh();
        else if (this == KoKr) onKoKr();
        else if (this == KyKg) onKyKg();
        else if (this == LoLa) onLoLa();
        else if (this == Lv) onLv();
        else if (this == Lt) onLt();
        else if (this == MkMk) onMkMk();
        else if (this == Ms) onMs();
        else if (this == MsMy) onMsMy();
        else if (this == MlIn) onMlIn();
        else if (this == MrIn) onMrIn();
        else if (this == MnMn) onMnMn();
        else if (this == NeNp) onNeNp();
        else if (this == NoNo) onNoNo();
        else if (this == Fa) onFa();
        else if (this == FaAe) onFaAe();
        else if (this == FaAf) onFaAf();
        else if (this == FaIr) onFaIr();
        else if (this == PlPl) onPlPl();
        else if (this == PtBr) onPtBr();
        else if (this == PtPt) onPtPt();
        else if (this == Pa) onPa();
        else if (this == Ro) onRo();
        else if (this == Rm) onRm();
        else if (this == RuRu) onRuRu();
        else if (this == Sr) onSr();
        else if (this == SiLk) onSiLk();
        else if (this == Sk) onSk();
        else if (this == Sl) onSl();
        else if (this == Es419) onEs419();
        else if (this == EsEs) onEsEs();
        else if (this == EsUs) onEsUs();
        else if (this == Sw) onSw();
        else if (this == SvSe) onSvSe();
        else if (this == TaIn) onTaIn();
        else if (this == TeIn) onTeIn();
        else if (this == Th) onTh();
        else if (this == TrTr) onTrTr();
        else if (this == Uk) onUk();
        else if (this == Ur) onUr();
        else if (this == Vi) onVi();
        else if (this == Zu) onZu();
        else otherwise(Value);
    }
}
