using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The Alpha-3 Code of the country the card was issued in.
/// <para>
/// In addition, the following values are possible:
/// </para>
/// <list type="bullet">
///   <item><description><c>NON_USA</c> - The card was issued outside of the United States.</description></item>
///   <item><description><c>UNKNOWN</c> - The processor did not return an issuer country for this particular BIN.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IssuerCountry>))]
public sealed record IssuerCountry : OpenStringEnum<IssuerCountry>
{
    private IssuerCountry(string value) : base(value)
    {
    }

    public static readonly IssuerCountry Abw = new("ABW");

    public static readonly IssuerCountry Afg = new("AFG");

    public static readonly IssuerCountry Ago = new("AGO");

    public static readonly IssuerCountry Aia = new("AIA");

    public static readonly IssuerCountry Ala = new("ALA");

    public static readonly IssuerCountry Alb = new("ALB");

    public static readonly IssuerCountry And = new("AND");

    public static readonly IssuerCountry Are = new("ARE");

    public static readonly IssuerCountry Arg = new("ARG");

    public static readonly IssuerCountry Arm = new("ARM");

    public static readonly IssuerCountry Asm = new("ASM");

    public static readonly IssuerCountry Ata = new("ATA");

    public static readonly IssuerCountry Atf = new("ATF");

    public static readonly IssuerCountry Atg = new("ATG");

    public static readonly IssuerCountry Aus = new("AUS");

    public static readonly IssuerCountry Aut = new("AUT");

    public static readonly IssuerCountry Aze = new("AZE");

    public static readonly IssuerCountry Bdi = new("BDI");

    public static readonly IssuerCountry Bel = new("BEL");

    public static readonly IssuerCountry Ben = new("BEN");

    public static readonly IssuerCountry Bes = new("BES");

    public static readonly IssuerCountry Bfa = new("BFA");

    public static readonly IssuerCountry Bgd = new("BGD");

    public static readonly IssuerCountry Bgr = new("BGR");

    public static readonly IssuerCountry Bhr = new("BHR");

    public static readonly IssuerCountry Bhs = new("BHS");

    public static readonly IssuerCountry Bih = new("BIH");

    public static readonly IssuerCountry Blm = new("BLM");

    public static readonly IssuerCountry Blr = new("BLR");

    public static readonly IssuerCountry Blz = new("BLZ");

    public static readonly IssuerCountry Bmu = new("BMU");

    public static readonly IssuerCountry Bol = new("BOL");

    public static readonly IssuerCountry Bra = new("BRA");

    public static readonly IssuerCountry Brb = new("BRB");

    public static readonly IssuerCountry Brn = new("BRN");

    public static readonly IssuerCountry Btn = new("BTN");

    public static readonly IssuerCountry Bvt = new("BVT");

    public static readonly IssuerCountry Bwa = new("BWA");

    public static readonly IssuerCountry Caf = new("CAF");

    public static readonly IssuerCountry Can = new("CAN");

    public static readonly IssuerCountry Cck = new("CCK");

    public static readonly IssuerCountry Che = new("CHE");

    public static readonly IssuerCountry Chl = new("CHL");

    public static readonly IssuerCountry Chn = new("CHN");

    public static readonly IssuerCountry Civ = new("CIV");

    public static readonly IssuerCountry Cmr = new("CMR");

    public static readonly IssuerCountry Cod = new("COD");

    public static readonly IssuerCountry Cog = new("COG");

    public static readonly IssuerCountry Cok = new("COK");

    public static readonly IssuerCountry Col = new("COL");

    public static readonly IssuerCountry Com = new("COM");

    public static readonly IssuerCountry Cpv = new("CPV");

    public static readonly IssuerCountry Cri = new("CRI");

    public static readonly IssuerCountry Cub = new("CUB");

    public static readonly IssuerCountry Cuw = new("CUW");

    public static readonly IssuerCountry Cxr = new("CXR");

    public static readonly IssuerCountry Cym = new("CYM");

    public static readonly IssuerCountry Cyp = new("CYP");

    public static readonly IssuerCountry Cze = new("CZE");

    public static readonly IssuerCountry Deu = new("DEU");

    public static readonly IssuerCountry Dji = new("DJI");

    public static readonly IssuerCountry Dma = new("DMA");

    public static readonly IssuerCountry Dnk = new("DNK");

    public static readonly IssuerCountry Dom = new("DOM");

    public static readonly IssuerCountry Dza = new("DZA");

    public static readonly IssuerCountry Ecu = new("ECU");

    public static readonly IssuerCountry Egy = new("EGY");

    public static readonly IssuerCountry Eri = new("ERI");

    public static readonly IssuerCountry Esh = new("ESH");

    public static readonly IssuerCountry Esp = new("ESP");

    public static readonly IssuerCountry Est = new("EST");

    public static readonly IssuerCountry Eth = new("ETH");

    public static readonly IssuerCountry Fin = new("FIN");

    public static readonly IssuerCountry Fji = new("FJI");

    public static readonly IssuerCountry Flk = new("FLK");

    public static readonly IssuerCountry Fra = new("FRA");

    public static readonly IssuerCountry Fro = new("FRO");

    public static readonly IssuerCountry Fsm = new("FSM");

    public static readonly IssuerCountry Gab = new("GAB");

    public static readonly IssuerCountry Gbr = new("GBR");

    public static readonly IssuerCountry Geo = new("GEO");

    public static readonly IssuerCountry Ggy = new("GGY");

    public static readonly IssuerCountry Gha = new("GHA");

    public static readonly IssuerCountry Gib = new("GIB");

    public static readonly IssuerCountry Gin = new("GIN");

    public static readonly IssuerCountry Glp = new("GLP");

    public static readonly IssuerCountry Gmb = new("GMB");

    public static readonly IssuerCountry Gnb = new("GNB");

    public static readonly IssuerCountry Gnq = new("GNQ");

    public static readonly IssuerCountry Grc = new("GRC");

    public static readonly IssuerCountry Grd = new("GRD");

    public static readonly IssuerCountry Grl = new("GRL");

    public static readonly IssuerCountry Gtm = new("GTM");

    public static readonly IssuerCountry Guf = new("GUF");

    public static readonly IssuerCountry Gum = new("GUM");

    public static readonly IssuerCountry Guy = new("GUY");

