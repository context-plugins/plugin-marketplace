using System.Collections.Generic;
using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record SearchResponse
{
    [JsonPropertyName("searchParameters")]
    public required SearchParameters SearchParameters { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<SearchResult> Results { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("images")]
    public IReadOnlyList<string>? Images { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
