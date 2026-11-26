using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// The enum partner price plan.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PartnerPricePlanType>))]
public sealed record PartnerPricePlanType : OpenStringEnum<PartnerPricePlanType>
{
    private PartnerPricePlanType(string value) : base(value)
    {
    }

    public static readonly PartnerPricePlanType PricePlan1 = new("PricePlan1");

    public static readonly PartnerPricePlanType PricePlan2 = new("PricePlan2");

    public static readonly PartnerPricePlanType PricePlan3 = new("PricePlan3");

    public static readonly PartnerPricePlanType PricePlan4 = new("PricePlan4");

    public static readonly PartnerPricePlanType PricePlan5 = new("PricePlan5");

    public TResult Match<TResult>(Func<TResult> onPricePlan1,
        Func<TResult> onPricePlan2,
        Func<TResult> onPricePlan3,
        Func<TResult> onPricePlan4,
        Func<TResult> onPricePlan5,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PricePlan1 => onPricePlan1(),
            _ when this == PricePlan2 => onPricePlan2(),
            _ when this == PricePlan3 => onPricePlan3(),
            _ when this == PricePlan4 => onPricePlan4(),
            _ when this == PricePlan5 => onPricePlan5(),
            _ => otherwise(Value)
        };

    public void Match(Action onPricePlan1,
        Action onPricePlan2,
        Action onPricePlan3,
        Action onPricePlan4,
        Action onPricePlan5,
        Action<string> otherwise)
    {
        if (this == PricePlan1) onPricePlan1();
        else if (this == PricePlan2) onPricePlan2();
        else if (this == PricePlan3) onPricePlan3();
        else if (this == PricePlan4) onPricePlan4();
        else if (this == PricePlan5) onPricePlan5();
        else otherwise(Value);
    }
}
