using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Single-trace launch. A ``trace_id`` names a new trace; one that already exists is refused.
/// </summary>
public record RolloutRunRequest
{
    [JsonPropertyName("task_version_id")]
    public required Guid TaskVersionId { get; init; }

    [JsonPropertyName("model_id")]
    public required Guid ModelId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_id")]
    public TraceId? TraceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_steps")]
    public int? MaxSteps { get; init; } = 100;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_name")]
    public TraceName? TraceName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime_config")]
    public RuntimeConfigModel? RuntimeConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
