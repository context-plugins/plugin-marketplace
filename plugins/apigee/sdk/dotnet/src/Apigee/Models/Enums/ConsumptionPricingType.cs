using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Pricing model used for consumption-based charges.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConsumptionPricingType>))]
public sealed record ConsumptionPricingType : OpenStringEnum<ConsumptionPricingType>
{
    private ConsumptionPricingType(string value) : base(value)
    {
    }

    public static readonly ConsumptionPricingType ConsumptionPricingTypeUnspecified = new(
        "CONSUMPTION_PRICING_TYPE_UNSPECIFIED");

    public static readonly ConsumptionPricingType FixedPerUnit = new("FIXED_PER_UNIT");

    public static readonly ConsumptionPricingType Banded = new("BANDED");

    public static readonly ConsumptionPricingType Tiered = new("TIERED");

    public static readonly ConsumptionPricingType Stairstep = new("STAIRSTEP");

    public TResult Match<TResult>(Func<TResult> onConsumptionPricingTypeUnspecified,
        Func<TResult> onFixedPerUnit,
        Func<TResult> onBanded,
        Func<TResult> onTiered,
        Func<TResult> onStairstep,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConsumptionPricingTypeUnspecified => onConsumptionPricingTypeUnspecified(),
            _ when this == FixedPerUnit => onFixedPerUnit(),
            _ when this == Banded => onBanded(),
            _ when this == Tiered => onTiered(),
            _ when this == Stairstep => onStairstep(),
            _ => otherwise(Value)
        };

    public void Match(Action onConsumptionPricingTypeUnspecified,
        Action onFixedPerUnit,
        Action onBanded,
        Action onTiered,
        Action onStairstep,
        Action<string> otherwise)
    {
        if (this == ConsumptionPricingTypeUnspecified) onConsumptionPricingTypeUnspecified();
        else if (this == FixedPerUnit) onFixedPerUnit();
        else if (this == Banded) onBanded();
        else if (this == Tiered) onTiered();
        else if (this == Stairstep) onStairstep();
        else otherwise(Value);
    }
}
