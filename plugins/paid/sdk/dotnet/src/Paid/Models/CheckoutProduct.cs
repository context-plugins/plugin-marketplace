using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CheckoutProduct
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Plans selected within this product. Absent when the product is offered with all of its plans and none are individually configured.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plans")]
    public IReadOnlyList<CheckoutPlan>? Plans { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
