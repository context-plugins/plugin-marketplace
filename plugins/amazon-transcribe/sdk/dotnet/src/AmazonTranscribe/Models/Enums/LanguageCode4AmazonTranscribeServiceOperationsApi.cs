using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The language code that represents the language spoken in your audio stream.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode4AmazonTranscribeServiceOperationsApi>))]
public sealed record LanguageCode4AmazonTranscribeServiceOperationsApi : OpenStringEnum<LanguageCode4AmazonTranscribeServiceOperationsApi>
{
    private LanguageCode4AmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnUs = new("en-US");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnGb = new("en-GB");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EsUs = new("es-US");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi FrCa = new("fr-CA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi FrFr = new("fr-FR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnAu = new("en-AU");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ItIt = new("it-IT");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi DeDe = new("de-DE");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi PtBr = new("pt-BR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi JaJp = new("ja-JP");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi KoKr = new("ko-KR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ZhCn = new("zh-CN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ThTh = new("th-TH");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EsEs = new("es-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ArSa = new("ar-SA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi PtPt = new("pt-PT");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi CaEs = new("ca-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ArAe = new("ar-AE");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi HiIn = new("hi-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ZhHk = new("zh-HK");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi NlNl = new("nl-NL");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi NoNo = new("no-NO");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SvSe = new("sv-SE");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi PlPl = new("pl-PL");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi FiFi = new("fi-FI");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ZhTw = new("zh-TW");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnIn = new("en-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnIe = new("en-IE");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnNz = new("en-NZ");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnAb = new("en-AB");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnZa = new("en-ZA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EnWl = new("en-WL");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi DeCh = new("de-CH");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi AfZa = new("af-ZA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EuEs = new("eu-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi HrHr = new("hr-HR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi CsCz = new("cs-CZ");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi DaDk = new("da-DK");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi FaIr = new("fa-IR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi GlEs = new("gl-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ElGr = new("el-GR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi HeIl = new("he-IL");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi IdId = new("id-ID");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi LvLv = new("lv-LV");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi MsMy = new("ms-MY");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi RoRo = new("ro-RO");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi RuRu = new("ru-RU");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SrRs = new("sr-RS");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SkSk = new("sk-SK");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SoSo = new("so-SO");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi TlPh = new("tl-PH");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi UkUa = new("uk-UA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ViVn = new("vi-VN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi ZuZa = new("zu-ZA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi AmEt = new("am-ET");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi BeBy = new("be-BY");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi BgBg = new("bg-BG");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi BnIn = new("bn-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi BsBa = new("bs-BA");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi CkbIq = new("ckb-IQ");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi CkbIr = new("ckb-IR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi CyWl = new("cy-WL");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EsMx = new("es-MX");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi EtEt = new("et-ET");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi FaAf = new("fa-AF");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi GuIn = new("gu-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi HtHt = new("ht-HT");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi HuHu = new("hu-HU");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi HyAm = new("hy-AM");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi IsIs = new("is-IS");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi JvId = new("jv-ID");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi KaGe = new("ka-GE");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi KabDz = new("kab-DZ");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi KkKz = new("kk-KZ");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi KmKh = new("km-KH");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi KnIn = new("kn-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi LgIn = new("lg-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi LtLt = new("lt-LT");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi MkMk = new("mk-MK");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi MlIn = new("ml-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi MrIn = new("mr-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi MyMm = new("my-MM");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi NeNp = new("ne-NP");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi OrIn = new("or-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi PaIn = new("pa-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi PsAf = new("ps-AF");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SiLk = new("si-LK");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SlSi = new("sl-SI");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SqAl = new("sq-AL");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SuId = new("su-ID");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SwBi = new("sw-BI");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SwKe = new("sw-KE");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SwRw = new("sw-RW");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SwTz = new("sw-TZ");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi SwUg = new("sw-UG");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi TaIn = new("ta-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi TeIn = new("te-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi TrTr = new("tr-TR");

    public static readonly LanguageCode4AmazonTranscribeServiceOperationsApi UzUz = new("uz-UZ");

    public TResult Match<TResult>(Func<TResult> onEnUs,
        Func<TResult> onEnGb,
        Func<TResult> onEsUs,
        Func<TResult> onFrCa,
        Func<TResult> onFrFr,
        Func<TResult> onEnAu,
        Func<TResult> onItIt,
        Func<TResult> onDeDe,
        Func<TResult> onPtBr,
        Func<TResult> onJaJp,
        Func<TResult> onKoKr,
        Func<TResult> onZhCn,
        Func<TResult> onThTh,
        Func<TResult> onEsEs,
        Func<TResult> onArSa,
        Func<TResult> onPtPt,
        Func<TResult> onCaEs,
        Func<TResult> onArAe,
        Func<TResult> onHiIn,
        Func<TResult> onZhHk,
        Func<TResult> onNlNl,
        Func<TResult> onNoNo,
        Func<TResult> onSvSe,
        Func<TResult> onPlPl,
        Func<TResult> onFiFi,
        Func<TResult> onZhTw,
        Func<TResult> onEnIn,
        Func<TResult> onEnIe,
        Func<TResult> onEnNz,
        Func<TResult> onEnAb,
        Func<TResult> onEnZa,
        Func<TResult> onEnWl,
        Func<TResult> onDeCh,
        Func<TResult> onAfZa,
        Func<TResult> onEuEs,
        Func<TResult> onHrHr,
        Func<TResult> onCsCz,
        Func<TResult> onDaDk,
        Func<TResult> onFaIr,
        Func<TResult> onGlEs,
        Func<TResult> onElGr,
        Func<TResult> onHeIl,
        Func<TResult> onIdId,
        Func<TResult> onLvLv,
        Func<TResult> onMsMy,
        Func<TResult> onRoRo,
        Func<TResult> onRuRu,
        Func<TResult> onSrRs,
        Func<TResult> onSkSk,
        Func<TResult> onSoSo,
        Func<TResult> onTlPh,
        Func<TResult> onUkUa,
        Func<TResult> onViVn,
        Func<TResult> onZuZa,
        Func<TResult> onAmEt,
        Func<TResult> onBeBy,
        Func<TResult> onBgBg,
        Func<TResult> onBnIn,
        Func<TResult> onBsBa,
        Func<TResult> onCkbIq,
        Func<TResult> onCkbIr,
        Func<TResult> onCyWl,
        Func<TResult> onEsMx,
        Func<TResult> onEtEt,
        Func<TResult> onFaAf,
        Func<TResult> onGuIn,
        Func<TResult> onHtHt,
        Func<TResult> onHuHu,
        Func<TResult> onHyAm,
        Func<TResult> onIsIs,
        Func<TResult> onJvId,
        Func<TResult> onKaGe,
        Func<TResult> onKabDz,
        Func<TResult> onKkKz,
        Func<TResult> onKmKh,
        Func<TResult> onKnIn,
        Func<TResult> onLgIn,
        Func<TResult> onLtLt,
        Func<TResult> onMkMk,
        Func<TResult> onMlIn,
        Func<TResult> onMrIn,
        Func<TResult> onMyMm,
        Func<TResult> onNeNp,
        Func<TResult> onOrIn,
        Func<TResult> onPaIn,
        Func<TResult> onPsAf,
        Func<TResult> onSiLk,
        Func<TResult> onSlSi,
        Func<TResult> onSqAl,
        Func<TResult> onSuId,
        Func<TResult> onSwBi,
        Func<TResult> onSwKe,
        Func<TResult> onSwRw,
        Func<TResult> onSwTz,
        Func<TResult> onSwUg,
        Func<TResult> onTaIn,
        Func<TResult> onTeIn,
        Func<TResult> onTrTr,
        Func<TResult> onUzUz,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnUs => onEnUs(),
            _ when this == EnGb => onEnGb(),
            _ when this == EsUs => onEsUs(),
            _ when this == FrCa => onFrCa(),
            _ when this == FrFr => onFrFr(),
            _ when this == EnAu => onEnAu(),
            _ when this == ItIt => onItIt(),
            _ when this == DeDe => onDeDe(),
            _ when this == PtBr => onPtBr(),
            _ when this == JaJp => onJaJp(),
            _ when this == KoKr => onKoKr(),
            _ when this == ZhCn => onZhCn(),
            _ when this == ThTh => onThTh(),
            _ when this == EsEs => onEsEs(),
            _ when this == ArSa => onArSa(),
            _ when this == PtPt => onPtPt(),
            _ when this == CaEs => onCaEs(),
            _ when this == ArAe => onArAe(),
            _ when this == HiIn => onHiIn(),
            _ when this == ZhHk => onZhHk(),
            _ when this == NlNl => onNlNl(),
            _ when this == NoNo => onNoNo(),
            _ when this == SvSe => onSvSe(),
            _ when this == PlPl => onPlPl(),
            _ when this == FiFi => onFiFi(),
            _ when this == ZhTw => onZhTw(),
            _ when this == EnIn => onEnIn(),
            _ when this == EnIe => onEnIe(),
            _ when this == EnNz => onEnNz(),
            _ when this == EnAb => onEnAb(),
            _ when this == EnZa => onEnZa(),
            _ when this == EnWl => onEnWl(),
            _ when this == DeCh => onDeCh(),
            _ when this == AfZa => onAfZa(),
            _ when this == EuEs => onEuEs(),
            _ when this == HrHr => onHrHr(),
            _ when this == CsCz => onCsCz(),
            _ when this == DaDk => onDaDk(),
            _ when this == FaIr => onFaIr(),
            _ when this == GlEs => onGlEs(),
            _ when this == ElGr => onElGr(),
            _ when this == HeIl => onHeIl(),
            _ when this == IdId => onIdId(),
            _ when this == LvLv => onLvLv(),
            _ when this == MsMy => onMsMy(),
            _ when this == RoRo => onRoRo(),
            _ when this == RuRu => onRuRu(),
            _ when this == SrRs => onSrRs(),
            _ when this == SkSk => onSkSk(),
            _ when this == SoSo => onSoSo(),
            _ when this == TlPh => onTlPh(),
            _ when this == UkUa => onUkUa(),
            _ when this == ViVn => onViVn(),
            _ when this == ZuZa => onZuZa(),
            _ when this == AmEt => onAmEt(),
            _ when this == BeBy => onBeBy(),
            _ when this == BgBg => onBgBg(),
            _ when this == BnIn => onBnIn(),
            _ when this == BsBa => onBsBa(),
            _ when this == CkbIq => onCkbIq(),
            _ when this == CkbIr => onCkbIr(),
            _ when this == CyWl => onCyWl(),
            _ when this == EsMx => onEsMx(),
            _ when this == EtEt => onEtEt(),
            _ when this == FaAf => onFaAf(),
            _ when this == GuIn => onGuIn(),
            _ when this == HtHt => onHtHt(),
            _ when this == HuHu => onHuHu(),
            _ when this == HyAm => onHyAm(),
            _ when this == IsIs => onIsIs(),
            _ when this == JvId => onJvId(),
            _ when this == KaGe => onKaGe(),
            _ when this == KabDz => onKabDz(),
            _ when this == KkKz => onKkKz(),
            _ when this == KmKh => onKmKh(),
            _ when this == KnIn => onKnIn(),
            _ when this == LgIn => onLgIn(),
            _ when this == LtLt => onLtLt(),
            _ when this == MkMk => onMkMk(),
            _ when this == MlIn => onMlIn(),
            _ when this == MrIn => onMrIn(),
            _ when this == MyMm => onMyMm(),
            _ when this == NeNp => onNeNp(),
            _ when this == OrIn => onOrIn(),
            _ when this == PaIn => onPaIn(),
            _ when this == PsAf => onPsAf(),
            _ when this == SiLk => onSiLk(),
            _ when this == SlSi => onSlSi(),
            _ when this == SqAl => onSqAl(),
            _ when this == SuId => onSuId(),
            _ when this == SwBi => onSwBi(),
            _ when this == SwKe => onSwKe(),
            _ when this == SwRw => onSwRw(),
            _ when this == SwTz => onSwTz(),
            _ when this == SwUg => onSwUg(),
            _ when this == TaIn => onTaIn(),
            _ when this == TeIn => onTeIn(),
            _ when this == TrTr => onTrTr(),
            _ when this == UzUz => onUzUz(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnUs,
        Action onEnGb,
        Action onEsUs,
        Action onFrCa,
        Action onFrFr,
        Action onEnAu,
        Action onItIt,
        Action onDeDe,
        Action onPtBr,
        Action onJaJp,
        Action onKoKr,
        Action onZhCn,
        Action onThTh,
        Action onEsEs,
        Action onArSa,
        Action onPtPt,
        Action onCaEs,
        Action onArAe,
        Action onHiIn,
        Action onZhHk,
        Action onNlNl,
        Action onNoNo,
        Action onSvSe,
        Action onPlPl,
        Action onFiFi,
        Action onZhTw,
        Action onEnIn,
        Action onEnIe,
        Action onEnNz,
        Action onEnAb,
        Action onEnZa,
        Action onEnWl,
        Action onDeCh,
        Action onAfZa,
        Action onEuEs,
        Action onHrHr,
        Action onCsCz,
        Action onDaDk,
        Action onFaIr,
        Action onGlEs,
        Action onElGr,
        Action onHeIl,
        Action onIdId,
        Action onLvLv,
        Action onMsMy,
        Action onRoRo,
        Action onRuRu,
        Action onSrRs,
        Action onSkSk,
        Action onSoSo,
        Action onTlPh,
        Action onUkUa,
        Action onViVn,
        Action onZuZa,
        Action onAmEt,
        Action onBeBy,
        Action onBgBg,
        Action onBnIn,
        Action onBsBa,
        Action onCkbIq,
        Action onCkbIr,
        Action onCyWl,
        Action onEsMx,
        Action onEtEt,
        Action onFaAf,
        Action onGuIn,
        Action onHtHt,
        Action onHuHu,
        Action onHyAm,
        Action onIsIs,
        Action onJvId,
        Action onKaGe,
        Action onKabDz,
        Action onKkKz,
        Action onKmKh,
        Action onKnIn,
        Action onLgIn,
        Action onLtLt,
        Action onMkMk,
        Action onMlIn,
        Action onMrIn,
        Action onMyMm,
        Action onNeNp,
        Action onOrIn,
        Action onPaIn,
        Action onPsAf,
        Action onSiLk,
        Action onSlSi,
        Action onSqAl,
        Action onSuId,
        Action onSwBi,
        Action onSwKe,
        Action onSwRw,
        Action onSwTz,
        Action onSwUg,
        Action onTaIn,
        Action onTeIn,
        Action onTrTr,
        Action onUzUz,
        Action<string> otherwise)
    {
        if (this == EnUs) onEnUs();
        else if (this == EnGb) onEnGb();
        else if (this == EsUs) onEsUs();
        else if (this == FrCa) onFrCa();
        else if (this == FrFr) onFrFr();
        else if (this == EnAu) onEnAu();
        else if (this == ItIt) onItIt();
        else if (this == DeDe) onDeDe();
        else if (this == PtBr) onPtBr();
        else if (this == JaJp) onJaJp();
        else if (this == KoKr) onKoKr();
        else if (this == ZhCn) onZhCn();
        else if (this == ThTh) onThTh();
        else if (this == EsEs) onEsEs();
        else if (this == ArSa) onArSa();
        else if (this == PtPt) onPtPt();
        else if (this == CaEs) onCaEs();
        else if (this == ArAe) onArAe();
        else if (this == HiIn) onHiIn();
        else if (this == ZhHk) onZhHk();
        else if (this == NlNl) onNlNl();
        else if (this == NoNo) onNoNo();
        else if (this == SvSe) onSvSe();
        else if (this == PlPl) onPlPl();
        else if (this == FiFi) onFiFi();
        else if (this == ZhTw) onZhTw();
        else if (this == EnIn) onEnIn();
        else if (this == EnIe) onEnIe();
        else if (this == EnNz) onEnNz();
        else if (this == EnAb) onEnAb();
        else if (this == EnZa) onEnZa();
        else if (this == EnWl) onEnWl();
        else if (this == DeCh) onDeCh();
        else if (this == AfZa) onAfZa();
        else if (this == EuEs) onEuEs();
        else if (this == HrHr) onHrHr();
        else if (this == CsCz) onCsCz();
        else if (this == DaDk) onDaDk();
        else if (this == FaIr) onFaIr();
        else if (this == GlEs) onGlEs();
        else if (this == ElGr) onElGr();
        else if (this == HeIl) onHeIl();
        else if (this == IdId) onIdId();
        else if (this == LvLv) onLvLv();
        else if (this == MsMy) onMsMy();
        else if (this == RoRo) onRoRo();
        else if (this == RuRu) onRuRu();
        else if (this == SrRs) onSrRs();
        else if (this == SkSk) onSkSk();
        else if (this == SoSo) onSoSo();
        else if (this == TlPh) onTlPh();
        else if (this == UkUa) onUkUa();
        else if (this == ViVn) onViVn();
        else if (this == ZuZa) onZuZa();
        else if (this == AmEt) onAmEt();
        else if (this == BeBy) onBeBy();
        else if (this == BgBg) onBgBg();
        else if (this == BnIn) onBnIn();
        else if (this == BsBa) onBsBa();
        else if (this == CkbIq) onCkbIq();
        else if (this == CkbIr) onCkbIr();
        else if (this == CyWl) onCyWl();
        else if (this == EsMx) onEsMx();
        else if (this == EtEt) onEtEt();
        else if (this == FaAf) onFaAf();
        else if (this == GuIn) onGuIn();
        else if (this == HtHt) onHtHt();
        else if (this == HuHu) onHuHu();
        else if (this == HyAm) onHyAm();
        else if (this == IsIs) onIsIs();
        else if (this == JvId) onJvId();
        else if (this == KaGe) onKaGe();
        else if (this == KabDz) onKabDz();
        else if (this == KkKz) onKkKz();
        else if (this == KmKh) onKmKh();
        else if (this == KnIn) onKnIn();
        else if (this == LgIn) onLgIn();
        else if (this == LtLt) onLtLt();
        else if (this == MkMk) onMkMk();
        else if (this == MlIn) onMlIn();
        else if (this == MrIn) onMrIn();
        else if (this == MyMm) onMyMm();
        else if (this == NeNp) onNeNp();
        else if (this == OrIn) onOrIn();
        else if (this == PaIn) onPaIn();
        else if (this == PsAf) onPsAf();
        else if (this == SiLk) onSiLk();
        else if (this == SlSi) onSlSi();
        else if (this == SqAl) onSqAl();
        else if (this == SuId) onSuId();
        else if (this == SwBi) onSwBi();
        else if (this == SwKe) onSwKe();
        else if (this == SwRw) onSwRw();
        else if (this == SwTz) onSwTz();
        else if (this == SwUg) onSwUg();
        else if (this == TaIn) onTaIn();
        else if (this == TeIn) onTeIn();
        else if (this == TrTr) onTrTr();
        else if (this == UzUz) onUzUz();
        else otherwise(Value);
    }
}
