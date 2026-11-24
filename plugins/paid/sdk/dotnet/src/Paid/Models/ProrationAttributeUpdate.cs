using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// An attribute update for a proration upgrade
/// </summary>
public record ProrationAttributeUpdate
{
    /// <summary>
    /// The ID of the order line attribute to update
    /// </summary>
    [JsonPropertyName("orderLineAttributeId")]
    public required Guid OrderLineAttributeId { get; init; }

    /// <summary>
    /// The new pricing configuration
    /// </summary>
    [JsonPropertyName("newPricing")]
    public required IReadOnlyDictionary<string, object> NewPricing { get; init; }

    /// <summary>
    /// Optional new quantity for the attribute
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("newQuantity")]
    public double? NewQuantity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
