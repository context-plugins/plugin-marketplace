using System.Collections.Generic;
using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record NewsResponse
{
    [JsonPropertyName("searchParameters")]
    public required NewsParameters SearchParameters { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<SearchResult> Results { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<string>? Images { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
