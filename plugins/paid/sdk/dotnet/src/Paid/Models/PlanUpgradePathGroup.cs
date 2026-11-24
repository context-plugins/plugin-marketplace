using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PlanUpgradePathGroup
{
    [JsonPropertyName("frequency")]
    public required string? Frequency { get; init; }

    [JsonPropertyName("planIds")]
    public required IReadOnlyList<string> PlanIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
