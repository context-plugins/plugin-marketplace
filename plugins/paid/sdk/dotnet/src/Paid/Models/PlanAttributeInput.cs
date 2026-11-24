using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.OneOf;

namespace Paid.Models;

public record PlanAttributeInput
{
    /// <summary>
    /// Product attribute ID to override in this plan
    /// </summary>
    [JsonPropertyName("productAttributeId")]
    public required string ProductAttributeId { get; init; }

    [JsonPropertyName("pricing")]
    public required ProductPricingInput15 Pricing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditBenefits")]
    public IReadOnlyList<ProductCreditBenefitInput>? CreditBenefits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
