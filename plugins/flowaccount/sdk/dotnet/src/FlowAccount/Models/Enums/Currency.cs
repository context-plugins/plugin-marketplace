using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = USD
/// 3 = GBP
/// 5 = EUR
/// 7 = JPY
/// 9 = HKD
/// 11 = CNY
/// 13 = THB
/// 15 = AUD
/// 33 = BDT
/// 35 = BHD
/// 37 = BND
/// 39 = KHR
/// 41 = CAD
/// 43 = DKK
/// 45 = INR
/// 47 = IDR
/// 49 = ILS
/// 53 = KRW
/// 55 = LAK
/// 57 = MOP
/// 59 = MYR
/// 61 = MMK
/// 63 = NPR
/// 65 = NZD
/// 67 = NOK
/// 69 = OMR
/// 71 = PKR
/// 73 = PHP
/// 75 = QAR
/// 77 = RUB
/// 79 = SAR
/// 81 = SEK
/// 83 = SGD
/// 85 = LKR
/// 87 = CHF
/// 89 = TWD
/// 91 = AED
/// 93 = VND
/// 95 = ZAR
/// 97 = MXN
/// 99 = KWD
/// 101 = CZK
/// 103 = KES
/// 105 = EGP
/// 107 = PLN
/// 109 = IQD
/// 111 = JOD
/// 113 = MVR
/// 115 = PGK
/// 117 = HUF
/// </summary>
[JsonConverter(typeof(IntEnumConverter<Currency>))]
public sealed record Currency : OpenIntEnum<Currency>
{
    private Currency(long value) : base(value)
    {
    }

    public static readonly Currency Value1 = new(1L);

    public static readonly Currency Value3 = new(3L);

    public static readonly Currency Value5 = new(5L);

    public static readonly Currency Value7 = new(7L);

    public static readonly Currency Value9 = new(9L);

    public static readonly Currency Value11 = new(11L);

    public static readonly Currency Value13 = new(13L);

    public static readonly Currency Value15 = new(15L);

    public static readonly Currency Value33 = new(33L);

    public static readonly Currency Value35 = new(35L);

    public static readonly Currency Value37 = new(37L);

    public static readonly Currency Value39 = new(39L);

    public static readonly Currency Value41 = new(41L);

    public static readonly Currency Value43 = new(43L);

    public static readonly Currency Value45 = new(45L);

    public static readonly Currency Value47 = new(47L);

    public static readonly Currency Value49 = new(49L);

    public static readonly Currency Value53 = new(53L);

    public static readonly Currency Value55 = new(55L);

    public static readonly Currency Value57 = new(57L);

    public static readonly Currency Value59 = new(59L);

    public static readonly Currency Value61 = new(61L);

    public static readonly Currency Value63 = new(63L);

    public static readonly Currency Value65 = new(65L);

    public static readonly Currency Value67 = new(67L);

    public static readonly Currency Value69 = new(69L);

    public static readonly Currency Value71 = new(71L);

    public static readonly Currency Value73 = new(73L);

    public static readonly Currency Value75 = new(75L);

    public static readonly Currency Value77 = new(77L);

    public static readonly Currency Value79 = new(79L);

    public static readonly Currency Value81 = new(81L);

    public static readonly Currency Value83 = new(83L);

    public static readonly Currency Value85 = new(85L);

    public static readonly Currency Value87 = new(87L);

    public static readonly Currency Value89 = new(89L);

    public static readonly Currency Value91 = new(91L);

    public static readonly Currency Value93 = new(93L);

    public static readonly Currency Value95 = new(95L);

    public static readonly Currency Value97 = new(97L);

    public static readonly Currency Value99 = new(99L);

    public static readonly Currency Value101 = new(101L);

    public static readonly Currency Value103 = new(103L);

    public static readonly Currency Value105 = new(105L);

    public static readonly Currency Value107 = new(107L);

    public static readonly Currency Value109 = new(109L);

    public static readonly Currency Value111 = new(111L);

    public static readonly Currency Value113 = new(113L);

    public static readonly Currency Value115 = new(115L);

