using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CreateOrderLineAttributeRequestPricingPricingModel>))]
public sealed record CreateOrderLineAttributeRequestPricingPricingModel : OpenStringEnum<CreateOrderLineAttributeRequestPricingPricingModel>
{
    private CreateOrderLineAttributeRequestPricingPricingModel(string value) : base(value)
    {
    }

    public static readonly CreateOrderLineAttributeRequestPricingPricingModel PerUnit = new("perUnit");

    public static readonly CreateOrderLineAttributeRequestPricingPricingModel VolumePricing = new("volumePricing");

    public static readonly CreateOrderLineAttributeRequestPricingPricingModel GraduatedPricing = new(
        "graduatedPricing");

    public static readonly CreateOrderLineAttributeRequestPricingPricingModel PrepaidCredits = new("prepaidCredits");

    public static readonly CreateOrderLineAttributeRequestPricingPricingModel BracketedPrepaidCredits = new(
        "bracketedPrepaidCredits");

    public static readonly CreateOrderLineAttributeRequestPricingPricingModel Flat = new("flat");

    public TResult Match<TResult>(Func<TResult> onPerUnit,
        Func<TResult> onVolumePricing,
        Func<TResult> onGraduatedPricing,
        Func<TResult> onPrepaidCredits,
        Func<TResult> onBracketedPrepaidCredits,
        Func<TResult> onFlat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PerUnit => onPerUnit(),
            _ when this == VolumePricing => onVolumePricing(),
            _ when this == GraduatedPricing => onGraduatedPricing(),
            _ when this == PrepaidCredits => onPrepaidCredits(),
            _ when this == BracketedPrepaidCredits => onBracketedPrepaidCredits(),
            _ when this == Flat => onFlat(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerUnit,
        Action onVolumePricing,
        Action onGraduatedPricing,
        Action onPrepaidCredits,
        Action onBracketedPrepaidCredits,
        Action onFlat,
        Action<string> otherwise)
    {
        if (this == PerUnit) onPerUnit();
        else if (this == VolumePricing) onVolumePricing();
        else if (this == GraduatedPricing) onGraduatedPricing();
        else if (this == PrepaidCredits) onPrepaidCredits();
        else if (this == BracketedPrepaidCredits) onBracketedPrepaidCredits();
        else if (this == Flat) onFlat();
        else otherwise(Value);
    }
}
