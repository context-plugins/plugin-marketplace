using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Run each check on each subject; the request's analysis rollouts share one hidden QA job.
/// <para>
/// Every check must judge the subjects' type. A task subject is its current version.
/// </para>
/// </summary>
public record QaRunCreateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trace_ids")]
    public TraceIds? TraceIds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_ids")]
    public TaskIds? TaskIds { get; init; }

    [JsonPropertyName("check_keys")]
    [MinLength(1)]
    public required IReadOnlyList<string> CheckKeys { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overwrite")]
    public bool? Overwrite { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