    public static readonly IssuerCountry Hkg = new("HKG");

    public static readonly IssuerCountry Hmd = new("HMD");

    public static readonly IssuerCountry Hnd = new("HND");

    public static readonly IssuerCountry Hrv = new("HRV");

    public static readonly IssuerCountry Hti = new("HTI");

    public static readonly IssuerCountry Hun = new("HUN");

    public static readonly IssuerCountry Idn = new("IDN");

    public static readonly IssuerCountry Imn = new("IMN");

    public static readonly IssuerCountry Ind = new("IND");

    public static readonly IssuerCountry Iot = new("IOT");

    public static readonly IssuerCountry Irl = new("IRL");

    public static readonly IssuerCountry Irn = new("IRN");

    public static readonly IssuerCountry Irq = new("IRQ");

    public static readonly IssuerCountry Isl = new("ISL");

    public static readonly IssuerCountry Isr = new("ISR");

    public static readonly IssuerCountry Ita = new("ITA");

    public static readonly IssuerCountry Jam = new("JAM");

    public static readonly IssuerCountry Jey = new("JEY");

    public static readonly IssuerCountry Jor = new("JOR");

    public static readonly IssuerCountry Jpn = new("JPN");

    public static readonly IssuerCountry Kaz = new("KAZ");

    public static readonly IssuerCountry Ken = new("KEN");

    public static readonly IssuerCountry Kgz = new("KGZ");

    public static readonly IssuerCountry Khm = new("KHM");

    public static readonly IssuerCountry Kir = new("KIR");

    public static readonly IssuerCountry Kna = new("KNA");

    public static readonly IssuerCountry Kor = new("KOR");

    public static readonly IssuerCountry Kwt = new("KWT");

    public static readonly IssuerCountry Lao = new("LAO");

    public static readonly IssuerCountry Lbn = new("LBN");

    public static readonly IssuerCountry Lbr = new("LBR");

    public static readonly IssuerCountry Lby = new("LBY");

    public static readonly IssuerCountry Lca = new("LCA");

    public static readonly IssuerCountry Lie = new("LIE");

    public static readonly IssuerCountry Lka = new("LKA");

    public static readonly IssuerCountry Lso = new("LSO");

    public static readonly IssuerCountry Ltu = new("LTU");

    public static readonly IssuerCountry Lux = new("LUX");

    public static readonly IssuerCountry Lva = new("LVA");

    public static readonly IssuerCountry Mac = new("MAC");

    public static readonly IssuerCountry Maf = new("MAF");

    public static readonly IssuerCountry Mar = new("MAR");

    public static readonly IssuerCountry Mco = new("MCO");

    public static readonly IssuerCountry Mda = new("MDA");

    public static readonly IssuerCountry Mdg = new("MDG");

    public static readonly IssuerCountry Mdv = new("MDV");

    public static readonly IssuerCountry Mex = new("MEX");

    public static readonly IssuerCountry Mhl = new("MHL");

    public static readonly IssuerCountry Mkd = new("MKD");

    public static readonly IssuerCountry Mli = new("MLI");

    public static readonly IssuerCountry Mlt = new("MLT");

    public static readonly IssuerCountry Mmr = new("MMR");

    public static readonly IssuerCountry Mne = new("MNE");

    public static readonly IssuerCountry Mng = new("MNG");

    public static readonly IssuerCountry Mnp = new("MNP");

    public static readonly IssuerCountry Moz = new("MOZ");

    public static readonly IssuerCountry Mrt = new("MRT");

    public static readonly IssuerCountry Msr = new("MSR");

    public static readonly IssuerCountry Mtq = new("MTQ");

    public static readonly IssuerCountry Mus = new("MUS");

    public static readonly IssuerCountry Mwi = new("MWI");

    public static readonly IssuerCountry Mys = new("MYS");

    public static readonly IssuerCountry Myt = new("MYT");

    public static readonly IssuerCountry Nam = new("NAM");

    public static readonly IssuerCountry Ncl = new("NCL");

    public static readonly IssuerCountry Ner = new("NER");

    public static readonly IssuerCountry Nfk = new("NFK");

    public static readonly IssuerCountry Nga = new("NGA");

    public static readonly IssuerCountry Nic = new("NIC");

    public static readonly IssuerCountry Niu = new("NIU");

    public static readonly IssuerCountry Nld = new("NLD");

    public static readonly IssuerCountry NonUsa = new("NON_USA");

    public static readonly IssuerCountry Nor = new("NOR");

    public static readonly IssuerCountry Npl = new("NPL");

    public static readonly IssuerCountry Nru = new("NRU");

    public static readonly IssuerCountry Nzl = new("NZL");

    public static readonly IssuerCountry Omn = new("OMN");

    public static readonly IssuerCountry Pak = new("PAK");

    public static readonly IssuerCountry Pan = new("PAN");

    public static readonly IssuerCountry Pcn = new("PCN");

    public static readonly IssuerCountry Per = new("PER");

    public static readonly IssuerCountry Phl = new("PHL");

    public static readonly IssuerCountry Plw = new("PLW");

    public static readonly IssuerCountry Png = new("PNG");

    public static readonly IssuerCountry Pol = new("POL");

    public static readonly IssuerCountry Pri = new("PRI");

    public static readonly IssuerCountry Prk = new("PRK");

    public static readonly IssuerCountry Prt = new("PRT");

    public static readonly IssuerCountry Pry = new("PRY");

    public static readonly IssuerCountry Pse = new("PSE");

    public static readonly IssuerCountry Pyf = new("PYF");

    public static readonly IssuerCountry Qat = new("QAT");

    public static readonly IssuerCountry Reu = new("REU");

    public static readonly IssuerCountry Rou = new("ROU");

    public static readonly IssuerCountry Rus = new("RUS");

    public static readonly IssuerCountry Rwa = new("RWA");

    public static readonly IssuerCountry Sau = new("SAU");

    public static readonly IssuerCountry Sdn = new("SDN");

    public static readonly IssuerCountry Sen = new("SEN");

    public static readonly IssuerCountry Sgp = new("SGP");

    public static readonly IssuerCountry Sgs = new("SGS");

    public static readonly IssuerCountry Shn = new("SHN");

    public static readonly IssuerCountry Sjm = new("SJM");

