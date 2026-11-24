using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record ResultWithFeatureData
{
    [JsonPropertyName("evaluations")]
    public required IReadOnlyList<FeatureDataPoint> Evaluations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
