using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// The language code that represents the language of the entries in the custom vocabulary you want to update. Each custom vocabulary must contain terms in only one language. A custom vocabulary can only be used to transcribe files in the same language as the custom vocabulary. For example, if you create a custom vocabulary using US English (en-US), you can only apply this custom vocabulary to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LanguageCode4AmazonTranscribeServiceVocabulariesApi>))]
public sealed record LanguageCode4AmazonTranscribeServiceVocabulariesApi : OpenStringEnum<LanguageCode4AmazonTranscribeServiceVocabulariesApi>
{
    private LanguageCode4AmazonTranscribeServiceVocabulariesApi(string value) : base(value)
    {
    }

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi AfZa = new("af-ZA");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ArAe = new("ar-AE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ArSa = new("ar-SA");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi AmEt = new("am-ET");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi CyGb = new("cy-GB");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi DaDk = new("da-DK");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi DeCh = new("de-CH");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi DeDe = new("de-DE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnAb = new("en-AB");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnAu = new("en-AU");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnGb = new("en-GB");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnIe = new("en-IE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnIn = new("en-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnUs = new("en-US");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnWl = new("en-WL");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EsEs = new("es-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EsMx = new("es-MX");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EsUs = new("es-US");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi FaAf = new("fa-AF");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi FaIr = new("fa-IR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi FrCa = new("fr-CA");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi FrFr = new("fr-FR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi GaIe = new("ga-IE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi GdGb = new("gd-GB");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HeIl = new("he-IL");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HiIn = new("hi-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HtHt = new("ht-HT");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi IdId = new("id-ID");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ItIt = new("it-IT");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi JaJp = new("ja-JP");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi JvId = new("jv-ID");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KmKh = new("km-KH");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KoKr = new("ko-KR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MyMm = new("my-MM");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MsMy = new("ms-MY");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi NlNl = new("nl-NL");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi PtBr = new("pt-BR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi PtPt = new("pt-PT");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi RuRu = new("ru-RU");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi TaIn = new("ta-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi TeIn = new("te-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi TrTr = new("tr-TR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ZhCn = new("zh-CN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ZhTw = new("zh-TW");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ThTh = new("th-TH");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnZa = new("en-ZA");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EnNz = new("en-NZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ViVn = new("vi-VN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SvSe = new("sv-SE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi AbGe = new("ab-GE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi AstEs = new("ast-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi AzAz = new("az-AZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi BaRu = new("ba-RU");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi BeBy = new("be-BY");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi BgBg = new("bg-BG");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi BnIn = new("bn-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi BsBa = new("bs-BA");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi CaEs = new("ca-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi CkbIq = new("ckb-IQ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi CkbIr = new("ckb-IR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi CsCz = new("cs-CZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi CyWl = new("cy-WL");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ElGr = new("el-GR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EtEe = new("et-EE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EtEt = new("et-ET");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi EuEs = new("eu-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi FiFi = new("fi-FI");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi GlEs = new("gl-ES");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi GuIn = new("gu-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HaNg = new("ha-NG");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HrHr = new("hr-HR");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HuHu = new("hu-HU");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi HyAm = new("hy-AM");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi IsIs = new("is-IS");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KaGe = new("ka-GE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KabDz = new("kab-DZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KkKz = new("kk-KZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KnIn = new("kn-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi KyKg = new("ky-KG");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi LgIn = new("lg-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi LtLt = new("lt-LT");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi LvLv = new("lv-LV");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MhrRu = new("mhr-RU");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MiNz = new("mi-NZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MkMk = new("mk-MK");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MlIn = new("ml-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MnMn = new("mn-MN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MrIn = new("mr-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi MtMt = new("mt-MT");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi NoNo = new("no-NO");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi NeNp = new("ne-NP");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi OrIn = new("or-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi PaIn = new("pa-IN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi PlPl = new("pl-PL");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi PsAf = new("ps-AF");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi RoRo = new("ro-RO");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi RwRw = new("rw-RW");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SiLk = new("si-LK");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SkSk = new("sk-SK");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SlSi = new("sl-SI");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SoSo = new("so-SO");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SqAl = new("sq-AL");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SrRs = new("sr-RS");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SuId = new("su-ID");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SwBi = new("sw-BI");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SwKe = new("sw-KE");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SwRw = new("sw-RW");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SwTz = new("sw-TZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi SwUg = new("sw-UG");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi TlPh = new("tl-PH");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi TtRu = new("tt-RU");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi UgCn = new("ug-CN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi UkUa = new("uk-UA");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi UzUz = new("uz-UZ");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi WoSn = new("wo-SN");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ZhHk = new("zh-HK");

    public static readonly LanguageCode4AmazonTranscribeServiceVocabulariesApi ZuZa = new("zu-ZA");

    public TResult Match<TResult>(Func<TResult> onAfZa,
        Func<TResult> onArAe,
        Func<TResult> onArSa,
        Func<TResult> onAmEt,
        Func<TResult> onCyGb,
        Func<TResult> onDaDk,
        Func<TResult> onDeCh,
        Func<TResult> onDeDe,
        Func<TResult> onEnAb,
        Func<TResult> onEnAu,
        Func<TResult> onEnGb,
        Func<TResult> onEnIe,
        Func<TResult> onEnIn,
        Func<TResult> onEnUs,
        Func<TResult> onEnWl,
        Func<TResult> onEsEs,
        Func<TResult> onEsMx,
        Func<TResult> onEsUs,
        Func<TResult> onFaAf,
        Func<TResult> onFaIr,
        Func<TResult> onFrCa,
        Func<TResult> onFrFr,
        Func<TResult> onGaIe,
        Func<TResult> onGdGb,
        Func<TResult> onHeIl,
        Func<TResult> onHiIn,
        Func<TResult> onHtHt,
        Func<TResult> onIdId,
        Func<TResult> onItIt,
        Func<TResult> onJaJp,
        Func<TResult> onJvId,
        Func<TResult> onKmKh,
        Func<TResult> onKoKr,
        Func<TResult> onMyMm,
        Func<TResult> onMsMy,
        Func<TResult> onNlNl,
        Func<TResult> onPtBr,
        Func<TResult> onPtPt,
        Func<TResult> onRuRu,
        Func<TResult> onTaIn,
        Func<TResult> onTeIn,
        Func<TResult> onTrTr,
        Func<TResult> onZhCn,
        Func<TResult> onZhTw,
        Func<TResult> onThTh,
        Func<TResult> onEnZa,
        Func<TResult> onEnNz,
        Func<TResult> onViVn,
        Func<TResult> onSvSe,
        Func<TResult> onAbGe,
        Func<TResult> onAstEs,
        Func<TResult> onAzAz,
        Func<TResult> onBaRu,
        Func<TResult> onBeBy,
        Func<TResult> onBgBg,
        Func<TResult> onBnIn,
        Func<TResult> onBsBa,
        Func<TResult> onCaEs,
        Func<TResult> onCkbIq,
        Func<TResult> onCkbIr,
        Func<TResult> onCsCz,
        Func<TResult> onCyWl,
        Func<TResult> onElGr,
        Func<TResult> onEtEe,
        Func<TResult> onEtEt,
        Func<TResult> onEuEs,
        Func<TResult> onFiFi,
        Func<TResult> onGlEs,
        Func<TResult> onGuIn,
        Func<TResult> onHaNg,
        Func<TResult> onHrHr,
        Func<TResult> onHuHu,
        Func<TResult> onHyAm,
        Func<TResult> onIsIs,
        Func<TResult> onKaGe,
        Func<TResult> onKabDz,
        Func<TResult> onKkKz,
        Func<TResult> onKnIn,
        Func<TResult> onKyKg,
        Func<TResult> onLgIn,
        Func<TResult> onLtLt,
        Func<TResult> onLvLv,
        Func<TResult> onMhrRu,
        Func<TResult> onMiNz,
        Func<TResult> onMkMk,
        Func<TResult> onMlIn,
        Func<TResult> onMnMn,
        Func<TResult> onMrIn,
        Func<TResult> onMtMt,
        Func<TResult> onNoNo,
        Func<TResult> onNeNp,
        Func<TResult> onOrIn,
        Func<TResult> onPaIn,
        Func<TResult> onPlPl,
        Func<TResult> onPsAf,
        Func<TResult> onRoRo,
        Func<TResult> onRwRw,
        Func<TResult> onSiLk,
        Func<TResult> onSkSk,
        Func<TResult> onSlSi,
        Func<TResult> onSoSo,
        Func<TResult> onSqAl,
        Func<TResult> onSrRs,
        Func<TResult> onSuId,
        Func<TResult> onSwBi,
        Func<TResult> onSwKe,
        Func<TResult> onSwRw,
        Func<TResult> onSwTz,
        Func<TResult> onSwUg,
        Func<TResult> onTlPh,
        Func<TResult> onTtRu,
        Func<TResult> onUgCn,
        Func<TResult> onUkUa,
        Func<TResult> onUzUz,
        Func<TResult> onWoSn,
        Func<TResult> onZhHk,
        Func<TResult> onZuZa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AfZa => onAfZa(),
            _ when this == ArAe => onArAe(),
            _ when this == ArSa => onArSa(),
            _ when this == AmEt => onAmEt(),
            _ when this == CyGb => onCyGb(),
            _ when this == DaDk => onDaDk(),
            _ when this == DeCh => onDeCh(),
            _ when this == DeDe => onDeDe(),
            _ when this == EnAb => onEnAb(),
            _ when this == EnAu => onEnAu(),
            _ when this == EnGb => onEnGb(),
            _ when this == EnIe => onEnIe(),
            _ when this == EnIn => onEnIn(),
            _ when this == EnUs => onEnUs(),
            _ when this == EnWl => onEnWl(),
            _ when this == EsEs => onEsEs(),
            _ when this == EsMx => onEsMx(),
            _ when this == EsUs => onEsUs(),
            _ when this == FaAf => onFaAf(),
            _ when this == FaIr => onFaIr(),
            _ when this == FrCa => onFrCa(),
            _ when this == FrFr => onFrFr(),
            _ when this == GaIe => onGaIe(),
            _ when this == GdGb => onGdGb(),
            _ when this == HeIl => onHeIl(),
            _ when this == HiIn => onHiIn(),
            _ when this == HtHt => onHtHt(),
            _ when this == IdId => onIdId(),
            _ when this == ItIt => onItIt(),
            _ when this == JaJp => onJaJp(),
            _ when this == JvId => onJvId(),
            _ when this == KmKh => onKmKh(),
            _ when this == KoKr => onKoKr(),
            _ when this == MyMm => onMyMm(),
            _ when this == MsMy => onMsMy(),
            _ when this == NlNl => onNlNl(),
            _ when this == PtBr => onPtBr(),
            _ when this == PtPt => onPtPt(),
            _ when this == RuRu => onRuRu(),
            _ when this == TaIn => onTaIn(),
            _ when this == TeIn => onTeIn(),
            _ when this == TrTr => onTrTr(),
            _ when this == ZhCn => onZhCn(),
            _ when this == ZhTw => onZhTw(),
            _ when this == ThTh => onThTh(),
            _ when this == EnZa => onEnZa(),
            _ when this == EnNz => onEnNz(),
            _ when this == ViVn => onViVn(),
            _ when this == SvSe => onSvSe(),
            _ when this == AbGe => onAbGe(),
            _ when this == AstEs => onAstEs(),
            _ when this == AzAz => onAzAz(),
            _ when this == BaRu => onBaRu(),
            _ when this == BeBy => onBeBy(),
            _ when this == BgBg => onBgBg(),
            _ when this == BnIn => onBnIn(),
            _ when this == BsBa => onBsBa(),
            _ when this == CaEs => onCaEs(),
            _ when this == CkbIq => onCkbIq(),
            _ when this == CkbIr => onCkbIr(),
            _ when this == CsCz => onCsCz(),
            _ when this == CyWl => onCyWl(),
            _ when this == ElGr => onElGr(),
            _ when this == EtEe => onEtEe(),
            _ when this == EtEt => onEtEt(),
            _ when this == EuEs => onEuEs(),
            _ when this == FiFi => onFiFi(),
            _ when this == GlEs => onGlEs(),
            _ when this == GuIn => onGuIn(),
            _ when this == HaNg => onHaNg(),
            _ when this == HrHr => onHrHr(),
            _ when this == HuHu => onHuHu(),
            _ when this == HyAm => onHyAm(),
            _ when this == IsIs => onIsIs(),
            _ when this == KaGe => onKaGe(),
            _ when this == KabDz => onKabDz(),
            _ when this == KkKz => onKkKz(),
            _ when this == KnIn => onKnIn(),
            _ when this == KyKg => onKyKg(),
            _ when this == LgIn => onLgIn(),
            _ when this == LtLt => onLtLt(),
            _ when this == LvLv => onLvLv(),
            _ when this == MhrRu => onMhrRu(),
            _ when this == MiNz => onMiNz(),
            _ when this == MkMk => onMkMk(),
            _ when this == MlIn => onMlIn(),
            _ when this == MnMn => onMnMn(),
            _ when this == MrIn => onMrIn(),
            _ when this == MtMt => onMtMt(),
            _ when this == NoNo => onNoNo(),
            _ when this == NeNp => onNeNp(),
            _ when this == OrIn => onOrIn(),
            _ when this == PaIn => onPaIn(),
            _ when this == PlPl => onPlPl(),
            _ when this == PsAf => onPsAf(),
            _ when this == RoRo => onRoRo(),
            _ when this == RwRw => onRwRw(),
            _ when this == SiLk => onSiLk(),
            _ when this == SkSk => onSkSk(),
            _ when this == SlSi => onSlSi(),
            _ when this == SoSo => onSoSo(),
            _ when this == SqAl => onSqAl(),
            _ when this == SrRs => onSrRs(),
            _ when this == SuId => onSuId(),
            _ when this == SwBi => onSwBi(),
            _ when this == SwKe => onSwKe(),
            _ when this == SwRw => onSwRw(),
            _ when this == SwTz => onSwTz(),
            _ when this == SwUg => onSwUg(),
            _ when this == TlPh => onTlPh(),
            _ when this == TtRu => onTtRu(),
            _ when this == UgCn => onUgCn(),
            _ when this == UkUa => onUkUa(),
            _ when this == UzUz => onUzUz(),
            _ when this == WoSn => onWoSn(),
            _ when this == ZhHk => onZhHk(),
            _ when this == ZuZa => onZuZa(),
            _ => otherwise(Value)
        };

    public void Match(Action onAfZa,
        Action onArAe,
        Action onArSa,
        Action onAmEt,
        Action onCyGb,
        Action onDaDk,
        Action onDeCh,
        Action onDeDe,
        Action onEnAb,
        Action onEnAu,
        Action onEnGb,
        Action onEnIe,
        Action onEnIn,
        Action onEnUs,
        Action onEnWl,
        Action onEsEs,
        Action onEsMx,
        Action onEsUs,
        Action onFaAf,
        Action onFaIr,
        Action onFrCa,
        Action onFrFr,
        Action onGaIe,
        Action onGdGb,
        Action onHeIl,
        Action onHiIn,
        Action onHtHt,
        Action onIdId,
        Action onItIt,
        Action onJaJp,
        Action onJvId,
        Action onKmKh,
        Action onKoKr,
        Action onMyMm,
        Action onMsMy,
        Action onNlNl,
        Action onPtBr,
        Action onPtPt,
        Action onRuRu,
        Action onTaIn,
        Action onTeIn,
        Action onTrTr,
        Action onZhCn,
        Action onZhTw,
        Action onThTh,
        Action onEnZa,
        Action onEnNz,
        Action onViVn,
        Action onSvSe,
        Action onAbGe,
        Action onAstEs,
        Action onAzAz,
        Action onBaRu,
        Action onBeBy,
        Action onBgBg,
        Action onBnIn,
        Action onBsBa,
        Action onCaEs,
        Action onCkbIq,
        Action onCkbIr,
        Action onCsCz,
        Action onCyWl,
        Action onElGr,
        Action onEtEe,
        Action onEtEt,
        Action onEuEs,
        Action onFiFi,
        Action onGlEs,
        Action onGuIn,
        Action onHaNg,
        Action onHrHr,
        Action onHuHu,
        Action onHyAm,
        Action onIsIs,
        Action onKaGe,
        Action onKabDz,
        Action onKkKz,
        Action onKnIn,
        Action onKyKg,
        Action onLgIn,
        Action onLtLt,
        Action onLvLv,
        Action onMhrRu,
        Action onMiNz,
        Action onMkMk,
        Action onMlIn,
        Action onMnMn,
        Action onMrIn,
        Action onMtMt,
        Action onNoNo,
        Action onNeNp,
        Action onOrIn,
        Action onPaIn,
        Action onPlPl,
        Action onPsAf,
        Action onRoRo,
        Action onRwRw,
        Action onSiLk,
        Action onSkSk,
        Action onSlSi,
        Action onSoSo,
        Action onSqAl,
        Action onSrRs,
        Action onSuId,
        Action onSwBi,
        Action onSwKe,
        Action onSwRw,
        Action onSwTz,
        Action onSwUg,
        Action onTlPh,
        Action onTtRu,
        Action onUgCn,
        Action onUkUa,
        Action onUzUz,
        Action onWoSn,
        Action onZhHk,
        Action onZuZa,
        Action<string> otherwise)
    {
        if (this == AfZa) onAfZa();
        else if (this == ArAe) onArAe();
        else if (this == ArSa) onArSa();
        else if (this == AmEt) onAmEt();
        else if (this == CyGb) onCyGb();
        else if (this == DaDk) onDaDk();
        else if (this == DeCh) onDeCh();
        else if (this == DeDe) onDeDe();
        else if (this == EnAb) onEnAb();
        else if (this == EnAu) onEnAu();
        else if (this == EnGb) onEnGb();
        else if (this == EnIe) onEnIe();
        else if (this == EnIn) onEnIn();
        else if (this == EnUs) onEnUs();
        else if (this == EnWl) onEnWl();
        else if (this == EsEs) onEsEs();
        else if (this == EsMx) onEsMx();
        else if (this == EsUs) onEsUs();
        else if (this == FaAf) onFaAf();
        else if (this == FaIr) onFaIr();
        else if (this == FrCa) onFrCa();
        else if (this == FrFr) onFrFr();
        else if (this == GaIe) onGaIe();
        else if (this == GdGb) onGdGb();
        else if (this == HeIl) onHeIl();
        else if (this == HiIn) onHiIn();
        else if (this == HtHt) onHtHt();
        else if (this == IdId) onIdId();
        else if (this == ItIt) onItIt();
        else if (this == JaJp) onJaJp();
        else if (this == JvId) onJvId();
        else if (this == KmKh) onKmKh();
        else if (this == KoKr) onKoKr();
        else if (this == MyMm) onMyMm();
        else if (this == MsMy) onMsMy();
        else if (this == NlNl) onNlNl();
        else if (this == PtBr) onPtBr();
        else if (this == PtPt) onPtPt();
        else if (this == RuRu) onRuRu();
        else if (this == TaIn) onTaIn();
        else if (this == TeIn) onTeIn();
        else if (this == TrTr) onTrTr();
        else if (this == ZhCn) onZhCn();
        else if (this == ZhTw) onZhTw();
        else if (this == ThTh) onThTh();
        else if (this == EnZa) onEnZa();
        else if (this == EnNz) onEnNz();
        else if (this == ViVn) onViVn();
        else if (this == SvSe) onSvSe();
        else if (this == AbGe) onAbGe();
        else if (this == AstEs) onAstEs();
        else if (this == AzAz) onAzAz();
        else if (this == BaRu) onBaRu();
        else if (this == BeBy) onBeBy();
        else if (this == BgBg) onBgBg();
        else if (this == BnIn) onBnIn();
        else if (this == BsBa) onBsBa();
        else if (this == CaEs) onCaEs();
        else if (this == CkbIq) onCkbIq();
        else if (this == CkbIr) onCkbIr();
        else if (this == CsCz) onCsCz();
        else if (this == CyWl) onCyWl();
        else if (this == ElGr) onElGr();
        else if (this == EtEe) onEtEe();
        else if (this == EtEt) onEtEt();
        else if (this == EuEs) onEuEs();
        else if (this == FiFi) onFiFi();
        else if (this == GlEs) onGlEs();
        else if (this == GuIn) onGuIn();
        else if (this == HaNg) onHaNg();
        else if (this == HrHr) onHrHr();
        else if (this == HuHu) onHuHu();
        else if (this == HyAm) onHyAm();
        else if (this == IsIs) onIsIs();
        else if (this == KaGe) onKaGe();
        else if (this == KabDz) onKabDz();
        else if (this == KkKz) onKkKz();
        else if (this == KnIn) onKnIn();
        else if (this == KyKg) onKyKg();
        else if (this == LgIn) onLgIn();
        else if (this == LtLt) onLtLt();
        else if (this == LvLv) onLvLv();
        else if (this == MhrRu) onMhrRu();
        else if (this == MiNz) onMiNz();
        else if (this == MkMk) onMkMk();
        else if (this == MlIn) onMlIn();
        else if (this == MnMn) onMnMn();
        else if (this == MrIn) onMrIn();
        else if (this == MtMt) onMtMt();
        else if (this == NoNo) onNoNo();
        else if (this == NeNp) onNeNp();
        else if (this == OrIn) onOrIn();
        else if (this == PaIn) onPaIn();
        else if (this == PlPl) onPlPl();
        else if (this == PsAf) onPsAf();
        else if (this == RoRo) onRoRo();
        else if (this == RwRw) onRwRw();
        else if (this == SiLk) onSiLk();
        else if (this == SkSk) onSkSk();
        else if (this == SlSi) onSlSi();
        else if (this == SoSo) onSoSo();
        else if (this == SqAl) onSqAl();
        else if (this == SrRs) onSrRs();
        else if (this == SuId) onSuId();
        else if (this == SwBi) onSwBi();
        else if (this == SwKe) onSwKe();
        else if (this == SwRw) onSwRw();
        else if (this == SwTz) onSwTz();
        else if (this == SwUg) onSwUg();
        else if (this == TlPh) onTlPh();
        else if (this == TtRu) onTtRu();
        else if (this == UgCn) onUgCn();
        else if (this == UkUa) onUkUa();
        else if (this == UzUz) onUzUz();
        else if (this == WoSn) onWoSn();
        else if (this == ZhHk) onZhHk();
        else if (this == ZuZa) onZuZa();
        else otherwise(Value);
    }
}
