using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The <c>brand</c> of the card saved in the <c>Payment Instrument</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Brand>))]
public sealed record Brand : OpenStringEnum<Brand>
{
    private Brand(string value) : base(value)
    {
    }

    public static readonly Brand Unknown = new("UNKNOWN");

    public static readonly Brand DinersClubInternational = new("DINERS_CLUB_INTERNATIONAL");

    public static readonly Brand Dankort = new("DANKORT");

    public static readonly Brand Mir = new("MIR");

    public static readonly Brand Troy = new("TROY");

    public static readonly Brand Uatp = new("UATP");

    public static readonly Brand ChinaTUnion = new("CHINA_T_UNION");

    public static readonly Brand ChinaUnionPay = new("CHINA_UNION_PAY");

    public static readonly Brand AmericanExpress = new("AMERICAN_EXPRESS");

    public static readonly Brand Verve = new("VERVE");

    public static readonly Brand Rupay = new("RUPAY");

    public static readonly Brand Discover = new("DISCOVER");

    public static readonly Brand Jcb = new("JCB");

    public static readonly Brand Mastercard = new("MASTERCARD");

    public static readonly Brand Interpayment = new("INTERPAYMENT");

    public static readonly Brand Instapayment = new("INSTAPAYMENT");

    public static readonly Brand Maestro = new("MAESTRO");

    public static readonly Brand Visa = new("VISA");

    public static readonly Brand Lankapay = new("LANKAPAY");

    public static readonly Brand DinersClub = new("DINERS_CLUB");

    public static readonly Brand Interac = new("INTERAC");

    public TResult Match<TResult>(Func<TResult> onUnknown,
        Func<TResult> onDinersClubInternational,
        Func<TResult> onDankort,
        Func<TResult> onMir,
        Func<TResult> onTroy,
        Func<TResult> onUatp,
        Func<TResult> onChinaTUnion,
        Func<TResult> onChinaUnionPay,
        Func<TResult> onAmericanExpress,
        Func<TResult> onVerve,
        Func<TResult> onRupay,
        Func<TResult> onDiscover,
        Func<TResult> onJcb,
        Func<TResult> onMastercard,
        Func<TResult> onInterpayment,
        Func<TResult> onInstapayment,
        Func<TResult> onMaestro,
        Func<TResult> onVisa,
        Func<TResult> onLankapay,
        Func<TResult> onDinersClub,
        Func<TResult> onInterac,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unknown => onUnknown(),
            _ when this == DinersClubInternational => onDinersClubInternational(),
            _ when this == Dankort => onDankort(),
            _ when this == Mir => onMir(),
            _ when this == Troy => onTroy(),
            _ when this == Uatp => onUatp(),
            _ when this == ChinaTUnion => onChinaTUnion(),
            _ when this == ChinaUnionPay => onChinaUnionPay(),
            _ when this == AmericanExpress => onAmericanExpress(),
            _ when this == Verve => onVerve(),
            _ when this == Rupay => onRupay(),
            _ when this == Discover => onDiscover(),
            _ when this == Jcb => onJcb(),
            _ when this == Mastercard => onMastercard(),
            _ when this == Interpayment => onInterpayment(),
            _ when this == Instapayment => onInstapayment(),
            _ when this == Maestro => onMaestro(),
            _ when this == Visa => onVisa(),
            _ when this == Lankapay => onLankapay(),
            _ when this == DinersClub => onDinersClub(),
            _ when this == Interac => onInterac(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnknown,
        Action onDinersClubInternational,
        Action onDankort,
        Action onMir,
        Action onTroy,
        Action onUatp,
        Action onChinaTUnion,
        Action onChinaUnionPay,
        Action onAmericanExpress,
        Action onVerve,
        Action onRupay,
        Action onDiscover,
        Action onJcb,
        Action onMastercard,
        Action onInterpayment,
        Action onInstapayment,
        Action onMaestro,
        Action onVisa,
        Action onLankapay,
        Action onDinersClub,
        Action onInterac,
        Action<string> otherwise)
    {
        if (this == Unknown) onUnknown();
        else if (this == DinersClubInternational) onDinersClubInternational();
        else if (this == Dankort) onDankort();
        else if (this == Mir) onMir();
        else if (this == Troy) onTroy();
        else if (this == Uatp) onUatp();
        else if (this == ChinaTUnion) onChinaTUnion();
        else if (this == ChinaUnionPay) onChinaUnionPay();
        else if (this == AmericanExpress) onAmericanExpress();
        else if (this == Verve) onVerve();
        else if (this == Rupay) onRupay();
        else if (this == Discover) onDiscover();
        else if (this == Jcb) onJcb();
        else if (this == Mastercard) onMastercard();
        else if (this == Interpayment) onInterpayment();
        else if (this == Instapayment) onInstapayment();
        else if (this == Maestro) onMaestro();
        else if (this == Visa) onVisa();
        else if (this == Lankapay) onLankapay();
        else if (this == DinersClub) onDinersClub();
        else if (this == Interac) onInterac();
        else otherwise(Value);
    }
}
