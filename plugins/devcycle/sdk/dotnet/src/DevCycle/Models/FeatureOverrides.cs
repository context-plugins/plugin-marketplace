using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record FeatureOverrides
{
    [JsonPropertyName("overrides")]
    public required IReadOnlyDictionary<string, object> Overrides { get; init; }

    [JsonPropertyName("uniqueTeamMembers")]
    public required double UniqueTeamMembers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
