using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Request to schedule a plan change with proration
/// </summary>
public record ProrationUpgradeRequest
{
    /// <summary>
    /// The current version of the order (for optimistic locking)
    /// </summary>
    [JsonPropertyName("orderVersion")]
    public required int OrderVersion { get; init; }

    /// <summary>
    /// The date when the plan change should take effect (ISO 8601 format)
    /// </summary>
    [JsonPropertyName("effectiveDate")]
    public required DateTimeOffset EffectiveDate { get; init; }

    /// <summary>
    /// The list of order line attributes to update
    /// </summary>
    [JsonPropertyName("updatedOrderLineAttributes")]
    public required IReadOnlyList<ProrationAttributeUpdate> UpdatedOrderLineAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
