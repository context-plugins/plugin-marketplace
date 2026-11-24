using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// One immutable check execution and its subject snapshot.
/// </summary>
public record CheckRunResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("check_key")]
    public required string CheckKey { get; init; }

    [JsonPropertyName("definition_version")]
    public required int DefinitionVersion { get; init; }

    [JsonPropertyName("definition_snapshot")]
    public required object DefinitionSnapshot { get; init; }

    [JsonPropertyName("definition_hash")]
    public required string DefinitionHash { get; init; }

    /// <summary>
    /// Execution mechanisms supported by a check definition.
    /// </summary>
    [JsonPropertyName("executor_type")]
    public required CheckExecutorType ExecutorType { get; init; }

    /// <summary>
    /// Platform resources supported by the check framework.
    /// </summary>
    [JsonPropertyName("subject_type")]
    public required CheckSubjectType SubjectType { get; init; }

    [JsonPropertyName("subject_id")]
    public required Guid SubjectId { get; init; }

    [JsonPropertyName("subject_snapshot")]
    public required object SubjectSnapshot { get; init; }

    [JsonPropertyName("snapshot_hash")]
    public required string SnapshotHash { get; init; }

    /// <summary>
    /// Lifecycle states for a platform check run.
    /// </summary>
    [JsonPropertyName("status")]
    public required CheckRunStatus Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public object? Result { get; init; }

    [JsonPropertyName("summary")]
    public required Summary Summary { get; init; }

    [JsonPropertyName("error")]
    public required Error Error { get; init; }

    [JsonPropertyName("execution_trace_id")]
    public required ExecutionTraceId ExecutionTraceId { get; init; }

    [JsonPropertyName("attempt")]
    public required int Attempt { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("completed_at")]
    public required CompletedAt CompletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
