using System.Collections.Generic;
using System.Text.Json.Serialization;
using MrScraper.Core.Models;

namespace MrScraper.Models;

/// <summary>
/// Response containing created tasks count and task details
/// </summary>
public record TaskBatchCreateResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public int? Created { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks")]
    public IReadOnlyList<TaskTask>? Tasks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
