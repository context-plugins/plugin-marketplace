using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// SeatBasedGraduated variant
/// </summary>
public record ProductPricingInput12
{
    /// <summary>
    /// Discriminator value: SeatBasedGraduated
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "SeatBasedGraduated";

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductTieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
