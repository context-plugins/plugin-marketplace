using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enumeration based on the ISO2 country code specification.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CurrencyCode>))]
public sealed record CurrencyCode : OpenStringEnum<CurrencyCode>
{
    private CurrencyCode(string value) : base(value)
    {
    }

    public static readonly CurrencyCode Aed = new("AED");

    public static readonly CurrencyCode Afn = new("AFN");

    public static readonly CurrencyCode All = new("ALL");

    public static readonly CurrencyCode Amd = new("AMD");

    public static readonly CurrencyCode Ang = new("ANG");

    public static readonly CurrencyCode Aoa = new("AOA");

    public static readonly CurrencyCode Ars = new("ARS");

    public static readonly CurrencyCode Aud = new("AUD");

    public static readonly CurrencyCode Awg = new("AWG");

    public static readonly CurrencyCode Azn = new("AZN");

    public static readonly CurrencyCode Bam = new("BAM");

    public static readonly CurrencyCode Bbd = new("BBD");

    public static readonly CurrencyCode Bdt = new("BDT");

    public static readonly CurrencyCode Bgn = new("BGN");

    public static readonly CurrencyCode Bhd = new("BHD");

    public static readonly CurrencyCode Bif = new("BIF");

    public static readonly CurrencyCode Bmd = new("BMD");

    public static readonly CurrencyCode Bnd = new("BND");

    public static readonly CurrencyCode Bob = new("BOB");

    public static readonly CurrencyCode Brl = new("BRL");

    public static readonly CurrencyCode Bsd = new("BSD");

    public static readonly CurrencyCode Btn = new("BTN");

    public static readonly CurrencyCode Bwp = new("BWP");

    public static readonly CurrencyCode Byn = new("BYN");

    public static readonly CurrencyCode Bzd = new("BZD");

    public static readonly CurrencyCode Cad = new("CAD");

    public static readonly CurrencyCode Cdf = new("CDF");

    public static readonly CurrencyCode Chf = new("CHF");

    public static readonly CurrencyCode Clp = new("CLP");

    public static readonly CurrencyCode Cny = new("CNY");

    public static readonly CurrencyCode Cop = new("COP");

    public static readonly CurrencyCode Crc = new("CRC");

    public static readonly CurrencyCode Cuc = new("CUC");

    public static readonly CurrencyCode Cup = new("CUP");

    public static readonly CurrencyCode Cve = new("CVE");

    public static readonly CurrencyCode Czk = new("CZK");

    public static readonly CurrencyCode Djf = new("DJF");

    public static readonly CurrencyCode Dkk = new("DKK");

    public static readonly CurrencyCode Dop = new("DOP");

    public static readonly CurrencyCode Dzd = new("DZD");

    public static readonly CurrencyCode Egp = new("EGP");

    public static readonly CurrencyCode Ern = new("ERN");

    public static readonly CurrencyCode Etb = new("ETB");

    public static readonly CurrencyCode Eur = new("EUR");

    public static readonly CurrencyCode Fjd = new("FJD");

    public static readonly CurrencyCode Fkp = new("FKP");

    public static readonly CurrencyCode Gbp = new("GBP");

    public static readonly CurrencyCode Gel = new("GEL");

    public static readonly CurrencyCode Ggp = new("GGP");

    public static readonly CurrencyCode Ghs = new("GHS");

    public static readonly CurrencyCode Gip = new("GIP");

    public static readonly CurrencyCode Gmd = new("GMD");

    public static readonly CurrencyCode Gnf = new("GNF");

    public static readonly CurrencyCode Gtq = new("GTQ");

    public static readonly CurrencyCode Gyd = new("GYD");

    public static readonly CurrencyCode Hkd = new("HKD");

    public static readonly CurrencyCode Hnl = new("HNL");

    public static readonly CurrencyCode Hrk = new("HRK");

    public static readonly CurrencyCode Htg = new("HTG");

    public static readonly CurrencyCode Huf = new("HUF");

    public static readonly CurrencyCode Idr = new("IDR");

    public static readonly CurrencyCode Ils = new("ILS");

    public static readonly CurrencyCode Imp = new("IMP");

