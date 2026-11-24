using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// OneTimePerUnit variant
/// </summary>
public record PricingInput10
{
    /// <summary>
    /// Discriminator value: OneTimePerUnit
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "OneTimePerUnit";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("feeType")]
    public PricingInputDiscriminatorMappingOneTimePerUnitFeeType? FeeType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingOneTimePerUnitBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingOneTimePerUnitBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<SimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
