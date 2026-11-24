using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CheckoutPlanInput
{
    /// <summary>
    /// Plan identifier, as returned by the list plans endpoint. Selects a specific plan within the product.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Override the feature bullet points shown for this plan on the hosted checkout page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("features")]
    public IReadOnlyList<string>? Features { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
