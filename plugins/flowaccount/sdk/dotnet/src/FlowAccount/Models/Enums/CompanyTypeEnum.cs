using System;
using System.Text.Json.Serialization;
using FlowAccount.Core.Enum;

namespace FlowAccount.Models.Enums;

/// <summary>
/// 10 = PrivateWithTax
/// 20 = PrivateWithoutTax
/// 30 = Personal
/// 40 = PersonalWithTax
/// 50 = PartnershipLimitedWithTax
/// 60 = PartnershipLimitedWithoutTax
/// </summary>
[JsonConverter(typeof(IntEnumConverter<CompanyTypeEnum>))]
public sealed record CompanyTypeEnum : OpenIntEnum<CompanyTypeEnum>
{
    private CompanyTypeEnum(long value) : base(value)
    {
    }

    public static readonly CompanyTypeEnum Value10 = new(10L);

    public static readonly CompanyTypeEnum Value20 = new(20L);

    public static readonly CompanyTypeEnum Value30 = new(30L);

    public static readonly CompanyTypeEnum Value40 = new(40L);

    public static readonly CompanyTypeEnum Value50 = new(50L);

    public static readonly CompanyTypeEnum Value60 = new(60L);

    public TResult Match<TResult>(Func<TResult> onValue10,
        Func<TResult> onValue20,
        Func<TResult> onValue30,
        Func<TResult> onValue40,
        Func<TResult> onValue50,
        Func<TResult> onValue60,
        Func<long, TResult> otherwise) =>
        this switch
        {
            _ when this == Value10 => onValue10(),
            _ when this == Value20 => onValue20(),
            _ when this == Value30 => onValue30(),
            _ when this == Value40 => onValue40(),
            _ when this == Value50 => onValue50(),
            _ when this == Value60 => onValue60(),
            _ => otherwise(Value)
        };

    public void Match(Action onValue10,
        Action onValue20,
        Action onValue30,
        Action onValue40,
        Action onValue50,
        Action onValue60,
        Action<long> otherwise)
    {
        if (this == Value10) onValue10();
        else if (this == Value20) onValue20();
        else if (this == Value30) onValue30();
        else if (this == Value40) onValue40();
        else if (this == Value50) onValue50();
        else if (this == Value60) onValue60();
        else otherwise(Value);
    }
}
