using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PricingResponse
{
    [JsonPropertyName("productAttributeId")]
    public required string ProductAttributeId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("pricing")]
    public required PricingOutput Pricing { get; init; }

    [JsonPropertyName("creditBenefits")]
    public required IReadOnlyList<CreditBenefitOutput> CreditBenefits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
