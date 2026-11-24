using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsagePrepaidCredits variant
/// </summary>
public record ProductPricingInput7
{
    /// <summary>
    /// Discriminator value: UsagePrepaidCredits
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "UsagePrepaidCredits";

    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalType")]
    public ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType? SignalType { get; init; }

    [JsonPropertyName("creditsCurrencyId")]
    public required string CreditsCurrencyId { get; init; }

    [JsonPropertyName("creditCost")]
    public required double CreditCost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitValue")]
    public double? UnitValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.Arrears;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<ProductSimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
