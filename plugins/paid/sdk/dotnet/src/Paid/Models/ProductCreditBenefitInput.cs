using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record ProductCreditBenefitInput
{
    [JsonPropertyName("creditsCurrencyId")]
    public required string CreditsCurrencyId { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipient")]
    public ProductCreditBenefitInputRecipient? Recipient { get; init; } = ProductCreditBenefitInputRecipient.Organization;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isInfiniteTotal")]
    public bool? IsInfiniteTotal { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allocationCadence")]
    public ProductCreditBenefitInputAllocationCadence? AllocationCadence { get; init; } = ProductCreditBenefitInputAllocationCadence.Upfront;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditGrantTiming")]
    public ProductCreditBenefitInputCreditGrantTiming? CreditGrantTiming { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overageUnitPrice")]
    public double? OverageUnitPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverAmount")]
    public double? RolloverAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverDuration")]
    public double? RolloverDuration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rolloverDurationUnit")]
    public string? RolloverDurationUnit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
