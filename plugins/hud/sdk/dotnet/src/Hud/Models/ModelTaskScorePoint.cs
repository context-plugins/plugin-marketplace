using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ModelTaskScorePoint
{
    [JsonPropertyName("task_id")]
    public required Guid TaskId { get; init; }

    [JsonPropertyName("avg_reward")]
    public required double AvgReward { get; init; }

    [JsonPropertyName("trace_count")]
    public required int TraceCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
