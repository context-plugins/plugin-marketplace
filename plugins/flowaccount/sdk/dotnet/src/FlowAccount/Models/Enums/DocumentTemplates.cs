using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 1 = Default
/// 3 = Template1
/// 5 = Template2
/// 7 = Template3
/// 9 = Template4
/// 11 = Template5
/// 13 = TemplateA5
/// 15 = Template9x11withOriginal
/// 17 = Template8
/// 101 = NativeDefault
/// 103 = Native1
/// 105 = Native3
/// 107 = Native5
/// 109 = Native7
/// 111 = Native9
/// 113 = Native11
/// 115 = Native13
/// 201 = Thermal1
/// 203 = Thermal2
/// 205 = SocialSlip
/// 301 = ShortCA1
/// 303 = ShortCA2
/// 305 = ShortCA3
/// </summary>
[JsonConverter(typeof(IntEnumConverter<DocumentTemplates>))]
public sealed record DocumentTemplates : OpenIntEnum<DocumentTemplates>
{
    private DocumentTemplates(long value) : base(value)
    {
    }

    public static readonly DocumentTemplates Value1 = new(1L);

    public static readonly DocumentTemplates Value3 = new(3L);

    public static readonly DocumentTemplates Value5 = new(5L);

    public static readonly DocumentTemplates Value7 = new(7L);

    public static readonly DocumentTemplates Value9 = new(9L);

    public static readonly DocumentTemplates Value11 = new(11L);

    public static readonly DocumentTemplates Value13 = new(13L);

    public static readonly DocumentTemplates Value15 = new(15L);

    public static readonly DocumentTemplates Value17 = new(17L);

    public static readonly DocumentTemplates Value101 = new(101L);

    public static readonly DocumentTemplates Value103 = new(103L);

    public static readonly DocumentTemplates Value105 = new(105L);

    public static readonly DocumentTemplates Value107 = new(107L);

    public static readonly DocumentTemplates Value109 = new(109L);

    public static readonly DocumentTemplates Value111 = new(111L);

    public static readonly DocumentTemplates Value113 = new(113L);

    public static readonly DocumentTemplates Value115 = new(115L);

    public static readonly DocumentTemplates Value201 = new(201L);

    public static readonly DocumentTemplates Value203 = new(203L);

    public static readonly DocumentTemplates Value205 = new(205L);

    public static readonly DocumentTemplates Value301 = new(301L);

    public static readonly DocumentTemplates Value303 = new(303L);

    public static readonly DocumentTemplates Value305 = new(305L);

    public TResult Match<TResult>(Func<TResult> onValue1,
        Func<TResult> onValue3,
        Func<TResult> onValue5,
        Func<TResult> onValue7,
        Func<TResult> onValue9,
        Func<TResult> onValue11,
        Func<TResult> onValue13,
        Func<TResult> onValue15,
        Func<TResult> onValue17,
        Func<TResult> onValue101,
        Func<TResult> onValue103,
        Func<TResult> onValue105,
        Func<TResult> onValue107,
        Func<TResult> onValue109,
        Func<TResult> onValue111,
        Func<TResult> onValue113,
        Func<TResult> onValue115,
        Func<TResult> onValue201,
        Func<TResult> onValue203,
        Func<TResult> onValue205,
        Func<TResult> onValue301,
        Func<TResult> onValue303,
        Func<TResult> onValue305,
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
            _ when this == Value17 => onValue17(),
            _ when this == Value101 => onValue101(),
            _ when this == Value103 => onValue103(),
            _ when this == Value105 => onValue105(),
            _ when this == Value107 => onValue107(),
            _ when this == Value109 => onValue109(),
            _ when this == Value111 => onValue111(),
            _ when this == Value113 => onValue113(),
            _ when this == Value115 => onValue115(),
            _ when this == Value201 => onValue201(),
            _ when this == Value203 => onValue203(),
            _ when this == Value205 => onValue205(),
            _ when this == Value301 => onValue301(),
            _ when this == Value303 => onValue303(),
            _ when this == Value305 => onValue305(),
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
        Action onValue17,
        Action onValue101,
        Action onValue103,
        Action onValue105,
        Action onValue107,
        Action onValue109,
        Action onValue111,
        Action onValue113,
        Action onValue115,
        Action onValue201,
        Action onValue203,
        Action onValue205,
        Action onValue301,
        Action onValue303,
        Action onValue305,
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
        else if (this == Value17) onValue17();
        else if (this == Value101) onValue101();
        else if (this == Value103) onValue103();
        else if (this == Value105) onValue105();
        else if (this == Value107) onValue107();
        else if (this == Value109) onValue109();
        else if (this == Value111) onValue111();
        else if (this == Value113) onValue113();
        else if (this == Value115) onValue115();
        else if (this == Value201) onValue201();
        else if (this == Value203) onValue203();
        else if (this == Value205) onValue205();
        else if (this == Value301) onValue301();
        else if (this == Value303) onValue303();
        else if (this == Value305) onValue305();
        else otherwise(Value);
    }
}
