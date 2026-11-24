using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One exported task — the read-side mirror of <c>TaskUploadItem</c> (latest version per task).
/// <para>
/// <c>name</c> is the upload upsert key (<c>external_id</c> falling back to the task
/// name), so re-uploading an export updates the same tasks.
/// </para>
/// </summary>
public record TasksetExportTask
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("env")]
    public EnvHudPlatformTasksetsApi? Env { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scenario")]
    public ScenarioHudPlatformTasksetsApi? Scenario { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("args")]
    public object? Args { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validation")]
    public ValidationModel? Validation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent_config")]
    public AgentConfig? AgentConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public Columns1? Columns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime_config")]
    public RuntimeConfig? RuntimeConfig { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifier")]
    public Verifier? Verifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
