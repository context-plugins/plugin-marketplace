using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.OneOf;

namespace Paid.Models;

public record UpdatePricingRequest
{
    [JsonPropertyName("pricing")]
    public required PricingInput15 Pricing { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditBenefits")]
    public IReadOnlyList<CreditBenefitInput>? CreditBenefits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
