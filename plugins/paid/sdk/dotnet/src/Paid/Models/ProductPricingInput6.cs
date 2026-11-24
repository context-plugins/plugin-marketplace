using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsageVolume variant
/// </summary>
public record ProductPricingInput6
{
    /// <summary>
    /// Discriminator value: UsageVolume
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "UsageVolume";

    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalType")]
    public ProductPricingInputDiscriminatorMappingUsageVolumeSignalType? SignalType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public ProductPricingInputDiscriminatorMappingUsageVolumeBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingUsageVolumeBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingUsageVolumeBillingType.Arrears;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductTieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
