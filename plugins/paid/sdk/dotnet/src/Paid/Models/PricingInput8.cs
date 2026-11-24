using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// UsageBracketedPrepaidCredits variant
/// </summary>
public record PricingInput8
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
    public PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType? SignalType { get; init; }

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
    public required PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInput PricingInput { get; init; }

    [JsonPropertyName("creditUnitBrackets")]
    public required IReadOnlyList<PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems> CreditUnitBrackets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType.Arrears;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<SimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
