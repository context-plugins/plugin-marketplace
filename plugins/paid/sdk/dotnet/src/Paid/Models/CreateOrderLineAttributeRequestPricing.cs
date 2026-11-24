using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CreateOrderLineAttributeRequestPricing
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventName")]
    public string? EventName { get; init; }

    [JsonPropertyName("chargeType")]
    public required CreateOrderLineAttributeRequestPricingChargeType ChargeType { get; init; }

    /// <summary>
    /// Single flat price point for this order attribute override. Do not send a currency-keyed map here.
    /// </summary>
    [JsonPropertyName("pricePoints")]
    public required CreateOrderLineAttributeRequestPricingPricePoints PricePoints { get; init; }

    [JsonPropertyName("pricingModel")]
    public required CreateOrderLineAttributeRequestPricingPricingModel PricingModel { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequency")]
    public CreateOrderLineAttributeRequestPricingBillingFrequency? BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public CreateOrderLineAttributeRequestPricingBillingType? BillingType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signalType")]
    public CreateOrderLineAttributeRequestPricingSignalType? SignalType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCurrencyId")]
    public string? CreditsCurrencyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCost")]
    public double? CreditCost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overageUnitPrice")]
    public double? OverageUnitPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditRolloverAmount")]
    public double? CreditRolloverAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditBenefits")]
    public IReadOnlyList<CreateOrderLineAttributeRequestPricingCreditBenefitsItems>? CreditBenefits { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricingInput")]
    public CreateOrderLineAttributeRequestPricingPricingInput? PricingInput { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditUnitBrackets")]
    public IReadOnlyList<CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems>? CreditUnitBrackets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
