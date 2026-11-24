using System.Text.Json.Serialization;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record AtifObservationResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_call_id")]
    public SourceCallId? SourceCallId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public ContentHudPlatformJobsApi? Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subagent_trajectory_ref")]
    public SubagentTrajectoryRef? SubagentTrajectoryRef { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public Extra? Extra { get; init; }
}
