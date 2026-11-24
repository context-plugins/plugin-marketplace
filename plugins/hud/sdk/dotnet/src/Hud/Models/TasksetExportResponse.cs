using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

/// <summary>
/// A taskset with its tasks in the task wire format (mirrors the upload shape).
/// </summary>
public record TasksetExportResponse
{
    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("tasks")]
    public required IReadOnlyList<TasksetExportTask> Tasks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
