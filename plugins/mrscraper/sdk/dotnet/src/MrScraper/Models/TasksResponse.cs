using System.Collections.Generic;
using System.Text.Json.Serialization;
using MrScraper.Core.Models;

namespace MrScraper.Models;

public record TasksResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<TaskTask>? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public ApiTPaginationMeta? Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
