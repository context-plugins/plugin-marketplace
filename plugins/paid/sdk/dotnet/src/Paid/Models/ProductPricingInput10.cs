using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// OneTimePerUnit variant
/// </summary>
public record ProductPricingInput10
{
    /// <summary>
    /// Discriminator value: OneTimePerUnit
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "OneTimePerUnit";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feeType")]
    public ProductPricingInputDiscriminatorMappingOneTimePerUnitFeeType? FeeType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductSimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
