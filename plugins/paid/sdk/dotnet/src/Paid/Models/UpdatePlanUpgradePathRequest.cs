using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record UpdatePlanUpgradePathRequest
{
    /// <summary>
    /// Paid product ID, for example <c>prod_abc123</c>
    /// </summary>
    [JsonPropertyName("productId")]
    public required string ProductId { get; init; }

    [JsonPropertyName("groups")]
    public required IReadOnlyList<PlanUpgradePathGroup> Groups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