    public static readonly IssuerCountry Slb = new("SLB");

    public static readonly IssuerCountry Sle = new("SLE");

    public static readonly IssuerCountry Slv = new("SLV");

    public static readonly IssuerCountry Smr = new("SMR");

    public static readonly IssuerCountry Som = new("SOM");

    public static readonly IssuerCountry Spm = new("SPM");

    public static readonly IssuerCountry Srb = new("SRB");

    public static readonly IssuerCountry Ssd = new("SSD");

    public static readonly IssuerCountry Stp = new("STP");

    public static readonly IssuerCountry Sur = new("SUR");

    public static readonly IssuerCountry Svk = new("SVK");

    public static readonly IssuerCountry Svn = new("SVN");

    public static readonly IssuerCountry Swe = new("SWE");

    public static readonly IssuerCountry Swz = new("SWZ");

    public static readonly IssuerCountry Sxm = new("SXM");

    public static readonly IssuerCountry Syc = new("SYC");

    public static readonly IssuerCountry Syr = new("SYR");

    public static readonly IssuerCountry Tca = new("TCA");

    public static readonly IssuerCountry Tcd = new("TCD");

    public static readonly IssuerCountry Tgo = new("TGO");

    public static readonly IssuerCountry Tha = new("THA");

    public static readonly IssuerCountry Tjk = new("TJK");

    public static readonly IssuerCountry Tkl = new("TKL");

    public static readonly IssuerCountry Tkm = new("TKM");

    public static readonly IssuerCountry Tls = new("TLS");

    public static readonly IssuerCountry Ton = new("TON");

    public static readonly IssuerCountry Tto = new("TTO");

    public static readonly IssuerCountry Tun = new("TUN");

    public static readonly IssuerCountry Tur = new("TUR");

    public static readonly IssuerCountry Tuv = new("TUV");

    public static readonly IssuerCountry Twn = new("TWN");

    public static readonly IssuerCountry Tza = new("TZA");

    public static readonly IssuerCountry Uga = new("UGA");

    public static readonly IssuerCountry Ukr = new("UKR");

    public static readonly IssuerCountry Umi = new("UMI");

    public static readonly IssuerCountry Unknown = new("UNKNOWN");

    public static readonly IssuerCountry Ury = new("URY");

    public static readonly IssuerCountry Usa = new("USA");

    public static readonly IssuerCountry Uzb = new("UZB");

    public static readonly IssuerCountry Vat = new("VAT");

    public static readonly IssuerCountry Vct = new("VCT");

    public static readonly IssuerCountry Ven = new("VEN");

    public static readonly IssuerCountry Vgb = new("VGB");

    public static readonly IssuerCountry Vir = new("VIR");

    public static readonly IssuerCountry Vnm = new("VNM");

    public static readonly IssuerCountry Vut = new("VUT");

    public static readonly IssuerCountry Wlf = new("WLF");

    public static readonly IssuerCountry Wsm = new("WSM");

    public static readonly IssuerCountry Yem = new("YEM");

    public static readonly IssuerCountry Zaf = new("ZAF");

    public static readonly IssuerCountry Zmb = new("ZMB");

    public static readonly IssuerCountry Zwe = new("ZWE");