    public static readonly CurrencyCode Inr = new("INR");

    public static readonly CurrencyCode Iqd = new("IQD");

    public static readonly CurrencyCode Irr = new("IRR");

    public static readonly CurrencyCode Isk = new("ISK");

    public static readonly CurrencyCode Jep = new("JEP");

    public static readonly CurrencyCode Jmd = new("JMD");

    public static readonly CurrencyCode Jod = new("JOD");

    public static readonly CurrencyCode Jpy = new("JPY");

    public static readonly CurrencyCode Kes = new("KES");

    public static readonly CurrencyCode Kgs = new("KGS");

    public static readonly CurrencyCode Khr = new("KHR");

    public static readonly CurrencyCode Kmf = new("KMF");

    public static readonly CurrencyCode Kpw = new("KPW");

    public static readonly CurrencyCode Krw = new("KRW");

    public static readonly CurrencyCode Kwd = new("KWD");

    public static readonly CurrencyCode Kyd = new("KYD");

    public static readonly CurrencyCode Kzt = new("KZT");

    public static readonly CurrencyCode Lak = new("LAK");

    public static readonly CurrencyCode Lbp = new("LBP");

    public static readonly CurrencyCode Lkr = new("LKR");

    public static readonly CurrencyCode Lrd = new("LRD");

    public static readonly CurrencyCode Lsl = new("LSL");

    public static readonly CurrencyCode Lyd = new("LYD");

    public static readonly CurrencyCode Mad = new("MAD");

    public static readonly CurrencyCode Mdl = new("MDL");

    public static readonly CurrencyCode Mga = new("MGA");

    public static readonly CurrencyCode Mkd = new("MKD");

    public static readonly CurrencyCode Mmk = new("MMK");

    public static readonly CurrencyCode Mnt = new("MNT");

    public static readonly CurrencyCode Mop = new("MOP");

    public static readonly CurrencyCode Mru = new("MRU");

    public static readonly CurrencyCode Mur = new("MUR");

    public static readonly CurrencyCode Mvr = new("MVR");

    public static readonly CurrencyCode Mwk = new("MWK");

    public static readonly CurrencyCode Mxn = new("MXN");

    public static readonly CurrencyCode Myr = new("MYR");

    public static readonly CurrencyCode Mzn = new("MZN");

    public static readonly CurrencyCode Nad = new("NAD");

    public static readonly CurrencyCode Ngn = new("NGN");

    public static readonly CurrencyCode Nio = new("NIO");

    public static readonly CurrencyCode Nok = new("NOK");

    public static readonly CurrencyCode Npr = new("NPR");

    public static readonly CurrencyCode Nzd = new("NZD");

    public static readonly CurrencyCode Omr = new("OMR");

    public static readonly CurrencyCode Pab = new("PAB");

    public static readonly CurrencyCode Pen = new("PEN");

    public static readonly CurrencyCode Pgk = new("PGK");

    public static readonly CurrencyCode Php = new("PHP");

    public static readonly CurrencyCode Pkr = new("PKR");

    public static readonly CurrencyCode Pln = new("PLN");

    public static readonly CurrencyCode Pyg = new("PYG");

    public static readonly CurrencyCode Qar = new("QAR");

    public static readonly CurrencyCode Ron = new("RON");

    public static readonly CurrencyCode Rsd = new("RSD");

    public static readonly CurrencyCode Rub = new("RUB");

    public static readonly CurrencyCode Rwf = new("RWF");

    public static readonly CurrencyCode Sar = new("SAR");

    public static readonly CurrencyCode Sbd = new("SBD");

    public static readonly CurrencyCode Scr = new("SCR");

    public static readonly CurrencyCode Sdg = new("SDG");

    public static readonly CurrencyCode Sek = new("SEK");

    public static readonly CurrencyCode Sgd = new("SGD");

    public static readonly CurrencyCode Shp = new("SHP");

    public static readonly CurrencyCode Sle = new("SLE");

    public static readonly CurrencyCode Sll = new("SLL");

    public static readonly CurrencyCode Sos = new("SOS");

    public static readonly CurrencyCode Spl = new("SPL");

    public static readonly CurrencyCode Srd = new("SRD");

