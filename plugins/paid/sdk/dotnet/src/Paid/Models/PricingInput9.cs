using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsageCostPlus variant
/// </summary>
public record PricingInput9
{
    /// <summary>
    /// Discriminator value: UsageCostPlus
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "UsageCostPlus";

    [JsonPropertyName("costPlusMultiplier")]
    public required double CostPlusMultiplier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalType")]
    public PricingInputDiscriminatorMappingUsageCostPlusSignalType? SignalType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public PricingInputDiscriminatorMappingUsageCostPlusBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingUsageCostPlusBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingUsageCostPlusBillingType.Arrears;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<SimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
