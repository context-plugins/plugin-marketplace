using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record JobTaskCoverage
{
    [JsonPropertyName("task_id")]
    public required Guid TaskId { get; init; }

    [JsonPropertyName("task_name")]
    public required string TaskName { get; init; }

    [JsonPropertyName("trace_count")]
    public required int TraceCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avg_reward")]
    public AvgReward? AvgReward { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statuses")]
    public IReadOnlyList<string>? Statuses { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invalidated_count")]
    public int? InvalidatedCount { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