    public static readonly CurrencyCode Stn = new("STN");

    public static readonly CurrencyCode Svc = new("SVC");

    public static readonly CurrencyCode Syp = new("SYP");

    public static readonly CurrencyCode Szl = new("SZL");

    public static readonly CurrencyCode Thb = new("THB");

    public static readonly CurrencyCode Tjs = new("TJS");

    public static readonly CurrencyCode Tmt = new("TMT");

    public static readonly CurrencyCode Tnd = new("TND");

    public static readonly CurrencyCode Top = new("TOP");

    public static readonly CurrencyCode Try = new("TRY");

    public static readonly CurrencyCode Ttd = new("TTD");

    public static readonly CurrencyCode Tvd = new("TVD");

    public static readonly CurrencyCode Twd = new("TWD");

    public static readonly CurrencyCode Tzs = new("TZS");

    public static readonly CurrencyCode Uah = new("UAH");

    public static readonly CurrencyCode Ugx = new("UGX");

    public static readonly CurrencyCode Usd = new("USD");

    public static readonly CurrencyCode Uyu = new("UYU");

    public static readonly CurrencyCode Uzs = new("UZS");

    public static readonly CurrencyCode Vef = new("VEF");

    public static readonly CurrencyCode Vnd = new("VND");

    public static readonly CurrencyCode Vuv = new("VUV");

    public static readonly CurrencyCode Wst = new("WST");

    public static readonly CurrencyCode Xaf = new("XAF");

    public static readonly CurrencyCode Xcd = new("XCD");

    public static readonly CurrencyCode Xdr = new("XDR");

    public static readonly CurrencyCode Xof = new("XOF");

    public static readonly CurrencyCode Xpf = new("XPF");

    public static readonly CurrencyCode Yer = new("YER");

    public static readonly CurrencyCode Zar = new("ZAR");

    public static readonly CurrencyCode Zmw = new("ZMW");

    public static readonly CurrencyCode Zwd = new("ZWD");

