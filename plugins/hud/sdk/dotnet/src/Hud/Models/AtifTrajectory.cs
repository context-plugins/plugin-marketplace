using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// ATIF v1.0-v1.8 document accepted by the public import endpoints.
/// </summary>
public record AtifTrajectory
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema_version")]
    public SchemaVersion? SchemaVersion { get; init; } = SchemaVersion.AtifV18;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("session_id")]
    public SessionId? SessionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trajectory_id")]
    public TrajectoryId? TrajectoryId { get; init; }

    [JsonPropertyName("agent")]
    public required AtifAgent Agent { get; init; }

    [JsonPropertyName("steps")]
    [MinLength(1)]
    [MaxLength(10000)]
    public required IReadOnlyList<AtifStep> Steps { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public Notes? Notes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("final_metrics")]
    public FinalMetrics? FinalMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("continued_trajectory_ref")]
    public ContinuedTrajectoryRef? ContinuedTrajectoryRef { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extra")]
    public Extra? Extra { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subagent_trajectories")]
    public SubagentTrajectories? SubagentTrajectories { get; init; }
}
