using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CheckoutProductInput
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Select specific plans within this product. Omit to offer all of the product's plans.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plans")]
    public IReadOnlyList<CheckoutPlanInput>? Plans { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
