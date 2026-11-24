using System.Collections.Generic;
using System.Text.Json.Serialization;
using Instagram.Core.Models;

namespace Instagram.Models;

public record InsightsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public IReadOnlyList<DatumInstagramGraphInsightsApi>? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
