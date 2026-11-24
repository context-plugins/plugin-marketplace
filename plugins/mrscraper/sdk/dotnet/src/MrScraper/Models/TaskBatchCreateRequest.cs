using System.Collections.Generic;
using System.Text.Json.Serialization;
using MrScraper.Core.Models;

namespace MrScraper.Models;

/// <summary>
/// Batch create request containing array of tasks
/// </summary>
public record TaskBatchCreateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<TaskTaskSwagger>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
