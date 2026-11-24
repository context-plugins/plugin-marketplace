using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record ProductAttributeOutput
{
    [JsonPropertyName("productAttributeId")]
    public required string ProductAttributeId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    [JsonPropertyName("pricing")]
    public required ProductPricingOutput Pricing { get; init; }

    [JsonPropertyName("creditBenefits")]
    public required IReadOnlyList<ProductCreditBenefitOutput> CreditBenefits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
