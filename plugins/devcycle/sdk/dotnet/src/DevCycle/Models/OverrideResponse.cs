using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record OverrideResponse
{
    [JsonPropertyName("overrides")]
    public required IReadOnlyList<FeatureOverride> Overrides { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
