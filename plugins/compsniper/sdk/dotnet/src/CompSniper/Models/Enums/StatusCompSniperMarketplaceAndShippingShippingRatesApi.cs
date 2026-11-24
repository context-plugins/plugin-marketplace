using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusCompSniperMarketplaceAndShippingShippingRatesApi>))]
public sealed record StatusCompSniperMarketplaceAndShippingShippingRatesApi : OpenStringEnum<StatusCompSniperMarketplaceAndShippingShippingRatesApi>
{
    private StatusCompSniperMarketplaceAndShippingShippingRatesApi(string value) : base(value)
    {
    }

    public static readonly StatusCompSniperMarketplaceAndShippingShippingRatesApi Eligible = new("eligible");

    public static readonly StatusCompSniperMarketplaceAndShippingShippingRatesApi Conditional = new("conditional");

    public TResult Match<TResult>(Func<TResult> onEligible,
        Func<TResult> onConditional,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Eligible => onEligible(),
            _ when this == Conditional => onConditional(),
            _ => otherwise(Value)
        };

    public void Match(Action onEligible, Action onConditional, Action<string> otherwise)
    {
        if (this == Eligible) onEligible();
        else if (this == Conditional) onConditional();
        else otherwise(Value);
    }
}