    public TResult Match<TResult>(Func<TResult> onAbw,
        Func<TResult> onAfg,
        Func<TResult> onAgo,
        Func<TResult> onAia,
        Func<TResult> onAla,
        Func<TResult> onAlb,
        Func<TResult> onAnd,
        Func<TResult> onAre,
        Func<TResult> onArg,
        Func<TResult> onArm,
        Func<TResult> onAsm,
        Func<TResult> onAta,
        Func<TResult> onAtf,
        Func<TResult> onAtg,
        Func<TResult> onAus,
        Func<TResult> onAut,
        Func<TResult> onAze,
        Func<TResult> onBdi,
        Func<TResult> onBel,
        Func<TResult> onBen,
        Func<TResult> onBes,
        Func<TResult> onBfa,
        Func<TResult> onBgd,
        Func<TResult> onBgr,
        Func<TResult> onBhr,
        Func<TResult> onBhs,
        Func<TResult> onBih,
        Func<TResult> onBlm,
        Func<TResult> onBlr,
        Func<TResult> onBlz,
        Func<TResult> onBmu,
        Func<TResult> onBol,
        Func<TResult> onBra,
        Func<TResult> onBrb,
        Func<TResult> onBrn,
        Func<TResult> onBtn,
        Func<TResult> onBvt,
        Func<TResult> onBwa,
        Func<TResult> onCaf,
        Func<TResult> onCan,
        Func<TResult> onCck,
        Func<TResult> onChe,
        Func<TResult> onChl,
        Func<TResult> onChn,
        Func<TResult> onCiv,
        Func<TResult> onCmr,
        Func<TResult> onCod,
        Func<TResult> onCog,
        Func<TResult> onCok,
        Func<TResult> onCol,
        Func<TResult> onCom,
        Func<TResult> onCpv,
        Func<TResult> onCri,
        Func<TResult> onCub,
        Func<TResult> onCuw,
        Func<TResult> onCxr,
        Func<TResult> onCym,
        Func<TResult> onCyp,
        Func<TResult> onCze,
        Func<TResult> onDeu,
        Func<TResult> onDji,
        Func<TResult> onDma,
        Func<TResult> onDnk,
        Func<TResult> onDom,
        Func<TResult> onDza,
        Func<TResult> onEcu,
        Func<TResult> onEgy,
        Func<TResult> onEri,
        Func<TResult> onEsh,
        Func<TResult> onEsp,
        Func<TResult> onEst,
        Func<TResult> onEth,
        Func<TResult> onFin,
        Func<TResult> onFji,
        Func<TResult> onFlk,
        Func<TResult> onFra,
        Func<TResult> onFro,
        Func<TResult> onFsm,
        Func<TResult> onGab,
        Func<TResult> onGbr,
        Func<TResult> onGeo,
        Func<TResult> onGgy,
        Func<TResult> onGha,
        Func<TResult> onGib,
        Func<TResult> onGin,
        Func<TResult> onGlp,
        Func<TResult> onGmb,
        Func<TResult> onGnb,
        Func<TResult> onGnq,
        Func<TResult> onGrc,
        Func<TResult> onGrd,
        Func<TResult> onGrl,
        Func<TResult> onGtm,
        Func<TResult> onGuf,
        Func<TResult> onGum,
        Func<TResult> onGuy,
        Func<TResult> onHkg,
        Func<TResult> onHmd,
        Func<TResult> onHnd,
        Func<TResult> onHrv,
        Func<TResult> onHti,
        Func<TResult> onHun,
        Func<TResult> onIdn,
        Func<TResult> onImn,
        Func<TResult> onInd,
        Func<TResult> onIot,
        Func<TResult> onIrl,
        Func<TResult> onIrn,
        Func<TResult> onIrq,
        Func<TResult> onIsl,
        Func<TResult> onIsr,
        Func<TResult> onIta,
        Func<TResult> onJam,
        Func<TResult> onJey,
        Func<TResult> onJor,
        Func<TResult> onJpn,
        Func<TResult> onKaz,
        Func<TResult> onKen,
        Func<TResult> onKgz,
        Func<TResult> onKhm,
        Func<TResult> onKir,
        Func<TResult> onKna,
        Func<TResult> onKor,
        Func<TResult> onKwt,
        Func<TResult> onLao,
        Func<TResult> onLbn,
        Func<TResult> onLbr,
        Func<TResult> onLby,
        Func<TResult> onLca,
        Func<TResult> onLie,
        Func<TResult> onLka,
        Func<TResult> onLso,
        Func<TResult> onLtu,
        Func<TResult> onLux,
        Func<TResult> onLva,
        Func<TResult> onMac,
        Func<TResult> onMaf,
        Func<TResult> onMar,
        Func<TResult> onMco,
        Func<TResult> onMda,
        Func<TResult> onMdg,
        Func<TResult> onMdv,
        Func<TResult> onMex,
        Func<TResult> onMhl,
        Func<TResult> onMkd,
        Func<TResult> onMli,
        Func<TResult> onMlt,
        Func<TResult> onMmr,
        Func<TResult> onMne,
        Func<TResult> onMng,
        Func<TResult> onMnp,
        Func<TResult> onMoz,
        Func<TResult> onMrt,
        Func<TResult> onMsr,
        Func<TResult> onMtq,
        Func<TResult> onMus,
        Func<TResult> onMwi,
        Func<TResult> onMys,
        Func<TResult> onMyt,
        Func<TResult> onNam,
        Func<TResult> onNcl,
        Func<TResult> onNer,
        Func<TResult> onNfk,
        Func<TResult> onNga,
        Func<TResult> onNic,
        Func<TResult> onNiu,
        Func<TResult> onNld,
        Func<TResult> onNonUsa,
        Func<TResult> onNor,
        Func<TResult> onNpl,
        Func<TResult> onNru,
        Func<TResult> onNzl,
        Func<TResult> onOmn,
        Func<TResult> onPak,
        Func<TResult> onPan,
        Func<TResult> onPcn,
        Func<TResult> onPer,
        Func<TResult> onPhl,
        Func<TResult> onPlw,
        Func<TResult> onPng,
        Func<TResult> onPol,
        Func<TResult> onPri,
        Func<TResult> onPrk,
        Func<TResult> onPrt,
        Func<TResult> onPry,
        Func<TResult> onPse,
        Func<TResult> onPyf,
        Func<TResult> onQat,
        Func<TResult> onReu,
        Func<TResult> onRou,
        Func<TResult> onRus,
        Func<TResult> onRwa,
        Func<TResult> onSau,
        Func<TResult> onSdn,
        Func<TResult> onSen,
        Func<TResult> onSgp,
        Func<TResult> onSgs,
        Func<TResult> onShn,
        Func<TResult> onSjm,
        Func<TResult> onSlb,
        Func<TResult> onSle,
        Func<TResult> onSlv,
        Func<TResult> onSmr,
        Func<TResult> onSom,
        Func<TResult> onSpm,
        Func<TResult> onSrb,
        Func<TResult> onSsd,
        Func<TResult> onStp,
        Func<TResult> onSur,
        Func<TResult> onSvk,
        Func<TResult> onSvn,
        Func<TResult> onSwe,
        Func<TResult> onSwz,
        Func<TResult> onSxm,
        Func<TResult> onSyc,
        Func<TResult> onSyr,
        Func<TResult> onTca,
        Func<TResult> onTcd,
        Func<TResult> onTgo,
        Func<TResult> onTha,
        Func<TResult> onTjk,
        Func<TResult> onTkl,
        Func<TResult> onTkm,
        Func<TResult> onTls,
        Func<TResult> onTon,
        Func<TResult> onTto,
        Func<TResult> onTun,
        Func<TResult> onTur,
        Func<TResult> onTuv,
        Func<TResult> onTwn,
        Func<TResult> onTza,
        Func<TResult> onUga,
        Func<TResult> onUkr,
        Func<TResult> onUmi,
        Func<TResult> onUnknown,
        Func<TResult> onUry,
        Func<TResult> onUsa,
        Func<TResult> onUzb,
        Func<TResult> onVat,
        Func<TResult> onVct,
        Func<TResult> onVen,
        Func<TResult> onVgb,
        Func<TResult> onVir,
        Func<TResult> onVnm,
        Func<TResult> onVut,
        Func<TResult> onWlf,
        Func<TResult> onWsm,
        Func<TResult> onYem,
        Func<TResult> onZaf,
        Func<TResult> onZmb,
        Func<TResult> onZwe,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Abw => onAbw(),
            _ when this == Afg => onAfg(),
            _ when this == Ago => onAgo(),
            _ when this == Aia => onAia(),
            _ when this == Ala => onAla(),
            _ when this == Alb => onAlb(),
            _ when this == And => onAnd(),
            _ when this == Are => onAre(),
            _ when this == Arg => onArg(),
            _ when this == Arm => onArm(),
            _ when this == Asm => onAsm(),
            _ when this == Ata => onAta(),
            _ when this == Atf => onAtf(),
            _ when this == Atg => onAtg(),
            _ when this == Aus => onAus(),
            _ when this == Aut => onAut(),
            _ when this == Aze => onAze(),
            _ when this == Bdi => onBdi(),
            _ when this == Bel => onBel(),
            _ when this == Ben => onBen(),
            _ when this == Bes => onBes(),
            _ when this == Bfa => onBfa(),
            _ when this == Bgd => onBgd(),
            _ when this == Bgr => onBgr(),
            _ when this == Bhr => onBhr(),
            _ when this == Bhs => onBhs(),
            _ when this == Bih => onBih(),
            _ when this == Blm => onBlm(),
            _ when this == Blr => onBlr(),
            _ when this == Blz => onBlz(),
            _ when this == Bmu => onBmu(),
            _ when this == Bol => onBol(),
            _ when this == Bra => onBra(),
            _ when this == Brb => onBrb(),
            _ when this == Brn => onBrn(),
            _ when this == Btn => onBtn(),
            _ when this == Bvt => onBvt(),
            _ when this == Bwa => onBwa(),
            _ when this == Caf => onCaf(),
            _ when this == Can => onCan(),
            _ when this == Cck => onCck(),
            _ when this == Che => onChe(),
            _ when this == Chl => onChl(),
            _ when this == Chn => onChn(),
            _ when this == Civ => onCiv(),
            _ when this == Cmr => onCmr(),
            _ when this == Cod => onCod(),
            _ when this == Cog => onCog(),
            _ when this == Cok => onCok(),
            _ when this == Col => onCol(),
            _ when this == Com => onCom(),
            _ when this == Cpv => onCpv(),
            _ when this == Cri => onCri(),
            _ when this == Cub => onCub(),
            _ when this == Cuw => onCuw(),
            _ when this == Cxr => onCxr(),
            _ when this == Cym => onCym(),
            _ when this == Cyp => onCyp(),
            _ when this == Cze => onCze(),
            _ when this == Deu => onDeu(),
            _ when this == Dji => onDji(),
            _ when this == Dma => onDma(),
            _ when this == Dnk => onDnk(),
            _ when this == Dom => onDom(),
            _ when this == Dza => onDza(),
            _ when this == Ecu => onEcu(),
            _ when this == Egy => onEgy(),
            _ when this == Eri => onEri(),
            _ when this == Esh => onEsh(),
            _ when this == Esp => onEsp(),
            _ when this == Est => onEst(),
            _ when this == Eth => onEth(),
            _ when this == Fin => onFin(),
            _ when this == Fji => onFji(),
            _ when this == Flk => onFlk(),
            _ when this == Fra => onFra(),
            _ when this == Fro => onFro(),
            _ when this == Fsm => onFsm(),
            _ when this == Gab => onGab(),
            _ when this == Gbr => onGbr(),
            _ when this == Geo => onGeo(),
            _ when this == Ggy => onGgy(),
            _ when this == Gha => onGha(),
            _ when this == Gib => onGib(),
            _ when this == Gin => onGin(),
            _ when this == Glp => onGlp(),
            _ when this == Gmb => onGmb(),
            _ when this == Gnb => onGnb(),
            _ when this == Gnq => onGnq(),
            _ when this == Grc => onGrc(),
            _ when this == Grd => onGrd(),
            _ when this == Grl => onGrl(),
            _ when this == Gtm => onGtm(),
            _ when this == Guf => onGuf(),
            _ when this == Gum => onGum(),
            _ when this == Guy => onGuy(),
            _ when this == Hkg => onHkg(),
            _ when this == Hmd => onHmd(),
            _ when this == Hnd => onHnd(),
            _ when this == Hrv => onHrv(),
            _ when this == Hti => onHti(),
            _ when this == Hun => onHun(),
            _ when this == Idn => onIdn(),
            _ when this == Imn => onImn(),
            _ when this == Ind => onInd(),
            _ when this == Iot => onIot(),
            _ when this == Irl => onIrl(),
            _ when this == Irn => onIrn(),
            _ when this == Irq => onIrq(),
            _ when this == Isl => onIsl(),
            _ when this == Isr => onIsr(),
            _ when this == Ita => onIta(),
            _ when this == Jam => onJam(),
            _ when this == Jey => onJey(),
            _ when this == Jor => onJor(),
            _ when this == Jpn => onJpn(),
            _ when this == Kaz => onKaz(),
            _ when this == Ken => onKen(),
            _ when this == Kgz => onKgz(),
            _ when this == Khm => onKhm(),
            _ when this == Kir => onKir(),
            _ when this == Kna => onKna(),
            _ when this == Kor => onKor(),
            _ when this == Kwt => onKwt(),
            _ when this == Lao => onLao(),
            _ when this == Lbn => onLbn(),
            _ when this == Lbr => onLbr(),
            _ when this == Lby => onLby(),
            _ when this == Lca => onLca(),
            _ when this == Lie => onLie(),
            _ when this == Lka => onLka(),
            _ when this == Lso => onLso(),
            _ when this == Ltu => onLtu(),
            _ when this == Lux => onLux(),
            _ when this == Lva => onLva(),
            _ when this == Mac => onMac(),
            _ when this == Maf => onMaf(),
            _ when this == Mar => onMar(),
            _ when this == Mco => onMco(),
            _ when this == Mda => onMda(),
            _ when this == Mdg => onMdg(),
            _ when this == Mdv => onMdv(),
            _ when this == Mex => onMex(),
            _ when this == Mhl => onMhl(),
            _ when this == Mkd => onMkd(),
            _ when this == Mli => onMli(),
            _ when this == Mlt => onMlt(),
            _ when this == Mmr => onMmr(),
            _ when this == Mne => onMne(),
            _ when this == Mng => onMng(),
            _ when this == Mnp => onMnp(),
            _ when this == Moz => onMoz(),
            _ when this == Mrt => onMrt(),
            _ when this == Msr => onMsr(),
            _ when this == Mtq => onMtq(),
            _ when this == Mus => onMus(),
            _ when this == Mwi => onMwi(),
            _ when this == Mys => onMys(),
            _ when this == Myt => onMyt(),
            _ when this == Nam => onNam(),
            _ when this == Ncl => onNcl(),
            _ when this == Ner => onNer(),
            _ when this == Nfk => onNfk(),
            _ when this == Nga => onNga(),
            _ when this == Nic => onNic(),
            _ when this == Niu => onNiu(),
            _ when this == Nld => onNld(),
            _ when this == NonUsa => onNonUsa(),
            _ when this == Nor => onNor(),
            _ when this == Npl => onNpl(),
            _ when this == Nru => onNru(),
            _ when this == Nzl => onNzl(),
            _ when this == Omn => onOmn(),
            _ when this == Pak => onPak(),
            _ when this == Pan => onPan(),
            _ when this == Pcn => onPcn(),
            _ when this == Per => onPer(),
            _ when this == Phl => onPhl(),
            _ when this == Plw => onPlw(),
            _ when this == Png => onPng(),
            _ when this == Pol => onPol(),
            _ when this == Pri => onPri(),
            _ when this == Prk => onPrk(),
            _ when this == Prt => onPrt(),
            _ when this == Pry => onPry(),
            _ when this == Pse => onPse(),
            _ when this == Pyf => onPyf(),
            _ when this == Qat => onQat(),
            _ when this == Reu => onReu(),
            _ when this == Rou => onRou(),
            _ when this == Rus => onRus(),
            _ when this == Rwa => onRwa(),
            _ when this == Sau => onSau(),
            _ when this == Sdn => onSdn(),
            _ when this == Sen => onSen(),
            _ when this == Sgp => onSgp(),
            _ when this == Sgs => onSgs(),
            _ when this == Shn => onShn(),
            _ when this == Sjm => onSjm(),
            _ when this == Slb => onSlb(),
            _ when this == Sle => onSle(),
            _ when this == Slv => onSlv(),
            _ when this == Smr => onSmr(),
            _ when this == Som => onSom(),
            _ when this == Spm => onSpm(),
            _ when this == Srb => onSrb(),
            _ when this == Ssd => onSsd(),
            _ when this == Stp => onStp(),
            _ when this == Sur => onSur(),
            _ when this == Svk => onSvk(),
            _ when this == Svn => onSvn(),
            _ when this == Swe => onSwe(),
            _ when this == Swz => onSwz(),
            _ when this == Sxm => onSxm(),
            _ when this == Syc => onSyc(),
            _ when this == Syr => onSyr(),
            _ when this == Tca => onTca(),
            _ when this == Tcd => onTcd(),
            _ when this == Tgo => onTgo(),
            _ when this == Tha => onTha(),
            _ when this == Tjk => onTjk(),
            _ when this == Tkl => onTkl(),
            _ when this == Tkm => onTkm(),
            _ when this == Tls => onTls(),
            _ when this == Ton => onTon(),
            _ when this == Tto => onTto(),
            _ when this == Tun => onTun(),
            _ when this == Tur => onTur(),
            _ when this == Tuv => onTuv(),
            _ when this == Twn => onTwn(),
            _ when this == Tza => onTza(),
            _ when this == Uga => onUga(),
            _ when this == Ukr => onUkr(),
            _ when this == Umi => onUmi(),
            _ when this == Unknown => onUnknown(),
            _ when this == Ury => onUry(),
            _ when this == Usa => onUsa(),
            _ when this == Uzb => onUzb(),
            _ when this == Vat => onVat(),
            _ when this == Vct => onVct(),
            _ when this == Ven => onVen(),
            _ when this == Vgb => onVgb(),
            _ when this == Vir => onVir(),
            _ when this == Vnm => onVnm(),
            _ when this == Vut => onVut(),
            _ when this == Wlf => onWlf(),
            _ when this == Wsm => onWsm(),
            _ when this == Yem => onYem(),
            _ when this == Zaf => onZaf(),
            _ when this == Zmb => onZmb(),
            _ when this == Zwe => onZwe(),
            _ => otherwise(Value)
        };

