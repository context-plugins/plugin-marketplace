using System.Collections.Generic;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record TasksetJobsEnrichedResponse
{
    [JsonPropertyName("jobs")]
    public required IReadOnlyList<EnrichedJobThumbnail> Jobs { get; init; }

    [JsonPropertyName("total_count")]
    public required int TotalCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskset_tasks")]
    public IReadOnlyList<TasksetTaskRef>? TasksetTasks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
