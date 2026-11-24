using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

public record QaAgentResourceResultDetail
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public Result? Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canonical_result")]
    public CanonicalResult? CanonicalResult { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("canonical_verdict")]
    public CanonicalVerdict1? CanonicalVerdict { get; init; }

    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("qa_agent_id")]
    public required Guid QaAgentId { get; init; }

    /// <summary>
    /// Canonical resources a QA agent can analyze.
    /// </summary>
    [JsonPropertyName("subject_type")]
    public required QaAgentSubjectType SubjectType { get; init; }

    [JsonPropertyName("subject_id")]
    public required Guid SubjectId { get; init; }

    [JsonPropertyName("agent_name")]
    public required string AgentName { get; init; }

    [JsonPropertyName("status")]
    public required QaAgentResultStatus Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonPropertyName("analysis_trace_id")]
    public required Guid AnalysisTraceId { get; init; }

    [JsonPropertyName("agent_config_hash")]
    public required string AgentConfigHash { get; init; }

    [JsonPropertyName("stale")]
    public required bool Stale { get; init; }

    [JsonPropertyName("snapshot_hash")]
    public required string SnapshotHash { get; init; }

    [JsonPropertyName("attempt")]
    public required int Attempt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batch_id")]
    public BatchId? BatchId { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
