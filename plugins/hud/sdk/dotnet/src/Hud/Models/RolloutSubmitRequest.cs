using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One v6 rollout under the SDK's job/trace identity.
/// <para>
/// The SDK's rollout atom mints ``trace_id``/``job_id`` and submits the task
/// by reference — env name, task id (the ``@env.task`` name), bound args —
/// plus the serialized agent spec. The platform materializes the
/// task_version chain, schedules an instance, and runs the rollout co-located
/// with the env; the SDK polls the trace to completion.
/// </para>
/// <para>
/// ``slug`` is the taskset row key (``Task.external_id`` / portable
/// ``Task.slug``). It is distinct from ``task`` (the ``@env.task`` id used for
/// scenario lookup) and is only needed when a job's taskset has multiple
/// versions sharing the same scenario+args.
/// </para>
/// </summary>
public record RolloutSubmitRequest
{
    [JsonPropertyName("trace_id")]
    public required Guid TraceId { get; init; }

    [JsonPropertyName("job_id")]
    public required Guid JobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public GroupId? GroupId { get; init; }

    [JsonPropertyName("env")]
    [MinLength(1)]
    public required string Env { get; init; }

    [JsonPropertyName("task")]
    [MinLength(1)]
    public required string Task { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public SlugHudPlatformRolloutsApi? Slug { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public object? Args { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime_config")]
    public RuntimeConfigModel? RuntimeConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifier")]
    public Verifier? Verifier { get; init; }

    /// <summary>
    /// Registered identity a hosted runner rebuilds the agent from.
    /// <para>
    /// Mirrors the v6 SDK's hosted submission: the ``AgentType`` value plus the
    /// ``Agent.dump()`` config with runtime-only state and credentials stripped.
    /// The control plane reads ``model`` (for inference routing and billing) and
    /// ``max_steps`` from ``config``, and stores ``config`` as submitted except
    /// that ``model`` becomes the catalog's canonical model name. The instance
    /// rebuilds the agent through ``AgentType``.
    /// </para>
    /// </summary>
    [JsonPropertyName("agent")]
    public required SubmittedAgentSpec Agent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
