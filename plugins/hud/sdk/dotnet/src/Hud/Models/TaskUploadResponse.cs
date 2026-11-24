using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TaskUploadResponse
{
    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    [JsonPropertyName("taskset_name")]
    public required string TasksetName { get; init; }

    [JsonPropertyName("task_count")]
    public required int TaskCount { get; init; }

    /// <summary>
    /// One result per uploaded item, in order
    /// </summary>
    [JsonPropertyName("tasks")]
    public required IReadOnlyList<TaskUploadResult> Tasks { get; init; }

    [JsonPropertyName("tasks_created")]
    public required int TasksCreated { get; init; }

    [JsonPropertyName("tasks_updated")]
    public required int TasksUpdated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
