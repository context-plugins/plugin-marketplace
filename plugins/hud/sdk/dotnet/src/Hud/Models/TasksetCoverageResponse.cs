using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record TasksetCoverageResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_id")]
    public TasksetId? TasksetId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_name")]
    public TasksetName? TasksetName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks")]
    public IReadOnlyList<TasksetCoverageTask>? Tasks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_tasks")]
    public int? TotalTasks { get; init; } = 0;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks_with_traces")]
    public int? TasksWithTraces { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