    public static readonly Currency Value117 = new(117L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<TResult> onValue33,
        Func<TResult> onValue35,
        Func<TResult> onValue37,
        Func<TResult> onValue39,
        Func<TResult> onValue41,
        Func<TResult> onValue43,
        Func<TResult> onValue45,
        Func<TResult> onValue47,
        Func<TResult> onValue49,
        Func<TResult> onValue53,
        Func<TResult> onValue55,
        Func<TResult> onValue57,
        Func<TResult> onValue59,
        Func<TResult> onValue61,
        Func<TResult> onValue63,
        Func<TResult> onValue65,
        Func<TResult> onValue67,
        Func<TResult> onValue69,
        Func<TResult> onValue71,
        Func<TResult> onValue73,
        Func<TResult> onValue75,
        Func<TResult> onValue77,
        Func<TResult> onValue79,
        Func<TResult> onValue81,
        Func<TResult> onValue83,
        Func<TResult> onValue85,
        Func<TResult> onValue87,
        Func<TResult> onValue89,
        Func<TResult> onValue91,
        Func<TResult> onValue93,
        Func<TResult> onValue95,
        Func<TResult> onValue97,
        Func<TResult> onValue99,
        Func<TResult> onValue101,
        Func<TResult> onValue103,
        Func<TResult> onValue105,
        Func<TResult> onValue107,
        Func<TResult> onValue109,
        Func<TResult> onValue111,
        Func<TResult> onValue113,
        Func<TResult> onValue115,
        Func<TResult> onValue117,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value1 => onValue1(),
            _ when this == Value3 => onValue3(),
            _ when this == Value5 => onValue5(),
            _ when this == Value7 => onValue7(),
            _ when this == Value9 => onValue9(),
            _ when this == Value11 => onValue11(),
            _ when this == Value13 => onValue13(),
            _ when this == Value15 => onValue15(),
            _ when this == Value33 => onValue33(),
            _ when this == Value35 => onValue35(),
            _ when this == Value37 => onValue37(),
            _ when this == Value39 => onValue39(),
            _ when this == Value41 => onValue41(),
            _ when this == Value43 => onValue43(),
            _ when this == Value45 => onValue45(),
            _ when this == Value47 => onValue47(),
            _ when this == Value49 => onValue49(),
            _ when this == Value53 => onValue53(),
            _ when this == Value55 => onValue55(),
            _ when this == Value57 => onValue57(),
            _ when this == Value59 => onValue59(),
            _ when this == Value61 => onValue61(),
            _ when this == Value63 => onValue63(),
            _ when this == Value65 => onValue65(),
            _ when this == Value67 => onValue67(),
            _ when this == Value69 => onValue69(),
            _ when this == Value71 => onValue71(),
            _ when this == Value73 => onValue73(),
            _ when this == Value75 => onValue75(),
            _ when this == Value77 => onValue77(),
            _ when this == Value79 => onValue79(),
            _ when this == Value81 => onValue81(),
            _ when this == Value83 => onValue83(),
            _ when this == Value85 => onValue85(),
            _ when this == Value87 => onValue87(),
            _ when this == Value89 => onValue89(),
            _ when this == Value91 => onValue91(),
            _ when this == Value93 => onValue93(),
            _ when this == Value95 => onValue95(),
            _ when this == Value97 => onValue97(),
            _ when this == Value99 => onValue99(),
            _ when this == Value101 => onValue101(),
            _ when this == Value103 => onValue103(),
            _ when this == Value105 => onValue105(),
            _ when this == Value107 => onValue107(),
            _ when this == Value109 => onValue109(),
            _ when this == Value111 => onValue111(),
            _ when this == Value113 => onValue113(),
            _ when this == Value115 => onValue115(),
            _ when this == Value117 => onValue117(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue1,
        Action onValue3,
        Action onValue5,
        Action onValue7,
        Action onValue9,
        Action onValue11,
        Action onValue13,
        Action onValue15,
        Action onValue33,
        Action onValue35,
        Action onValue37,
        Action onValue39,
        Action onValue41,
        Action onValue43,
        Action onValue45,
        Action onValue47,
        Action onValue49,
        Action onValue53,
        Action onValue55,
        Action onValue57,
        Action onValue59,
        Action onValue61,
        Action onValue63,
        Action onValue65,
        Action onValue67,
        Action onValue69,
        Action onValue71,
        Action onValue73,
        Action onValue75,
        Action onValue77,
        Action onValue79,
        Action onValue81,
        Action onValue83,
        Action onValue85,
        Action onValue87,
        Action onValue89,
        Action onValue91,
        Action onValue93,
        Action onValue95,
        Action onValue97,
        Action onValue99,
        Action onValue101,
        Action onValue103,
        Action onValue105,
        Action onValue107,
        Action onValue109,
        Action onValue111,
        Action onValue113,
        Action onValue115,
        Action onValue117,
        Action<long> otherwise)
    {
        if (this == Value1) onValue1();
        else if (this == Value3) onValue3();
        else if (this == Value5) onValue5();
        else if (this == Value7) onValue7();
        else if (this == Value9) onValue9();
        else if (this == Value11) onValue11();
        else if (this == Value13) onValue13();
        else if (this == Value15) onValue15();
        else if (this == Value33) onValue33();
        else if (this == Value35) onValue35();
        else if (this == Value37) onValue37();
        else if (this == Value39) onValue39();
        else if (this == Value41) onValue41();
        else if (this == Value43) onValue43();
        else if (this == Value45) onValue45();
        else if (this == Value47) onValue47();
        else if (this == Value49) onValue49();
        else if (this == Value53) onValue53();
        else if (this == Value55) onValue55();
        else if (this == Value57) onValue57();
        else if (this == Value59) onValue59();
        else if (this == Value61) onValue61();
        else if (this == Value63) onValue63();
        else if (this == Value65) onValue65();
        else if (this == Value67) onValue67();
        else if (this == Value69) onValue69();
        else if (this == Value71) onValue71();
        else if (this == Value73) onValue73();
        else if (this == Value75) onValue75();
        else if (this == Value77) onValue77();
        else if (this == Value79) onValue79();
        else if (this == Value81) onValue81();
        else if (this == Value83) onValue83();
        else if (this == Value85) onValue85();
        else if (this == Value87) onValue87();
        else if (this == Value89) onValue89();
        else if (this == Value91) onValue91();
        else if (this == Value93) onValue93();
        else if (this == Value95) onValue95();
        else if (this == Value97) onValue97();
        else if (this == Value99) onValue99();
        else if (this == Value101) onValue101();
        else if (this == Value103) onValue103();
        else if (this == Value105) onValue105();
        else if (this == Value107) onValue107();
        else if (this == Value109) onValue109();
        else if (this == Value111) onValue111();
        else if (this == Value113) onValue113();
        else if (this == Value115) onValue115();
        else if (this == Value117) onValue117();
        else otherwise(Value);
    }
}
