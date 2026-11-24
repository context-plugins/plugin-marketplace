using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PlanAttribute
{
    [JsonPropertyName("productAttributeId")]
    public required string ProductAttributeId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    /// <summary>
    /// Pricing configuration for a plan attribute. Money amounts are expressed in cents.
    /// </summary>
    [JsonPropertyName("pricing")]
    public required PlanPricing1 Pricing { get; init; }

    [JsonPropertyName("creditBenefits")]
    public required IReadOnlyList<PlanCreditBenefit> CreditBenefits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
