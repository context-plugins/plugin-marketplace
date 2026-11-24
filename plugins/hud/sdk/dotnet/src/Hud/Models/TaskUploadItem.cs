using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Single item in a /tasks/upload payload.
/// <para>
/// Three shapes coexist:
///   - v6 shape: <c>env={"name": ...}</c> + <c>task_id</c> (the bare task id from the
///     env's manifest) + <c>args</c>/<c>validation</c>/<c>agent_config</c>. Resolved with
///     an exact lookup against the env's latest build; <c>args</c> are validated
///     against the task's manifest args schema.
///   - Pre-resolved shape: caller supplies <c>scenario_id</c> explicitly (tests
///     and direct API consumers).
///   - Build shape: <c>build_id</c>, optionally with <c>scenario_name</c>. The build
///     may not be built yet; the task binds to the named scenario when it is.
///     Without <c>scenario_name</c> the build's source defines the task, which
///     stays unbound.
/// </para>
/// <para>
/// Name-resolved shapes win over <c>scenario_id</c> (the resolver re-derives the
/// scenario from the env name + latest build).
/// </para>
/// </summary>
public record TaskUploadItem
{
    [JsonPropertyName("name")]
    [MaxLength(255)]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public ExternalId? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("env")]
    public Env? Env { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_id")]
    public TaskId? TaskId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public Args? Args { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validation")]
    public ValidationModel? Validation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("system_prompt")]
    public SystemPrompt? SystemPrompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent_config")]
    public AgentConfig? AgentConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public Columns1? Columns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime_config")]
    public RuntimeConfigModel? RuntimeConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifier")]
    public Verifier? Verifier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario_id")]
    public ScenarioId? ScenarioId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_id")]
    public BuildId? BuildId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario_name")]
    public ScenarioName? ScenarioName { get; init; }

    /// <summary>
    /// Leave a task the taskset already has under this external id unchanged
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keep_existing")]
    public bool? KeepExisting { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
