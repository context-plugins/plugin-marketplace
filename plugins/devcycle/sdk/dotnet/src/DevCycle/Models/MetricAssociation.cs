using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record MetricAssociation
{
    [JsonPropertyName("_project")]
    public required string Project { get; init; }

    [JsonPropertyName("feature")]
    public required FeatureDevCycleManagementMetricAssociationsApi Feature { get; init; }

    [JsonPropertyName("metric")]
    public required Metric Metric { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
