using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsageBracketedPrepaidCredits variant
/// </summary>
public record ProductPricingInput8
{
    /// <summary>
    /// Discriminator value: UsageBracketedPrepaidCredits
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "UsageBracketedPrepaidCredits";

    [JsonPropertyName("eventName")]
    public required string EventName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalType")]
    public ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType? SignalType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCurrencyId")]
    public string? CreditsCurrencyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitValue")]
    public double? UnitValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overageUnitPrice")]
    public double? OverageUnitPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditRolloverAmount")]
    public double? CreditRolloverAmount { get; init; }

    [JsonPropertyName("pricingInput")]
    public required ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput PricingInput { get; init; }

    [JsonPropertyName("creditUnitBrackets")]
    public required IReadOnlyList<ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems> CreditUnitBrackets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.Arrears;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<ProductSimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
