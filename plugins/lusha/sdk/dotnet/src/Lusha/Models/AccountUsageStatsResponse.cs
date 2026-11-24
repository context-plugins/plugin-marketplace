using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record AccountUsageStatsResponse
{
    [JsonPropertyName("usage")]
    public required IReadOnlyDictionary<string, UsageStats> Usage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