    public TResult Match<TResult>(Func<TResult> onAed,
        Func<TResult> onAfn,
        Func<TResult> onAll,
        Func<TResult> onAmd,
        Func<TResult> onAng,
        Func<TResult> onAoa,
        Func<TResult> onArs,
        Func<TResult> onAud,
        Func<TResult> onAwg,
        Func<TResult> onAzn,
        Func<TResult> onBam,
        Func<TResult> onBbd,
        Func<TResult> onBdt,
        Func<TResult> onBgn,
        Func<TResult> onBhd,
        Func<TResult> onBif,
        Func<TResult> onBmd,
        Func<TResult> onBnd,
        Func<TResult> onBob,
        Func<TResult> onBrl,
        Func<TResult> onBsd,
        Func<TResult> onBtn,
        Func<TResult> onBwp,
        Func<TResult> onByn,
        Func<TResult> onBzd,
        Func<TResult> onCad,
        Func<TResult> onCdf,
        Func<TResult> onChf,
        Func<TResult> onClp,
        Func<TResult> onCny,
        Func<TResult> onCop,
        Func<TResult> onCrc,
        Func<TResult> onCuc,
        Func<TResult> onCup,
        Func<TResult> onCve,
        Func<TResult> onCzk,
        Func<TResult> onDjf,
        Func<TResult> onDkk,
        Func<TResult> onDop,
        Func<TResult> onDzd,
        Func<TResult> onEgp,
        Func<TResult> onErn,
        Func<TResult> onEtb,
        Func<TResult> onEur,
        Func<TResult> onFjd,
        Func<TResult> onFkp,
        Func<TResult> onGbp,
        Func<TResult> onGel,
        Func<TResult> onGgp,
        Func<TResult> onGhs,
        Func<TResult> onGip,
        Func<TResult> onGmd,
        Func<TResult> onGnf,
        Func<TResult> onGtq,
        Func<TResult> onGyd,
        Func<TResult> onHkd,
        Func<TResult> onHnl,
        Func<TResult> onHrk,
        Func<TResult> onHtg,
        Func<TResult> onHuf,
        Func<TResult> onIdr,
        Func<TResult> onIls,
        Func<TResult> onImp,
        Func<TResult> onInr,
        Func<TResult> onIqd,
        Func<TResult> onIrr,
        Func<TResult> onIsk,
        Func<TResult> onJep,
        Func<TResult> onJmd,
        Func<TResult> onJod,
        Func<TResult> onJpy,
        Func<TResult> onKes,
        Func<TResult> onKgs,
        Func<TResult> onKhr,
        Func<TResult> onKmf,
        Func<TResult> onKpw,
        Func<TResult> onKrw,
        Func<TResult> onKwd,
        Func<TResult> onKyd,
        Func<TResult> onKzt,
        Func<TResult> onLak,
        Func<TResult> onLbp,
        Func<TResult> onLkr,
        Func<TResult> onLrd,
        Func<TResult> onLsl,
        Func<TResult> onLyd,
        Func<TResult> onMad,
        Func<TResult> onMdl,
        Func<TResult> onMga,
        Func<TResult> onMkd,
        Func<TResult> onMmk,
        Func<TResult> onMnt,
        Func<TResult> onMop,
        Func<TResult> onMru,
        Func<TResult> onMur,
        Func<TResult> onMvr,
        Func<TResult> onMwk,
        Func<TResult> onMxn,
        Func<TResult> onMyr,
        Func<TResult> onMzn,
        Func<TResult> onNad,
        Func<TResult> onNgn,
        Func<TResult> onNio,
        Func<TResult> onNok,
        Func<TResult> onNpr,
        Func<TResult> onNzd,
        Func<TResult> onOmr,
        Func<TResult> onPab,
        Func<TResult> onPen,
        Func<TResult> onPgk,
        Func<TResult> onPhp,
        Func<TResult> onPkr,
        Func<TResult> onPln,
        Func<TResult> onPyg,
        Func<TResult> onQar,
        Func<TResult> onRon,
        Func<TResult> onRsd,
        Func<TResult> onRub,
        Func<TResult> onRwf,
        Func<TResult> onSar,
        Func<TResult> onSbd,
        Func<TResult> onScr,
        Func<TResult> onSdg,
        Func<TResult> onSek,
        Func<TResult> onSgd,
        Func<TResult> onShp,
        Func<TResult> onSle,
        Func<TResult> onSll,
        Func<TResult> onSos,
        Func<TResult> onSpl,
        Func<TResult> onSrd,
        Func<TResult> onStn,
        Func<TResult> onSvc,
        Func<TResult> onSyp,
        Func<TResult> onSzl,
        Func<TResult> onThb,
        Func<TResult> onTjs,
        Func<TResult> onTmt,
        Func<TResult> onTnd,
        Func<TResult> onTop,
        Func<TResult> onTry,
        Func<TResult> onTtd,
        Func<TResult> onTvd,
        Func<TResult> onTwd,
        Func<TResult> onTzs,
        Func<TResult> onUah,
        Func<TResult> onUgx,
        Func<TResult> onUsd,
        Func<TResult> onUyu,
        Func<TResult> onUzs,
        Func<TResult> onVef,
        Func<TResult> onVnd,
        Func<TResult> onVuv,
        Func<TResult> onWst,
        Func<TResult> onXaf,
        Func<TResult> onXcd,
        Func<TResult> onXdr,
        Func<TResult> onXof,
        Func<TResult> onXpf,
        Func<TResult> onYer,
        Func<TResult> onZar,
        Func<TResult> onZmw,
        Func<TResult> onZwd,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aed => onAed(),
            _ when this == Afn => onAfn(),
            _ when this == All => onAll(),
            _ when this == Amd => onAmd(),
            _ when this == Ang => onAng(),
            _ when this == Aoa => onAoa(),
            _ when this == Ars => onArs(),
            _ when this == Aud => onAud(),
            _ when this == Awg => onAwg(),
            _ when this == Azn => onAzn(),
            _ when this == Bam => onBam(),
            _ when this == Bbd => onBbd(),
            _ when this == Bdt => onBdt(),
            _ when this == Bgn => onBgn(),
            _ when this == Bhd => onBhd(),
            _ when this == Bif => onBif(),
            _ when this == Bmd => onBmd(),
            _ when this == Bnd => onBnd(),
            _ when this == Bob => onBob(),
            _ when this == Brl => onBrl(),
            _ when this == Bsd => onBsd(),
            _ when this == Btn => onBtn(),
            _ when this == Bwp => onBwp(),
            _ when this == Byn => onByn(),
            _ when this == Bzd => onBzd(),
            _ when this == Cad => onCad(),
            _ when this == Cdf => onCdf(),
            _ when this == Chf => onChf(),
            _ when this == Clp => onClp(),
            _ when this == Cny => onCny(),
            _ when this == Cop => onCop(),
            _ when this == Crc => onCrc(),
            _ when this == Cuc => onCuc(),
            _ when this == Cup => onCup(),
            _ when this == Cve => onCve(),
            _ when this == Czk => onCzk(),
            _ when this == Djf => onDjf(),
            _ when this == Dkk => onDkk(),
            _ when this == Dop => onDop(),
            _ when this == Dzd => onDzd(),
            _ when this == Egp => onEgp(),
            _ when this == Ern => onErn(),
            _ when this == Etb => onEtb(),
            _ when this == Eur => onEur(),
            _ when this == Fjd => onFjd(),
            _ when this == Fkp => onFkp(),
            _ when this == Gbp => onGbp(),
            _ when this == Gel => onGel(),
            _ when this == Ggp => onGgp(),
            _ when this == Ghs => onGhs(),
            _ when this == Gip => onGip(),
            _ when this == Gmd => onGmd(),
            _ when this == Gnf => onGnf(),
            _ when this == Gtq => onGtq(),
            _ when this == Gyd => onGyd(),
            _ when this == Hkd => onHkd(),
            _ when this == Hnl => onHnl(),
            _ when this == Hrk => onHrk(),
            _ when this == Htg => onHtg(),
            _ when this == Huf => onHuf(),
            _ when this == Idr => onIdr(),
            _ when this == Ils => onIls(),
            _ when this == Imp => onImp(),
            _ when this == Inr => onInr(),
            _ when this == Iqd => onIqd(),
            _ when this == Irr => onIrr(),
            _ when this == Isk => onIsk(),
            _ when this == Jep => onJep(),
            _ when this == Jmd => onJmd(),
            _ when this == Jod => onJod(),
            _ when this == Jpy => onJpy(),
            _ when this == Kes => onKes(),
            _ when this == Kgs => onKgs(),
            _ when this == Khr => onKhr(),
            _ when this == Kmf => onKmf(),
            _ when this == Kpw => onKpw(),
            _ when this == Krw => onKrw(),
            _ when this == Kwd => onKwd(),
            _ when this == Kyd => onKyd(),
            _ when this == Kzt => onKzt(),
            _ when this == Lak => onLak(),
            _ when this == Lbp => onLbp(),
            _ when this == Lkr => onLkr(),
            _ when this == Lrd => onLrd(),
            _ when this == Lsl => onLsl(),
            _ when this == Lyd => onLyd(),
            _ when this == Mad => onMad(),
            _ when this == Mdl => onMdl(),
            _ when this == Mga => onMga(),
            _ when this == Mkd => onMkd(),
            _ when this == Mmk => onMmk(),
            _ when this == Mnt => onMnt(),
            _ when this == Mop => onMop(),
            _ when this == Mru => onMru(),
            _ when this == Mur => onMur(),
            _ when this == Mvr => onMvr(),
            _ when this == Mwk => onMwk(),
            _ when this == Mxn => onMxn(),
            _ when this == Myr => onMyr(),
            _ when this == Mzn => onMzn(),
            _ when this == Nad => onNad(),
            _ when this == Ngn => onNgn(),
            _ when this == Nio => onNio(),
            _ when this == Nok => onNok(),
            _ when this == Npr => onNpr(),
            _ when this == Nzd => onNzd(),
            _ when this == Omr => onOmr(),
            _ when this == Pab => onPab(),
            _ when this == Pen => onPen(),
            _ when this == Pgk => onPgk(),
            _ when this == Php => onPhp(),
            _ when this == Pkr => onPkr(),
            _ when this == Pln => onPln(),
            _ when this == Pyg => onPyg(),
            _ when this == Qar => onQar(),
            _ when this == Ron => onRon(),
            _ when this == Rsd => onRsd(),
            _ when this == Rub => onRub(),
            _ when this == Rwf => onRwf(),
            _ when this == Sar => onSar(),
            _ when this == Sbd => onSbd(),
            _ when this == Scr => onScr(),
            _ when this == Sdg => onSdg(),
            _ when this == Sek => onSek(),
            _ when this == Sgd => onSgd(),
            _ when this == Shp => onShp(),
            _ when this == Sle => onSle(),
            _ when this == Sll => onSll(),
            _ when this == Sos => onSos(),
            _ when this == Spl => onSpl(),
            _ when this == Srd => onSrd(),
            _ when this == Stn => onStn(),
            _ when this == Svc => onSvc(),
            _ when this == Syp => onSyp(),
            _ when this == Szl => onSzl(),
            _ when this == Thb => onThb(),
            _ when this == Tjs => onTjs(),
            _ when this == Tmt => onTmt(),
            _ when this == Tnd => onTnd(),
            _ when this == Top => onTop(),
            _ when this == Try => onTry(),
            _ when this == Ttd => onTtd(),
            _ when this == Tvd => onTvd(),
            _ when this == Twd => onTwd(),
            _ when this == Tzs => onTzs(),
            _ when this == Uah => onUah(),
            _ when this == Ugx => onUgx(),
            _ when this == Usd => onUsd(),
            _ when this == Uyu => onUyu(),
            _ when this == Uzs => onUzs(),
            _ when this == Vef => onVef(),
            _ when this == Vnd => onVnd(),
            _ when this == Vuv => onVuv(),
            _ when this == Wst => onWst(),
            _ when this == Xaf => onXaf(),
            _ when this == Xcd => onXcd(),
            _ when this == Xdr => onXdr(),
            _ when this == Xof => onXof(),
            _ when this == Xpf => onXpf(),
            _ when this == Yer => onYer(),
            _ when this == Zar => onZar(),
            _ when this == Zmw => onZmw(),
            _ when this == Zwd => onZwd(),
            _ => otherwise(Value)
        };

