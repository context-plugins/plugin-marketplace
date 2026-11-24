using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingModelType>))]
public sealed record PricingModelType : OpenStringEnum<PricingModelType>
{
    private PricingModelType(string value) : base(value)
    {
    }

    public static readonly PricingModelType PerUnit = new("PerUnit");

    public static readonly PricingModelType VolumePricing = new("VolumePricing");

    public static readonly PricingModelType GraduatedPricing = new("GraduatedPricing");

    public static readonly PricingModelType PrepaidCredits = new("PrepaidCredits");

    public TResult Match<TResult>(Func<TResult> onPerUnit,
        Func<TResult> onVolumePricing,
        Func<TResult> onGraduatedPricing,
        Func<TResult> onPrepaidCredits,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PerUnit => onPerUnit(),
            _ when this == VolumePricing => onVolumePricing(),
            _ when this == GraduatedPricing => onGraduatedPricing(),
            _ when this == PrepaidCredits => onPrepaidCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerUnit,
        Action onVolumePricing,
        Action onGraduatedPricing,
        Action onPrepaidCredits,
        Action<string> otherwise)
    {
        if (this == PerUnit) onPerUnit();
        else if (this == VolumePricing) onVolumePricing();
        else if (this == GraduatedPricing) onGraduatedPricing();
        else if (this == PrepaidCredits) onPrepaidCredits();
        else otherwise(Value);
    }
}
