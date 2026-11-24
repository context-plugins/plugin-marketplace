using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Core.Validation.Attributes;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Batch Job launch.
/// </summary>
public record RolloutRunListRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public NameHudPlatformJobsApi? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_id")]
    public TasksetId? TasksetId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_ids")]
    public IReadOnlyList<Guid>? TaskIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_version_ids")]
    public IReadOnlyList<Guid>? TaskVersionIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model_ids")]
    public IReadOnlyList<Guid>? ModelIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_size")]
    [Minimum(1)]
    public int? GroupSize { get; init; } = 1;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_steps")]
    [Minimum(1)]
    public int? MaxSteps { get; init; } = 100;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_concurrent")]
    public MaxConcurrentHudPlatformRolloutsApi? MaxConcurrent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime_config")]
    public RuntimeConfigModel? RuntimeConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