    public void Match(Action onAed,
        Action onAfn,
        Action onAll,
        Action onAmd,
        Action onAng,
        Action onAoa,
        Action onArs,
        Action onAud,
        Action onAwg,
        Action onAzn,
        Action onBam,
        Action onBbd,
        Action onBdt,
        Action onBgn,
        Action onBhd,
        Action onBif,
        Action onBmd,
        Action onBnd,
        Action onBob,
        Action onBrl,
        Action onBsd,
        Action onBtn,
        Action onBwp,
        Action onByn,
        Action onBzd,
        Action onCad,
        Action onCdf,
        Action onChf,
        Action onClp,
        Action onCny,
        Action onCop,
        Action onCrc,
        Action onCuc,
        Action onCup,
        Action onCve,
        Action onCzk,
        Action onDjf,
        Action onDkk,
        Action onDop,
        Action onDzd,
        Action onEgp,
        Action onErn,
        Action onEtb,
        Action onEur,
        Action onFjd,
        Action onFkp,
        Action onGbp,
        Action onGel,
        Action onGgp,
        Action onGhs,
        Action onGip,
        Action onGmd,
        Action onGnf,
        Action onGtq,
        Action onGyd,
        Action onHkd,
        Action onHnl,
        Action onHrk,
        Action onHtg,
        Action onHuf,
        Action onIdr,
        Action onIls,
        Action onImp,
        Action onInr,
        Action onIqd,
        Action onIrr,
        Action onIsk,
        Action onJep,
        Action onJmd,
        Action onJod,
        Action onJpy,
        Action onKes,
        Action onKgs,
        Action onKhr,
        Action onKmf,
        Action onKpw,
        Action onKrw,
        Action onKwd,
        Action onKyd,
        Action onKzt,
        Action onLak,
        Action onLbp,
        Action onLkr,
        Action onLrd,
        Action onLsl,
        Action onLyd,
        Action onMad,
        Action onMdl,
        Action onMga,
        Action onMkd,
        Action onMmk,
        Action onMnt,
        Action onMop,
        Action onMru,
        Action onMur,
        Action onMvr,
        Action onMwk,
        Action onMxn,
        Action onMyr,
        Action onMzn,
        Action onNad,
        Action onNgn,
        Action onNio,
        Action onNok,
        Action onNpr,
        Action onNzd,
        Action onOmr,
        Action onPab,
        Action onPen,
        Action onPgk,
        Action onPhp,
        Action onPkr,
        Action onPln,
        Action onPyg,
        Action onQar,
        Action onRon,
        Action onRsd,
        Action onRub,
        Action onRwf,
        Action onSar,
        Action onSbd,
        Action onScr,
        Action onSdg,
        Action onSek,
        Action onSgd,
        Action onShp,
        Action onSle,
        Action onSll,
        Action onSos,
        Action onSpl,
        Action onSrd,
        Action onStn,
        Action onSvc,
        Action onSyp,
        Action onSzl,
        Action onThb,
        Action onTjs,
        Action onTmt,
        Action onTnd,
        Action onTop,
        Action onTry,
        Action onTtd,
        Action onTvd,
        Action onTwd,
        Action onTzs,
        Action onUah,
        Action onUgx,
        Action onUsd,
        Action onUyu,
        Action onUzs,
        Action onVef,
        Action onVnd,
        Action onVuv,
        Action onWst,
        Action onXaf,
        Action onXcd,
        Action onXdr,
        Action onXof,
        Action onXpf,
        Action onYer,
        Action onZar,
        Action onZmw,
        Action onZwd,
        Action<string> otherwise)
    {
        if (this == Aed) onAed();
        else if (this == Afn) onAfn();
        else if (this == All) onAll();
        else if (this == Amd) onAmd();
        else if (this == Ang) onAng();
        else if (this == Aoa) onAoa();
        else if (this == Ars) onArs();
        else if (this == Aud) onAud();
        else if (this == Awg) onAwg();
        else if (this == Azn) onAzn();
        else if (this == Bam) onBam();
        else if (this == Bbd) onBbd();
        else if (this == Bdt) onBdt();
        else if (this == Bgn) onBgn();
        else if (this == Bhd) onBhd();
        else if (this == Bif) onBif();
        else if (this == Bmd) onBmd();
        else if (this == Bnd) onBnd();
        else if (this == Bob) onBob();
        else if (this == Brl) onBrl();
        else if (this == Bsd) onBsd();
        else if (this == Btn) onBtn();
        else if (this == Bwp) onBwp();
        else if (this == Byn) onByn();
        else if (this == Bzd) onBzd();
        else if (this == Cad) onCad();
        else if (this == Cdf) onCdf();
        else if (this == Chf) onChf();
        else if (this == Clp) onClp();
        else if (this == Cny) onCny();
        else if (this == Cop) onCop();
        else if (this == Crc) onCrc();
        else if (this == Cuc) onCuc();
        else if (this == Cup) onCup();
        else if (this == Cve) onCve();
        else if (this == Czk) onCzk();
        else if (this == Djf) onDjf();
        else if (this == Dkk) onDkk();
        else if (this == Dop) onDop();
        else if (this == Dzd) onDzd();
        else if (this == Egp) onEgp();
        else if (this == Ern) onErn();
        else if (this == Etb) onEtb();
        else if (this == Eur) onEur();
        else if (this == Fjd) onFjd();
        else if (this == Fkp) onFkp();
        else if (this == Gbp) onGbp();
        else if (this == Gel) onGel();
        else if (this == Ggp) onGgp();
        else if (this == Ghs) onGhs();
        else if (this == Gip) onGip();
        else if (this == Gmd) onGmd();
        else if (this == Gnf) onGnf();
        else if (this == Gtq) onGtq();
        else if (this == Gyd) onGyd();
        else if (this == Hkd) onHkd();
        else if (this == Hnl) onHnl();
        else if (this == Hrk) onHrk();
        else if (this == Htg) onHtg();
        else if (this == Huf) onHuf();
        else if (this == Idr) onIdr();
        else if (this == Ils) onIls();
        else if (this == Imp) onImp();
        else if (this == Inr) onInr();
        else if (this == Iqd) onIqd();
        else if (this == Irr) onIrr();
        else if (this == Isk) onIsk();
        else if (this == Jep) onJep();
        else if (this == Jmd) onJmd();
        else if (this == Jod) onJod();
        else if (this == Jpy) onJpy();
        else if (this == Kes) onKes();
        else if (this == Kgs) onKgs();
        else if (this == Khr) onKhr();
        else if (this == Kmf) onKmf();
        else if (this == Kpw) onKpw();
        else if (this == Krw) onKrw();
        else if (this == Kwd) onKwd();
        else if (this == Kyd) onKyd();
        else if (this == Kzt) onKzt();
        else if (this == Lak) onLak();
        else if (this == Lbp) onLbp();
        else if (this == Lkr) onLkr();
        else if (this == Lrd) onLrd();
        else if (this == Lsl) onLsl();
        else if (this == Lyd) onLyd();
        else if (this == Mad) onMad();
        else if (this == Mdl) onMdl();
        else if (this == Mga) onMga();
        else if (this == Mkd) onMkd();
        else if (this == Mmk) onMmk();
        else if (this == Mnt) onMnt();
        else if (this == Mop) onMop();
        else if (this == Mru) onMru();
        else if (this == Mur) onMur();
        else if (this == Mvr) onMvr();
        else if (this == Mwk) onMwk();
        else if (this == Mxn) onMxn();
        else if (this == Myr) onMyr();
        else if (this == Mzn) onMzn();
        else if (this == Nad) onNad();
        else if (this == Ngn) onNgn();
        else if (this == Nio) onNio();
        else if (this == Nok) onNok();
        else if (this == Npr) onNpr();
        else if (this == Nzd) onNzd();
        else if (this == Omr) onOmr();
        else if (this == Pab) onPab();
        else if (this == Pen) onPen();
        else if (this == Pgk) onPgk();
        else if (this == Php) onPhp();
        else if (this == Pkr) onPkr();
        else if (this == Pln) onPln();
        else if (this == Pyg) onPyg();
        else if (this == Qar) onQar();
        else if (this == Ron) onRon();
        else if (this == Rsd) onRsd();
        else if (this == Rub) onRub();
        else if (this == Rwf) onRwf();
        else if (this == Sar) onSar();
        else if (this == Sbd) onSbd();
        else if (this == Scr) onScr();
        else if (this == Sdg) onSdg();
        else if (this == Sek) onSek();
        else if (this == Sgd) onSgd();
        else if (this == Shp) onShp();
        else if (this == Sle) onSle();
        else if (this == Sll) onSll();
        else if (this == Sos) onSos();
        else if (this == Spl) onSpl();
        else if (this == Srd) onSrd();
        else if (this == Stn) onStn();
        else if (this == Svc) onSvc();
        else if (this == Syp) onSyp();
        else if (this == Szl) onSzl();
        else if (this == Thb) onThb();
        else if (this == Tjs) onTjs();
        else if (this == Tmt) onTmt();
        else if (this == Tnd) onTnd();
        else if (this == Top) onTop();
        else if (this == Try) onTry();
        else if (this == Ttd) onTtd();
        else if (this == Tvd) onTvd();
        else if (this == Twd) onTwd();
        else if (this == Tzs) onTzs();
        else if (this == Uah) onUah();
        else if (this == Ugx) onUgx();
        else if (this == Usd) onUsd();
        else if (this == Uyu) onUyu();
        else if (this == Uzs) onUzs();
        else if (this == Vef) onVef();
        else if (this == Vnd) onVnd();
        else if (this == Vuv) onVuv();
        else if (this == Wst) onWst();
        else if (this == Xaf) onXaf();
        else if (this == Xcd) onXcd();
        else if (this == Xdr) onXdr();
        else if (this == Xof) onXof();
        else if (this == Xpf) onXpf();
        else if (this == Yer) onYer();
        else if (this == Zar) onZar();
        else if (this == Zmw) onZmw();
        else if (this == Zwd) onZwd();
        else otherwise(Value);
    }
}