    public void Match(Action onAbw,
        Action onAfg,
        Action onAgo,
        Action onAia,
        Action onAla,
        Action onAlb,
        Action onAnd,
        Action onAre,
        Action onArg,
        Action onArm,
        Action onAsm,
        Action onAta,
        Action onAtf,
        Action onAtg,
        Action onAus,
        Action onAut,
        Action onAze,
        Action onBdi,
        Action onBel,
        Action onBen,
        Action onBes,
        Action onBfa,
        Action onBgd,
        Action onBgr,
        Action onBhr,
        Action onBhs,
        Action onBih,
        Action onBlm,
        Action onBlr,
        Action onBlz,
        Action onBmu,
        Action onBol,
        Action onBra,
        Action onBrb,
        Action onBrn,
        Action onBtn,
        Action onBvt,
        Action onBwa,
        Action onCaf,
        Action onCan,
        Action onCck,
        Action onChe,
        Action onChl,
        Action onChn,
        Action onCiv,
        Action onCmr,
        Action onCod,
        Action onCog,
        Action onCok,
        Action onCol,
        Action onCom,
        Action onCpv,
        Action onCri,
        Action onCub,
        Action onCuw,
        Action onCxr,
        Action onCym,
        Action onCyp,
        Action onCze,
        Action onDeu,
        Action onDji,
        Action onDma,
        Action onDnk,
        Action onDom,
        Action onDza,
        Action onEcu,
        Action onEgy,
        Action onEri,
        Action onEsh,
        Action onEsp,
        Action onEst,
        Action onEth,
        Action onFin,
        Action onFji,
        Action onFlk,
        Action onFra,
        Action onFro,
        Action onFsm,
        Action onGab,
        Action onGbr,
        Action onGeo,
        Action onGgy,
        Action onGha,
        Action onGib,
        Action onGin,
        Action onGlp,
        Action onGmb,
        Action onGnb,
        Action onGnq,
        Action onGrc,
        Action onGrd,
        Action onGrl,
        Action onGtm,
        Action onGuf,
        Action onGum,
        Action onGuy,
        Action onHkg,
        Action onHmd,
        Action onHnd,
        Action onHrv,
        Action onHti,
        Action onHun,
        Action onIdn,
        Action onImn,
        Action onInd,
        Action onIot,
        Action onIrl,
        Action onIrn,
        Action onIrq,
        Action onIsl,
        Action onIsr,
        Action onIta,
        Action onJam,
        Action onJey,
        Action onJor,
        Action onJpn,
        Action onKaz,
        Action onKen,
        Action onKgz,
        Action onKhm,
        Action onKir,
        Action onKna,
        Action onKor,
        Action onKwt,
        Action onLao,
        Action onLbn,
        Action onLbr,
        Action onLby,
        Action onLca,
        Action onLie,
        Action onLka,
        Action onLso,
        Action onLtu,
        Action onLux,
        Action onLva,
        Action onMac,
        Action onMaf,
        Action onMar,
        Action onMco,
        Action onMda,
        Action onMdg,
        Action onMdv,
        Action onMex,
        Action onMhl,
        Action onMkd,
        Action onMli,
        Action onMlt,
        Action onMmr,
        Action onMne,
        Action onMng,
        Action onMnp,
        Action onMoz,
        Action onMrt,
        Action onMsr,
        Action onMtq,
        Action onMus,
        Action onMwi,
        Action onMys,
        Action onMyt,
        Action onNam,
        Action onNcl,
        Action onNer,
        Action onNfk,
        Action onNga,
        Action onNic,
        Action onNiu,
        Action onNld,
        Action onNonUsa,
        Action onNor,
        Action onNpl,
        Action onNru,
        Action onNzl,
        Action onOmn,
        Action onPak,
        Action onPan,
        Action onPcn,
        Action onPer,
        Action onPhl,
        Action onPlw,
        Action onPng,
        Action onPol,
        Action onPri,
        Action onPrk,
        Action onPrt,
        Action onPry,
        Action onPse,
        Action onPyf,
        Action onQat,
        Action onReu,
        Action onRou,
        Action onRus,
        Action onRwa,
        Action onSau,
        Action onSdn,
        Action onSen,
        Action onSgp,
        Action onSgs,
        Action onShn,
        Action onSjm,
        Action onSlb,
        Action onSle,
        Action onSlv,
        Action onSmr,
        Action onSom,
        Action onSpm,
        Action onSrb,
        Action onSsd,
        Action onStp,
        Action onSur,
        Action onSvk,
        Action onSvn,
        Action onSwe,
        Action onSwz,
        Action onSxm,
        Action onSyc,
        Action onSyr,
        Action onTca,
        Action onTcd,
        Action onTgo,
        Action onTha,
        Action onTjk,
        Action onTkl,
        Action onTkm,
        Action onTls,
        Action onTon,
        Action onTto,
        Action onTun,
        Action onTur,
        Action onTuv,
        Action onTwn,
        Action onTza,
        Action onUga,
        Action onUkr,
        Action onUmi,
        Action onUnknown,
        Action onUry,
        Action onUsa,
        Action onUzb,
        Action onVat,
        Action onVct,
        Action onVen,
        Action onVgb,
        Action onVir,
        Action onVnm,
        Action onVut,
        Action onWlf,
        Action onWsm,
        Action onYem,
        Action onZaf,
        Action onZmb,
        Action onZwe,
        Action<string> otherwise)
    {
        if (this == Abw) onAbw();
        else if (this == Afg) onAfg();
        else if (this == Ago) onAgo();
        else if (this == Aia) onAia();
        else if (this == Ala) onAla();
        else if (this == Alb) onAlb();
        else if (this == And) onAnd();
        else if (this == Are) onAre();
        else if (this == Arg) onArg();
        else if (this == Arm) onArm();
        else if (this == Asm) onAsm();
        else if (this == Ata) onAta();
        else if (this == Atf) onAtf();
        else if (this == Atg) onAtg();
        else if (this == Aus) onAus();
        else if (this == Aut) onAut();
        else if (this == Aze) onAze();
        else if (this == Bdi) onBdi();
        else if (this == Bel) onBel();
        else if (this == Ben) onBen();
        else if (this == Bes) onBes();
        else if (this == Bfa) onBfa();
        else if (this == Bgd) onBgd();
        else if (this == Bgr) onBgr();
        else if (this == Bhr) onBhr();
        else if (this == Bhs) onBhs();
        else if (this == Bih) onBih();
        else if (this == Blm) onBlm();
        else if (this == Blr) onBlr();
        else if (this == Blz) onBlz();
        else if (this == Bmu) onBmu();
        else if (this == Bol) onBol();
        else if (this == Bra) onBra();
        else if (this == Brb) onBrb();
        else if (this == Brn) onBrn();
        else if (this == Btn) onBtn();
        else if (this == Bvt) onBvt();
        else if (this == Bwa) onBwa();
        else if (this == Caf) onCaf();
        else if (this == Can) onCan();
        else if (this == Cck) onCck();
        else if (this == Che) onChe();
        else if (this == Chl) onChl();
        else if (this == Chn) onChn();
        else if (this == Civ) onCiv();
        else if (this == Cmr) onCmr();
        else if (this == Cod) onCod();
        else if (this == Cog) onCog();
        else if (this == Cok) onCok();
        else if (this == Col) onCol();
        else if (this == Com) onCom();
        else if (this == Cpv) onCpv();
        else if (this == Cri) onCri();
        else if (this == Cub) onCub();
        else if (this == Cuw) onCuw();
        else if (this == Cxr) onCxr();
        else if (this == Cym) onCym();
        else if (this == Cyp) onCyp();
        else if (this == Cze) onCze();
        else if (this == Deu) onDeu();
        else if (this == Dji) onDji();
        else if (this == Dma) onDma();
        else if (this == Dnk) onDnk();
        else if (this == Dom) onDom();
        else if (this == Dza) onDza();
        else if (this == Ecu) onEcu();
        else if (this == Egy) onEgy();
        else if (this == Eri) onEri();
        else if (this == Esh) onEsh();
        else if (this == Esp) onEsp();
        else if (this == Est) onEst();
        else if (this == Eth) onEth();
        else if (this == Fin) onFin();
        else if (this == Fji) onFji();
        else if (this == Flk) onFlk();
        else if (this == Fra) onFra();
        else if (this == Fro) onFro();
        else if (this == Fsm) onFsm();
        else if (this == Gab) onGab();
        else if (this == Gbr) onGbr();
        else if (this == Geo) onGeo();
        else if (this == Ggy) onGgy();
        else if (this == Gha) onGha();
        else if (this == Gib) onGib();
        else if (this == Gin) onGin();
        else if (this == Glp) onGlp();
        else if (this == Gmb) onGmb();
        else if (this == Gnb) onGnb();
        else if (this == Gnq) onGnq();
        else if (this == Grc) onGrc();
        else if (this == Grd) onGrd();
        else if (this == Grl) onGrl();
        else if (this == Gtm) onGtm();
        else if (this == Guf) onGuf();
        else if (this == Gum) onGum();
        else if (this == Guy) onGuy();
        else if (this == Hkg) onHkg();
        else if (this == Hmd) onHmd();
        else if (this == Hnd) onHnd();
        else if (this == Hrv) onHrv();
        else if (this == Hti) onHti();
        else if (this == Hun) onHun();
        else if (this == Idn) onIdn();
        else if (this == Imn) onImn();
        else if (this == Ind) onInd();
        else if (this == Iot) onIot();
        else if (this == Irl) onIrl();
        else if (this == Irn) onIrn();
        else if (this == Irq) onIrq();
        else if (this == Isl) onIsl();
        else if (this == Isr) onIsr();
        else if (this == Ita) onIta();
        else if (this == Jam) onJam();
        else if (this == Jey) onJey();
        else if (this == Jor) onJor();
        else if (this == Jpn) onJpn();
        else if (this == Kaz) onKaz();
        else if (this == Ken) onKen();
        else if (this == Kgz) onKgz();
        else if (this == Khm) onKhm();
        else if (this == Kir) onKir();
        else if (this == Kna) onKna();
        else if (this == Kor) onKor();
        else if (this == Kwt) onKwt();
        else if (this == Lao) onLao();
        else if (this == Lbn) onLbn();
        else if (this == Lbr) onLbr();
        else if (this == Lby) onLby();
        else if (this == Lca) onLca();
        else if (this == Lie) onLie();
        else if (this == Lka) onLka();
        else if (this == Lso) onLso();
        else if (this == Ltu) onLtu();
        else if (this == Lux) onLux();
        else if (this == Lva) onLva();
        else if (this == Mac) onMac();
        else if (this == Maf) onMaf();
        else if (this == Mar) onMar();
        else if (this == Mco) onMco();
        else if (this == Mda) onMda();
        else if (this == Mdg) onMdg();
        else if (this == Mdv) onMdv();
        else if (this == Mex) onMex();
        else if (this == Mhl) onMhl();
        else if (this == Mkd) onMkd();
        else if (this == Mli) onMli();
        else if (this == Mlt) onMlt();
        else if (this == Mmr) onMmr();
        else if (this == Mne) onMne();
        else if (this == Mng) onMng();
        else if (this == Mnp) onMnp();
        else if (this == Moz) onMoz();
        else if (this == Mrt) onMrt();
        else if (this == Msr) onMsr();
        else if (this == Mtq) onMtq();
        else if (this == Mus) onMus();
        else if (this == Mwi) onMwi();
        else if (this == Mys) onMys();
        else if (this == Myt) onMyt();
        else if (this == Nam) onNam();
        else if (this == Ncl) onNcl();
        else if (this == Ner) onNer();
        else if (this == Nfk) onNfk();
        else if (this == Nga) onNga();
        else if (this == Nic) onNic();
        else if (this == Niu) onNiu();
        else if (this == Nld) onNld();
        else if (this == NonUsa) onNonUsa();
        else if (this == Nor) onNor();
        else if (this == Npl) onNpl();
        else if (this == Nru) onNru();
        else if (this == Nzl) onNzl();
        else if (this == Omn) onOmn();
        else if (this == Pak) onPak();
        else if (this == Pan) onPan();
        else if (this == Pcn) onPcn();
        else if (this == Per) onPer();
        else if (this == Phl) onPhl();
        else if (this == Plw) onPlw();
        else if (this == Png) onPng();
        else if (this == Pol) onPol();
        else if (this == Pri) onPri();
        else if (this == Prk) onPrk();
        else if (this == Prt) onPrt();
        else if (this == Pry) onPry();
        else if (this == Pse) onPse();
        else if (this == Pyf) onPyf();
        else if (this == Qat) onQat();
        else if (this == Reu) onReu();
        else if (this == Rou) onRou();
        else if (this == Rus) onRus();
        else if (this == Rwa) onRwa();
        else if (this == Sau) onSau();
        else if (this == Sdn) onSdn();
        else if (this == Sen) onSen();
        else if (this == Sgp) onSgp();
        else if (this == Sgs) onSgs();
        else if (this == Shn) onShn();
        else if (this == Sjm) onSjm();
        else if (this == Slb) onSlb();
        else if (this == Sle) onSle();
        else if (this == Slv) onSlv();
        else if (this == Smr) onSmr();
        else if (this == Som) onSom();
        else if (this == Spm) onSpm();
        else if (this == Srb) onSrb();
        else if (this == Ssd) onSsd();
        else if (this == Stp) onStp();
        else if (this == Sur) onSur();
        else if (this == Svk) onSvk();
        else if (this == Svn) onSvn();
        else if (this == Swe) onSwe();
        else if (this == Swz) onSwz();
        else if (this == Sxm) onSxm();
        else if (this == Syc) onSyc();
        else if (this == Syr) onSyr();
        else if (this == Tca) onTca();
        else if (this == Tcd) onTcd();
        else if (this == Tgo) onTgo();
        else if (this == Tha) onTha();
        else if (this == Tjk) onTjk();
        else if (this == Tkl) onTkl();
        else if (this == Tkm) onTkm();
        else if (this == Tls) onTls();
        else if (this == Ton) onTon();
        else if (this == Tto) onTto();
        else if (this == Tun) onTun();
        else if (this == Tur) onTur();
        else if (this == Tuv) onTuv();
        else if (this == Twn) onTwn();
        else if (this == Tza) onTza();
        else if (this == Uga) onUga();
        else if (this == Ukr) onUkr();
        else if (this == Umi) onUmi();
        else if (this == Unknown) onUnknown();
        else if (this == Ury) onUry();
        else if (this == Usa) onUsa();
        else if (this == Uzb) onUzb();
        else if (this == Vat) onVat();
        else if (this == Vct) onVct();
        else if (this == Ven) onVen();
        else if (this == Vgb) onVgb();
        else if (this == Vir) onVir();
        else if (this == Vnm) onVnm();
        else if (this == Vut) onVut();
        else if (this == Wlf) onWlf();
        else if (this == Wsm) onWsm();
        else if (this == Yem) onYem();
        else if (this == Zaf) onZaf();
        else if (this == Zmb) onZmb();
        else if (this == Zwe) onZwe();
        else otherwise(Value);
    }
}
