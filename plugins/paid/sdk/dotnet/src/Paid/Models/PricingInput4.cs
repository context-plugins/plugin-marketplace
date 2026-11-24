using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsagePerUnit variant
/// </summary>
public record PricingInput4
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
    public PricingInputDiscriminatorMappingUsagePerUnitSignalType? SignalType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public PricingInputDiscriminatorMappingUsagePerUnitBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingUsagePerUnitBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingUsagePerUnitBillingType.Arrears;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<SimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
