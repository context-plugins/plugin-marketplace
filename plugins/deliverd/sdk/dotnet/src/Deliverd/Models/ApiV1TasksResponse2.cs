using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1TasksResponse2
{
    [JsonPropertyName("tasks")]
    public required IReadOnlyList<TaskModel> Tasks { get; init; }

    /// <summary>
    /// Pass back as ?cursor= for the next page. Null means this is the end.
    /// </summary>
    [JsonPropertyName("nextCursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
