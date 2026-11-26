using System.Collections.Generic;
using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record SitemapResponse
{
    [JsonPropertyName("links")]
    public required IReadOnlyList<string> Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
