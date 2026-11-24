using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PlanWithFeaturesFeaturesItems
{
    /// <summary>
    /// The name of the product
    /// </summary>
    [JsonPropertyName("productName")]
    public required string ProductName { get; init; }

    /// <summary>
    /// The name of the product attribute
    /// </summary>
    [JsonPropertyName("attributeName")]
    public required string AttributeName { get; init; }

    /// <summary>
    /// The pricing configuration for this feature
    /// </summary>
    [JsonPropertyName("pricing")]
    public required IReadOnlyDictionary<string, object> Pricing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
