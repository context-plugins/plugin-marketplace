using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record EnvironmentUsageResponse
{
    [JsonPropertyName("summary")]
    public required EnvironmentUsageSummary Summary { get; init; }

    [JsonPropertyName("chart")]
    public required IReadOnlyList<EnvironmentUsageChartPoint> Chart { get; init; }

    [JsonPropertyName("environments")]
    public required IReadOnlyList<EnvironmentUsageRow> Environments { get; init; }

    [JsonPropertyName("team_id")]
    public required Guid TeamId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
