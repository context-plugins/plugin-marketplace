using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

public record TaskUploadRequest
{
    /// <summary>
    /// The team taskset to upload to, created when absent; required without taskset_id
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_name")]
    public TasksetNameHudPlatformTasksApi? TasksetName { get; init; }

    /// <summary>
    /// The taskset to upload to; taskset_name is then ignored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_id")]
    public TasksetId? TasksetId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registry_id")]
    public RegistryId? RegistryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public ProjectId? ProjectId { get; init; }

    [JsonPropertyName("tasks")]
    public required IReadOnlyList<TaskUploadItem> Tasks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
