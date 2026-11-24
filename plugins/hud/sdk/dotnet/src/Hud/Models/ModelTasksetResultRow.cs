using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// A model's performance on one taskset, aggregated from its graded traces.
/// </summary>
public record ModelTasksetResultRow
{
    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    [JsonPropertyName("taskset_name")]
    public required string TasksetName { get; init; }

    [JsonPropertyName("is_public")]
    public required bool IsPublic { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purpose")]
    public Purpose1? Purpose { get; init; }

    [JsonPropertyName("total_tasks")]
    public required int TotalTasks { get; init; }

    [JsonPropertyName("tasks_with_traces")]
    public required int TasksWithTraces { get; init; }

    [JsonPropertyName("avg_score")]
    public required AvgScore AvgScore { get; init; }

    [JsonPropertyName("tasks_in_range_0_99")]
    public required int TasksInRange099 { get; init; }

    [JsonPropertyName("tasks_in_range_5_75")]
    public required int TasksInRange575 { get; init; }

    [JsonPropertyName("tasks_in_range_15_40")]
    public required int TasksInRange1540 { get; init; }

    [JsonPropertyName("min_traces_per_task")]
    public required MinTracesPerTask MinTracesPerTask { get; init; }

    [JsonPropertyName("max_traces_per_task")]
    public required MaxTracesPerTask MaxTracesPerTask { get; init; }

    [JsonPropertyName("per_task_scores")]
    public required IReadOnlyList<ModelTaskScorePoint> PerTaskScores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
