using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

public record TaskVersionResponse
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("task_id")]
    public required Guid TaskId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario_id")]
    public ScenarioId? ScenarioId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_id")]
    public BuildId? BuildId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario_name")]
    public ScenarioName? ScenarioName { get; init; }

    [JsonPropertyName("version")]
    public required int Version { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validation")]
    public ValidationModel? Validation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario_args")]
    public object? ScenarioArgs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("system_prompt")]
    public SystemPrompt? SystemPrompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent_config")]
    public object? AgentConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; } = "active";

    /// <summary>
    /// Canonical task workflow state.
    /// <para>
    /// Lives in the kernel so both the DB layer (orm.py pg enum) and the decision
    /// core (tasks.state) depend downward on it.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("current_state")]
    public TaskState? CurrentState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifecycle_stage")]
    public LifecycleStage? LifecycleStage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brief")]
    public Brief? Brief { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internally_reviewed_at")]
    public InternallyReviewedAt? InternallyReviewedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internally_reviewed_by")]
    public InternallyReviewedBy? InternallyReviewedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_review_decision")]
    public PreviousReviewDecision? PreviousReviewDecision { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_review_decision_version_number")]
    public PreviousReviewDecisionVersionNumber? PreviousReviewDecisionVersionNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision_requested_at")]
    public RevisionRequestedAt? RevisionRequestedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario")]
    public Scenario? Scenario { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public EnvironmentModel? Environment { get; init; }

    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
