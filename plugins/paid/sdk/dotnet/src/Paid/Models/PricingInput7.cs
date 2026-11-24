using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsagePrepaidCredits variant
/// </summary>
public record PricingInput7
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
    public PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType? SignalType { get; init; }

    [JsonPropertyName("creditsCurrencyId")]
    public required string CreditsCurrencyId { get; init; }

    [JsonPropertyName("creditCost")]
    public required double CreditCost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitValue")]
    public double? UnitValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType.Arrears;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<SimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
