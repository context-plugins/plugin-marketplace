using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// SeatBasedVolume variant
/// </summary>
public record ProductPricingInput13
{
    /// <summary>
    /// Discriminator value: SeatBasedVolume
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "SeatBasedVolume";

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductTieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
