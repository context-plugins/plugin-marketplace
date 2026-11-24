using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsagePerUnit variant
/// </summary>
public record ProductPricingInput4
{
    /// <summary>
    /// Discriminator value: UsagePerUnit
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "UsagePerUnit";

    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalType")]
    public ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType? SignalType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public ProductPricingInputDiscriminatorMappingUsagePerUnitBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType.Arrears;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductSimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
