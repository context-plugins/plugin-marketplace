using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// SeatBasedPerUnit variant
/// </summary>
public record ProductPricingInput11
{
    /// <summary>
    /// Discriminator value: SeatBasedPerUnit
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "SeatBasedPerUnit";

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductSimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
