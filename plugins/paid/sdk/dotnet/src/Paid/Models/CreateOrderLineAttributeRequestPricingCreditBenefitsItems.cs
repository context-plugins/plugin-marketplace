using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CreateOrderLineAttributeRequestPricingCreditBenefitsItems
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditsCurrencyId")]
    public string? CreditsCurrencyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient")]
    public CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRecipient? Recipient { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverAmount")]
    public double? RolloverAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverDuration")]
    public double? RolloverDuration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverDurationUnit")]
    public CreateOrderLineAttributeRequestPricingCreditBenefitsItemsRolloverDurationUnit? RolloverDurationUnit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allocationCadence")]
    public CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence? AllocationCadence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditGrantTiming")]
    public CreateOrderLineAttributeRequestPricingCreditBenefitsItemsCreditGrantTiming? CreditGrantTiming { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
